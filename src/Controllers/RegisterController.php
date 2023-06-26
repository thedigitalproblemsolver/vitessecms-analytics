<?php declare(strict_types=1);

namespace VitesseCms\Analytics\Controllers;

use DateTime;
use Phalcon\Incubator\MongoDB\Helper\Mongo;
use stdClass;
use VitesseCms\Admin\Utils\AdminUtil;
use VitesseCms\Analytics\Enums\AnalyticsEntryEnum;
use VitesseCms\Analytics\Enums\BlackListEntryEnum;
use VitesseCms\Analytics\Factories\AnalyticsEntryFactory;
use VitesseCms\Analytics\Repositories\AnalyticsEntryRepository;
use VitesseCms\Analytics\Repositories\BlackListEntryRepository;
use VitesseCms\Analytics\Utils\ServerUtil;
use VitesseCms\Core\AbstractControllerAdmin;
use VitesseCms\Database\Models\FindValue;
use VitesseCms\Database\Models\FindValueIterator;
use VitesseCms\Sef\Utils\SefUtil;

class RegisterController extends AbstractControllerAdmin
{
    private AnalyticsEntryRepository $analyticsEntryRepository;
    private bool $isAdminPage;
    private BlackListEntryRepository $blackListEntryRepository;
    private string $ipAddress;

    public function onConstruct()
    {
        parent::onConstruct();

        $this->analyticsEntryRepository = $this->eventsManager->fire(AnalyticsEntryEnum::GET_REPOSITORY->value, new stdClass());
        $this->blackListEntryRepository = $this->eventsManager->fire(BlackListEntryEnum::GET_REPOSITORY->value, new stdClass());
        $this->isAdminPage = AdminUtil::isAdminPage();
        $this->ipAddress = $this->request->getClientAddress();
    }

    public function entryAction(): void
    {
        if ($this->shouldHandleRequest()) {
            $analyticsEntry = AnalyticsEntryFactory::create(
                $this->request->getPost('path'),
                new DateTime(),
                ServerUtil::getOperatingSystemFromUserAgent($this->request->getUserAgent()),
                ServerUtil::getBrowserNameFromUserAgent($this->request->getUserAgent()),
                ServerUtil::getBrowserVersionFromUserAgent($this->request->getUserAgent()),
                $this->request->getUserAgent()
            );
            $analyticsEntry->save();
        }

        $this->viewService->disable();
    }

    private function shouldHandleRequest(): bool
    {
        return !$this->isAdminPage &&
            $this->blackListEntryRepository->count(new FindValueIterator([new FindValue('ipAddress', $this->ipAddress)])) === 0 &&
            !SefUtil::clientIsBot($this->request->getUserAgent());
    }

    public function exitAction(string $id): void
    {
        if ($this->shouldHandleRequest()) {
            $analyticsEntry = $this->analyticsEntryRepository->getById($id);
            if ($analyticsEntry !== null && $analyticsEntry->exitTime === null) {
                $analyticsEntry->exitTime = Mongo::convertDatetime(new DateTime());
                $analyticsEntry->save();
            }
        }

        $this->viewService->disable();
    }
}