<?php

declare(strict_types=1);

namespace VitesseCms\Analytics\Controllers;

use VitesseCms\Admin\Interfaces\AdminModelDeletableInterface;
use VitesseCms\Admin\Interfaces\AdminModelListInterface;
use VitesseCms\Admin\Interfaces\AdminModelReadOnlyInterface;
use VitesseCms\Admin\Traits\TraitAdminModelDeletable;
use VitesseCms\Admin\Traits\TraitAdminModelList;
use VitesseCms\Admin\Traits\TraitAdminModelPreviewable;
use VitesseCms\Admin\Traits\TraitAdminModelReadOnly;
use VitesseCms\Analytics\Models\AnalyticsEntry;
use VitesseCms\Analytics\Repositories\AnalyticsEntryRepository;
use VitesseCms\Core\AbstractControllerAdmin;
use VitesseCms\Database\AbstractCollection;
use VitesseCms\Database\DTO\GetRepositoryDTO;
use VitesseCms\Database\Enums\RepositoryEnum;
use VitesseCms\Database\Models\FindOrder;
use VitesseCms\Database\Models\FindOrderIterator;
use VitesseCms\Database\Models\FindValueIterator;

final class AdminanalyticsentryController extends AbstractControllerAdmin implements AdminModelListInterface, AdminModelDeletableInterface, AdminModelReadOnlyInterface
{
    use TraitAdminModelDeletable;
    use TraitAdminModelList;
    use TraitAdminModelPreviewable;
    use TraitAdminModelReadOnly;

    private AnalyticsEntryRepository $analyticsEntryRepository;

    public function OnConstruct()
    {
        parent::OnConstruct();

        $this->analyticsEntryRepository = $this->eventsManager->fire(
            RepositoryEnum::GET_REPOSITORY->value,
            new GetRepositoryDTO(AnalyticsEntry::class)
        );
    }

    public function getModelList(?FindValueIterator $findValueIterator): \ArrayIterator
    {
        return $this->analyticsEntryRepository->findAll(
            $findValueIterator,
            false,
            null,
            new FindOrderIterator([new FindOrder('createdAt', -1)])
        );
    }

    public function getModel(string $modelModelId): ?AbstractCollection
    {
        return $this->analyticsEntryRepository->getById($modelModelId, false);
    }
}
