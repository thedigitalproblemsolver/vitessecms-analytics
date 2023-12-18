<?php

declare(strict_types=1);

namespace VitesseCms\Analytics\Blocks;

use Phalcon\Di\Di;
use stdClass;
use VitesseCms\Analytics\Enums\ClickEntryEnum;
use VitesseCms\Analytics\Repositories\ClickEntryRepository;
use VitesseCms\Block\AbstractBlockModel;
use VitesseCms\Block\Models\Block;
use VitesseCms\Content\Enum\ItemEnum;
use VitesseCms\Content\Repositories\ItemRepository;
use VitesseCms\Core\Services\ViewService;
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

        $this->clickEntryRepository = $di->get('eventsManager')->fire(
            ClickEntryEnum::GET_REPOSITORY->value,
            new stdClass()
        );
        $this->itemRepository = $di->get('eventsManager')->fire(ItemEnum::GET_REPOSITORY, new stdClass());
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
