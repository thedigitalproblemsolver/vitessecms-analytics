<?php

declare(strict_types=1);

namespace VitesseCms\Analytics\Controllers;

use ArrayIterator;
use VitesseCms\Admin\Interfaces\AdminModelAddableInterface;
use VitesseCms\Admin\Interfaces\AdminModelDeletableInterface;
use VitesseCms\Admin\Interfaces\AdminModelEditableInterface;
use VitesseCms\Admin\Interfaces\AdminModelFormInterface;
use VitesseCms\Admin\Interfaces\AdminModelListInterface;
use VitesseCms\Admin\Interfaces\AdminModelPublishableInterface;
use VitesseCms\Admin\Traits\TraitAdminModelAddable;
use VitesseCms\Admin\Traits\TraitAdminModelDeletable;
use VitesseCms\Admin\Traits\TraitAdminModelEditable;
use VitesseCms\Admin\Traits\TraitAdminModelList;
use VitesseCms\Admin\Traits\TraitAdminModelPublishable;
use VitesseCms\Admin\Traits\TraitAdminModelSave;
use VitesseCms\Analytics\Forms\BlackListEntryForm;
use VitesseCms\Analytics\Models\BlackListEntry;
use VitesseCms\Analytics\Repositories\BlackListEntryRepository;
use VitesseCms\Core\AbstractControllerAdmin;
use VitesseCms\Database\AbstractCollection;
use VitesseCms\Database\DTO\GetRepositoryDTO;
use VitesseCms\Database\Enums\RepositoryEnum;
use VitesseCms\Database\Models\FindOrder;
use VitesseCms\Database\Models\FindOrderIterator;
use VitesseCms\Database\Models\FindValueIterator;

class AdminblacklistentryController extends AbstractControllerAdmin implements
    AdminModelListInterface,
    AdminModelDeletableInterface,
    AdminModelAddableInterface,
    AdminModelEditableInterface,
    AdminModelPublishableInterface
{
    use TraitAdminModelAddable;
    use TraitAdminModelDeletable;
    use TraitAdminModelEditable;
    use TraitAdminModelList;
    use TraitAdminModelPublishable;
    use TraitAdminModelSave;

    private readonly BlackListEntryRepository $blackListEntryRepository;

    public function OnConstruct()
    {
        parent::OnConstruct();

        $this->blackListEntryRepository = $this->eventsManager->fire(
            RepositoryEnum::GET_REPOSITORY->value,
            new GetRepositoryDTO(BlackListEntry::class)
        );
    }

    public function getModelList(?FindValueIterator $findValueIterator): ArrayIterator
    {
        return $this->blackListEntryRepository->findAll(
            $findValueIterator,
            false,
            null,
            new FindOrderIterator([new FindOrder('createdAt', -1)])
        );
    }

    public function getModel(string $id): ?AbstractCollection
    {
        return match ($id) {
            'new' => new BlackListEntry(),
            default => $this->blackListEntryRepository->getById($id, false)
        };
    }

    public function getModelForm(): AdminModelFormInterface
    {
        return new BlackListEntryForm();
    }
}