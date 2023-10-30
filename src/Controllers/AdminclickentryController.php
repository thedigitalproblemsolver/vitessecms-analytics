<?php

declare(strict_types=1);

namespace VitesseCms\Analytics\Controllers;

use ArrayIterator;
use stdClass;
use VitesseCms\Admin\Interfaces\AdminModelDeletableInterface;
use VitesseCms\Admin\Interfaces\AdminModelListInterface;
use VitesseCms\Admin\Interfaces\AdminModelReadOnlyInterface;
use VitesseCms\Admin\Traits\TraitAdminModelDeletable;
use VitesseCms\Admin\Traits\TraitAdminModelList;
use VitesseCms\Admin\Traits\TraitAdminModelPreviewable;
use VitesseCms\Admin\Traits\TraitAdminModelReadOnly;
use VitesseCms\Analytics\Enums\ClickEntryEnum;
use VitesseCms\Analytics\Repositories\ClickEntryRepository;
use VitesseCms\Core\AbstractControllerAdmin;
use VitesseCms\Database\AbstractCollection;
use VitesseCms\Database\Models\FindOrder;
use VitesseCms\Database\Models\FindOrderIterator;
use VitesseCms\Database\Models\FindValueIterator;

class AdminclickentryController extends AbstractControllerAdmin implements
    AdminModelListInterface,
    AdminModelDeletableInterface,
    AdminModelReadOnlyInterface
{
    use TraitAdminModelDeletable;
    use TraitAdminModelList;
    use TraitAdminModelPreviewable;
    use TraitAdminModelReadOnly;

    private readonly ClickEntryRepository $clickEntryRepository;

    public function OnConstruct()
    {
        parent::OnConstruct();

        $this->clickEntryRepository = $this->eventsManager->fire(ClickEntryEnum::GET_REPOSITORY->value, new stdClass());
    }

    public function getModelList(?FindValueIterator $findValueIterator): ArrayIterator
    {
        return $this->clickEntryRepository->findAll(
            $findValueIterator,
            false,
            null,
            new FindOrderIterator([new FindOrder('createdAt', -1)])
        );
    }

    public function getModel(string $id): ?AbstractCollection
    {
        return $this->clickEntryRepository->getById($id, false);
    }
}