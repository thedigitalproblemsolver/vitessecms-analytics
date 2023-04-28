<?php declare(strict_types=1);

namespace VitesseCms\Analytics\Controllers;

use stdClass;
use VitesseCms\Admin\Interfaces\AdminModelListInterface;
use VitesseCms\Admin\Traits\TraitAdminModelList;
use VitesseCms\Analytics\Enums\AnalyticsEntryEnum;
use VitesseCms\Analytics\Models\AnalyticsEntryIterator;
use VitesseCms\Analytics\Repositories\AnalyticsEntryRepository;
use VitesseCms\Core\AbstractControllerAdmin;

class AdminanalyticsentryController extends AbstractControllerAdmin implements AdminModelListInterface
{
    use TraitAdminModelList;

    private AnalyticsEntryRepository $analyticsEntryRepository;

    public function OnConstruct()
    {
        parent::OnConstruct();

        $this->analyticsEntryRepository = $this->eventsManager->fire(AnalyticsEntryEnum::GET_REPOSITORY->value, new stdClass());

    }

    public function getModelList(): AnalyticsEntryIterator
    {
        return $this->analyticsEntryRepository->findAll(false, 10);
    }
}