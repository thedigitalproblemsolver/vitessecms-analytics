<?php

declare(strict_types=1);

namespace VitesseCms\Analytics\Blocks;

use Phalcon\Di\Di;
use VitesseCms\Analytics\Models\ClickEntry;
use VitesseCms\Analytics\Repositories\ClickEntryRepository;
use VitesseCms\Block\AbstractBlockModel;
use VitesseCms\Block\Models\Block;
use VitesseCms\Content\Models\Item;
use VitesseCms\Content\Repositories\ItemRepository;
use VitesseCms\Core\Services\ViewService;
use VitesseCms\Database\DTO\GetRepositoryDTO;
use VitesseCms\Database\Enums\RepositoryEnum;
use VitesseCms\Database\Models\FindOrder;
use VitesseCms\Database\Models\FindOrderIterator;
use VitesseCms\Database\Models\FindValue;
use VitesseCms\Database\Models\FindValueIterator;

class LatestClicks extends AbstractBlockModel
{
    private ClickEntryRepository $clickEntryRepository;
    private ItemRepository $itemRepository;

    public function __construct(ViewService $view, Di $di)
    {
        parent::__construct($view, $di);

        $this->clickEntryRepository = $this->eventsManager->fire(
            RepositoryEnum::GET_REPOSITORY->value,
            new GetRepositoryDTO(ClickEntry::class)
        );
        $this->itemRepository = $this->eventsManager->fire(
            RepositoryEnum::GET_REPOSITORY->value,
            new GetRepositoryDTO(Item::class)
        );
    }

    public function getTemplateParams(Block $block): array
    {
        $params = parent::getTemplateParams($block);
        $limit = $block->getInt('itemsLimit');

        $clickEntries = $this->clickEntryRepository->findAll(
            null,
            true,
            $limit * 2,
            new FindOrderIterator([new FindOrder('createdAt', -1)])
        );

        $items = [];
        $parsed = [];
        while ($clickEntries->valid()) {
            $clickEntry = $clickEntries->current();
            if (!isset($parsed[$clickEntry->slug]) && count($items) < $limit) {
                $items[] = $this->itemRepository->findFirst(
                    new FindValueIterator(
                        [
                            new FindValue(
                                'slug.' . $this->di->get('configuration')->getLanguageShort(),
                                ltrim($clickEntry->slug, '/')
                            )
                        ]
                    )
                );
                $parsed[$clickEntry->slug] = '';
            }

            $clickEntries->next();
        }

        $params['items'] = $items;

        return $params;
    }
}
