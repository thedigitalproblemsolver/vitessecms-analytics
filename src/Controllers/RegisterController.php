<?php declare(strict_types=1);

namespace VitesseCms\Analytics\Controllers;

use DateTime;
use Phalcon\Incubator\MongoDB\Helper\Mongo;
use stdClass;
use VitesseCms\Analytics\Enums\AnalyticsEntryEnum;
use VitesseCms\Analytics\Factories\AnalyticsEntryFactory;
use VitesseCms\Analytics\Repositories\AnalyticsEntryRepository;
use VitesseCms\Analytics\Utils\ServerUtil;
use VitesseCms\Core\AbstractControllerAdmin;

/** https://www.webdevsplanet.com/post/building-custom-web-analytics-tool */
class RegisterController extends AbstractControllerAdmin
{
    private AnalyticsEntryRepository $analyticsEntryRepository;

    public function onConstruct()
    {
        parent::onConstruct();

        $this->analyticsEntryRepository = $this->eventsManager->fire(AnalyticsEntryEnum::GET_REPOSITORY->value, new stdClass());
    }

    public function entryAction()
    {
        $analyticsEntry = AnalyticsEntryFactory::create(
            $this->request->getPost('path'),
            new DateTime(),
            ServerUtil::getOperatingSystemFromUserAgent($this->request->getUserAgent()),
            ServerUtil::getBrowserNameFromUserAgent($this->request->getUserAgent()),
            ServerUtil::getBrowserVersionFromUserAgent($this->request->getUserAgent())
        );
        $analyticsEntry->save();

        $this->jsonResponse(['id' => (string)$analyticsEntry->getId()]);
    }

    public function exitAction(string $id)
    {
        $analyticsEntry = $this->analyticsEntryRepository->getById($id);
        $result = false;
        if ($analyticsEntry !== null && $analyticsEntry->exitTime === null) {
            $analyticsEntry->exitTime = Mongo::convertDatetime(new DateTime());
            $result = $analyticsEntry->save();
        }
        $this->jsonResponse([], $result);
    }
}