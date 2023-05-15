<?php declare(strict_types=1);

namespace VitesseCms\Analytics\Controllers;

use stdClass;
use VitesseCms\Admin\Interfaces\AdminModelDeletableInterface;
use VitesseCms\Admin\Interfaces\AdminModelEditableInterface;
use VitesseCms\Admin\Interfaces\AdminModelListInterface;
use VitesseCms\Admin\Traits\TraitAdminModelDeletable;
use VitesseCms\Admin\Traits\TraitAdminModelList;
use VitesseCms\Analytics\Enums\AnalyticsEntryEnum;
use VitesseCms\Analytics\Models\AnalyticsEntryIterator;
use VitesseCms\Analytics\Repositories\AnalyticsEntryRepository;
use VitesseCms\Core\AbstractControllerAdmin;
use VitesseCms\Database\AbstractCollection;
use VitesseCms\Language\Enums\LanguageEnum;
use VitesseCms\Language\Services\LanguageService;

class AdminanalyticsentryController extends AbstractControllerAdmin implements
    AdminModelListInterface,
    AdminModelDeletableInterface,
    AdminModelEditableInterface
{
    use TraitAdminModelList;
    use TraitAdminModelDeletable;

    private readonly AnalyticsEntryRepository $analyticsEntryRepository;
    private readonly LanguageService $languageService;

    public function OnConstruct()
    {
        parent::OnConstruct();

        $this->analyticsEntryRepository = $this->eventsManager->fire(AnalyticsEntryEnum::GET_REPOSITORY->value, new stdClass());
        $this->languageService = $this->eventsManager->fire(LanguageEnum::ATTACH_SERVICE_LISTENER->value, new stdClass());
    }

    public function getModelList(): AnalyticsEntryIterator
    {
        return $this->analyticsEntryRepository->findAll(false, 10);
    }

    public function isDeletable(): bool
    {
        return true;
    }

    public function isEditable(): bool
    {
        return true;
    }

    public function editAction(string $id): void
    {
        // TODO: Implement editAction() method.
    }

    public function getDeletableModel(string $id): ?AbstractCollection
    {
        return $this->analyticsEntryRepository->getById($id, false);
    }

    public function getEditableModel(string $id): ?AbstractCollection
    {
        return $this->analyticsEntryRepository->getById($id, false);
    }
}