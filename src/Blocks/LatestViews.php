<?php

declare(strict_types=1);

namespace VitesseCms\Analytics\Blocks;

use Phalcon\Di\Di;
use VitesseCms\Analytics\Models\AnalyticsEntry;
use VitesseCms\Analytics\Repositories\AnalyticsEntryRepository;
use VitesseCms\Block\AbstractBlockModel;
use VitesseCms\Block\Models\Block;
use VitesseCms\Content\Models\Item;
use VitesseCms\Content\Repositories\ItemRepository;
use VitesseCms\Core\Services\ViewService;
use VitesseCms\Database\DTO\GetRepositoryDTO;
use VitesseCms\Database\Enums\FindValueTypeEnum;
use VitesseCms\Database\Enums\RepositoryEnum;
use VitesseCms\Database\Models\FindOrder;
use VitesseCms\Database\Models\FindOrderIterator;
use VitesseCms\Database\Models\FindValue;
use VitesseCms\Database\Models\FindValueIterator;

class LatestViews extends AbstractBlockModel
{
    private AnalyticsEntryRepository $analyticsEntryRepository;
    private ItemRepository $itemRepository;

    public function __construct(ViewService $view, Di $di)
    {
        parent::__construct($view, $di);

        $this->analyticsEntryRepository = $this->eventsManager->fire(
            RepositoryEnum::GET_REPOSITORY->value,
            new GetRepositoryDTO(AnalyticsEntry::class)
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


        $AnalyticsEntries = $this->analyticsEntryRepository->findAll(
            new FindValueIterator([
                new FindValue('slug', '/', FindValueTypeEnum::NOT->value)
            ]),
            true,
            $limit * 2,
            new FindOrderIterator([new FindOrder('createdAt', -1)])
        );

        $items = [];
        $parsed = [];
        while ($AnalyticsEntries->valid()) {
            $AnalyticsEntry = $AnalyticsEntries->current();
            if (!isset($parsed[$AnalyticsEntry->slug]) && count($items) < $limit) {
                $item = $this->itemRepository->findFirst(
                    new FindValueIterator(
                        [
                            new FindValue(
                                'slug.' . $this->di->get('configuration')->getLanguageShort(),
                                ltrim($AnalyticsEntry->slug, '/')
                            )
                        ]
                    )
                );
                if ($item !== null) {
                    $items[] = $item;
                }
                $parsed[$AnalyticsEntry->slug] = '';
            }

            $AnalyticsEntries->next();
        }

        $params['items'] = $items;

        return $params;
    }
}
