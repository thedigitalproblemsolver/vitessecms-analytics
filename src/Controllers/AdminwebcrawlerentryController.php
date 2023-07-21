<?php declare(strict_types=1);

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
use VitesseCms\Analytics\Enums\WebCrawlerEntryEnum;
use VitesseCms\Analytics\Repositories\WebCrawlerEntryRepository;
use VitesseCms\Core\AbstractControllerAdmin;
use VitesseCms\Database\AbstractCollection;
use VitesseCms\Database\Models\FindOrder;
use VitesseCms\Database\Models\FindOrderIterator;
use VitesseCms\Database\Models\FindValueIterator;
use VitesseCms\Language\Enums\LanguageEnum;
use VitesseCms\Language\Services\LanguageService;

class AdminwebcrawlerentryController extends AbstractControllerAdmin implements
    AdminModelListInterface,
    AdminModelDeletableInterface,
    AdminModelReadOnlyInterface
{
    use TraitAdminModelList,
        TraitAdminModelDeletable,
        TraitAdminModelReadOnly,
        TraitAdminModelPreviewable;

    private readonly WebCrawlerEntryRepository $webCrawlerEntryRepository;
    private readonly LanguageService $languageService;

    public function OnConstruct()
    {
        parent::OnConstruct();

        $this->webCrawlerEntryRepository = $this->eventsManager->fire(WebCrawlerEntryEnum::GET_REPOSITORY->value, new stdClass());
        $this->languageService = $this->eventsManager->fire(LanguageEnum::ATTACH_SERVICE_LISTENER->value, new stdClass());
    }

    public function getModelList(?FindValueIterator $findValueIterator): ArrayIterator
    {
        return $this->webCrawlerEntryRepository->findAll(
            $findValueIterator,
            false,
            99999,
            new FindOrderIterator([new FindOrder('createdAt', -1)])
        );
    }

    public function getModel(string $id): ?AbstractCollection
    {
        return $this->webCrawlerEntryRepository->getById($id, false);
    }
}