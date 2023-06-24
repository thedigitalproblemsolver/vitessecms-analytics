<?php declare(strict_types=1);

namespace VitesseCms\Analytics\Controllers;

use stdClass;
use VitesseCms\Admin\Interfaces\AdminModelAddableInterface;
use VitesseCms\Admin\Interfaces\AdminModelDeletableInterface;
use VitesseCms\Admin\Interfaces\AdminModelFormInterface;
use VitesseCms\Admin\Interfaces\AdminModelListInterface;
use VitesseCms\Admin\Traits\TraitAdminModelAddable;
use VitesseCms\Admin\Traits\TraitAdminModelDeletable;
use VitesseCms\Admin\Traits\TraitAdminModelList;
use VitesseCms\Admin\Traits\TraitAdminSave;
use VitesseCms\Analytics\Enums\BlackListEntryEnum;
use VitesseCms\Analytics\Forms\BlackListEntryForm;
use VitesseCms\Analytics\Models\BlackListEntryIterator;
use VitesseCms\Analytics\Repositories\BlackListEntryRepository;
use VitesseCms\Core\AbstractControllerAdmin;
use VitesseCms\Database\AbstractCollection;
use VitesseCms\Database\Models\FindOrder;
use VitesseCms\Database\Models\FindOrderIterator;
use VitesseCms\Database\Models\FindValueIterator;

class AdminblacklistentryController extends AbstractControllerAdmin implements
    AdminModelListInterface,
    AdminModelDeletableInterface,
    AdminModelAddableInterface
{
    use TraitAdminModelList;
    use TraitAdminModelDeletable;
    use TraitAdminModelAddable;
    use TraitAdminSave;

    private readonly BlackListEntryRepository $blackListEntryRepository;

    public function OnConstruct()
    {
        parent::OnConstruct();

        $this->blackListEntryRepository = $this->eventsManager->fire(BlackListEntryEnum::GET_REPOSITORY->value, new stdClass());
    }

    public function getModelList(?FindValueIterator $findValueIterator, int $limit = 25): BlackListEntryIterator
    {
        return $this->blackListEntryRepository->findAll(
            $findValueIterator,
            false,
            $limit,
            new FindOrderIterator([new FindOrder('createdAt', -1)])
        );
    }

    public function getModel(string $id): ?AbstractCollection
    {
        return $this->blackListEntryRepository->getById($id, false);
    }

    public function getModelForm(): AdminModelFormInterface
    {
        return new BlackListEntryForm();
    }
}