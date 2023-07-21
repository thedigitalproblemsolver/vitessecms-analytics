<?php declare(strict_types=1);

namespace VitesseCms\Analytics\Listeners\Controllers;

use DateTime;
use Phalcon\Events\Event;
use Phalcon\Http\Request;
use Phalcon\Incubator\MongoDB\Helper\Mongo;
use VitesseCms\Analytics\DTO\RegisterExitDTO;
use VitesseCms\Analytics\Factories\AnalyticsEntryFactory;
use VitesseCms\Analytics\Factories\WebCrawlerEntryFactory;
use VitesseCms\Analytics\Repositories\AnalyticsEntryRepository;
use VitesseCms\Analytics\Repositories\BlackListEntryRepository;
use VitesseCms\Analytics\Utils\ServerUtil;
use VitesseCms\Database\Models\FindValue;
use VitesseCms\Database\Models\FindValueIterator;
use VitesseCms\Sef\Utils\SefUtil;

class RegisterControllerListener
{
    public function __construct(
        private readonly Request                  $request,
        private readonly AnalyticsEntryRepository $analyticsEntryRepository,
        private readonly BlackListEntryRepository $blackListEntryRepository,
        private readonly bool                     $isAdminPage,
    )
    {
    }

    public function handleEntry(): ?string
    {
        if (SefUtil::clientIsBot($this->request->getUserAgent())) {
            $this->parseWebCrawlerVisit();
        } else if ($this->shouldHandleRequest()) {
            return $this->parsePageView();

        }

        return null;
    }

    private function parseWebCrawlerVisit(): void
    {
        WebCrawlerEntryFactory::create(
            $this->request->getPost('path'),
            new DateTime(),
            $this->request->getUserAgent(),
            $this->request->getPost('referrer')
        )->save();
    }

    private function shouldHandleRequest(): bool
    {
        return !$this->isAdminPage &&
            $this->blackListEntryRepository->count(new FindValueIterator([new FindValue('ipAddress', $this->request->getClientAddress())])) === 0 &&
            !SefUtil::clientIsBot($this->request->getUserAgent());
    }

    private function parsePageView(): string
    {
        $analyticsEntry = AnalyticsEntryFactory::create(
            $this->request->getPost('path'),
            new DateTime(),
            ServerUtil::getOperatingSystemFromUserAgent($this->request->getUserAgent()),
            ServerUtil::getBrowserNameFromUserAgent($this->request->getUserAgent()),
            ServerUtil::getBrowserVersionFromUserAgent($this->request->getUserAgent()),
            $this->request->getUserAgent(),
            $this->request->getPost('referrer')
        );
        $analyticsEntry->save();

        return (string)$analyticsEntry->getId();
    }

    public function handleExit(Event $event, RegisterExitDTO $registerExitDTO): void
    {
        if ($this->shouldHandleRequest()) {
            $analyticsEntry = $this->analyticsEntryRepository->getById($registerExitDTO->id);
            if ($analyticsEntry !== null && $analyticsEntry->exitTime === null) {
                $analyticsEntry->exitTime = Mongo::convertDatetime(new DateTime());
                $analyticsEntry->save();
            }
        }
    }
}