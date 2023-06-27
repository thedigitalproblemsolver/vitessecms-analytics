<?php declare(strict_types=1);

namespace VitesseCms\Analytics\Controllers;

use ArrayIterator;
use stdClass;
use VitesseCms\Admin\Interfaces\AdminModelDeletableInterface;
use VitesseCms\Admin\Interfaces\AdminModelListInterface;
use VitesseCms\Admin\Interfaces\AdminModelReadOnlyInterface;
use VitesseCms\Admin\Traits\TraitAdminModelDeletable;
use VitesseCms\Admin\Traits\TraitAdminModelList;
use VitesseCms\Admin\Traits\TraitAdminModelReadOnly;
use VitesseCms\Analytics\Enums\AnalyticsEntryEnum;
use VitesseCms\Analytics\Repositories\AnalyticsEntryRepository;
use VitesseCms\Core\AbstractControllerAdmin;
use VitesseCms\Database\AbstractCollection;
use VitesseCms\Database\Models\FindOrder;
use VitesseCms\Database\Models\FindOrderIterator;
use VitesseCms\Database\Models\FindValueIterator;
use VitesseCms\Language\Enums\LanguageEnum;
use VitesseCms\Language\Services\LanguageService;

class AdminanalyticsentryController extends AbstractControllerAdmin implements
    AdminModelListInterface,
    AdminModelDeletableInterface,
    AdminModelReadOnlyInterface
{
    use TraitAdminModelList;
    use TraitAdminModelDeletable;
    use TraitAdminModelReadOnly;

    private readonly AnalyticsEntryRepository $analyticsEntryRepository;
    private readonly LanguageService $languageService;
    private readonly bool $isPreviewable;

    public function OnConstruct()
    {
        parent::OnConstruct();

        $this->analyticsEntryRepository = $this->eventsManager->fire(AnalyticsEntryEnum::GET_REPOSITORY->value, new stdClass());
        $this->languageService = $this->eventsManager->fire(LanguageEnum::ATTACH_SERVICE_LISTENER->value, new stdClass());
        $this->isPreviewable = true;
    }

    public function getModelList(?FindValueIterator $findValueIterator): ArrayIterator
    {
        return $this->analyticsEntryRepository->findAll(
            $findValueIterator,
            false,
            99999,
            new FindOrderIterator([new FindOrder('createdAt', -1)])
        );
    }

    public function getModel(string $id): ?AbstractCollection
    {
        return $this->analyticsEntryRepository->getById($id, false);
    }
}