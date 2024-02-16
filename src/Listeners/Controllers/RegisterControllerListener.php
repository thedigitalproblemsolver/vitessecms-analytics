<?php

declare(strict_types=1);

namespace VitesseCms\Analytics\Listeners\Controllers;

use Phalcon\Events\Event;
use Phalcon\Http\Request;
use Phalcon\Incubator\MongoDB\Helper\Mongo;
use VitesseCms\Analytics\DTO\ClickEntryDTO;
use VitesseCms\Analytics\DTO\RegisterExitDTO;
use VitesseCms\Analytics\Factories\AnalyticsEntryFactory;
use VitesseCms\Analytics\Factories\ClickEntryFactory;
use VitesseCms\Analytics\Factories\WebCrawlerEntryFactory;
use VitesseCms\Analytics\Repositories\AnalyticsEntryRepository;
use VitesseCms\Analytics\Repositories\BlackListEntryRepository;
use VitesseCms\Analytics\Utils\ServerUtil;
use VitesseCms\Database\Models\FindValue;
use VitesseCms\Database\Models\FindValueIterator;
use VitesseCms\Sef\Utils\SefUtil;

final class RegisterControllerListener
{
    public function __construct(
        private readonly Request $request,
        private readonly AnalyticsEntryRepository $analyticsEntryRepository,
        private readonly BlackListEntryRepository $blackListEntryRepository,
        private readonly bool $isAdminPage,
    ) {
    }

    public function handleEntry(): ?string
    {
        if (SefUtil::clientIsBot($this->request->getUserAgent())) {
            $this->parseWebCrawlerVisit();

            return null;
        }

        if ($this->shouldHandleRequest()) {
            return $this->parsePageView();
        }

        return null;
    }

    private function parseWebCrawlerVisit(): void
    {
        WebCrawlerEntryFactory::create(
            $this->request->getPost('path'),
            new \DateTime(),
            $this->request->getUserAgent(),
            $this->request->getPost('referrer')
        )->save();
    }

    private function shouldHandleRequest(): bool
    {
        return !$this->isAdminPage
            && 0 === $this->blackListEntryRepository->count(
                new FindValueIterator([new FindValue('ipAddress', $this->request->getClientAddress())])
            )
            && !SefUtil::clientIsBot($this->request->getUserAgent());
    }

    private function parsePageView(): string
    {
        $analyticsEntry = AnalyticsEntryFactory::create(
            $this->request->getPost('path'),
            new \DateTime(),
            ServerUtil::getOperatingSystemFromUserAgent($this->request->getUserAgent()),
            ServerUtil::getBrowserNameFromUserAgent($this->request->getUserAgent()),
            ServerUtil::getBrowserVersionFromUserAgent($this->request->getUserAgent()),
            $this->request->getUserAgent(),
            $this->request->getPost('referrer')
        );
        $analyticsEntry->save();

        return (string) $analyticsEntry->getId();
    }

    public function handleExit(Event $event, RegisterExitDTO $registerExitDTO): void
    {
        if ($this->shouldHandleRequest()) {
            $analyticsEntry = $this->analyticsEntryRepository->getById($registerExitDTO->entryId);
            if (null !== $analyticsEntry && null === $analyticsEntry->exitTime) {
                $analyticsEntry->exitTime = Mongo::convertDatetime(new \DateTime());
                $analyticsEntry->save();
            }
        }
    }

    public function handleClick(Event $event, ClickEntryDTO $clickEntryDTO): void
    {
        if ($this->shouldHandleRequest()) {
            ClickEntryFactory::create(
                $clickEntryDTO->path,
                new \DateTime(),
                $clickEntryDTO->category,
                $clickEntryDTO->target,
                $clickEntryDTO->action
            )->save();
        }
    }
}
