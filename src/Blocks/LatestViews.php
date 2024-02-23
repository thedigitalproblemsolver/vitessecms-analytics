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

final class LatestViews extends AbstractBlockModel
{
    private AnalyticsEntryRepository $analyticsEntryRepository;
    private ItemRepository $itemRepository;

    public function __construct(ViewService $view, Di $injectable)
    {
        parent::__construct($view, $injectable);

        $this->analyticsEntryRepository = $this->eventsManager->fire(
            RepositoryEnum::GET_REPOSITORY->value,
            new GetRepositoryDTO(AnalyticsEntry::class)
        );

        $this->itemRepository = $this->eventsManager->fire(
            RepositoryEnum::GET_REPOSITORY->value,
            new GetRepositoryDTO(Item::class)
        );
    }

    /**
     * @return array<string,AnalyticsEntry[]>
     */
    public function getTemplateParams(Block $block): array
    {
        $params = parent::getTemplateParams($block);
        $limit = $block->getInt('itemsLimit');

        $analyticsEntries = $this->analyticsEntryRepository->findAll(
            new FindValueIterator([
                new FindValue('slug', '/', FindValueTypeEnum::NOT->value),
            ]),
            true,
            $limit * 2,
            new FindOrderIterator([new FindOrder('createdAt', -1)])
        );

        $items = [];
        $parsed = [];
        while ($analyticsEntries->valid()) {
            $analyticsEntry = $analyticsEntries->current();
            if (!isset($parsed[$analyticsEntry->slug]) && count($items) < $limit) {
                $item = $this->itemRepository->findFirst(
                    new FindValueIterator(
                        [
                            new FindValue(
                                'slug.'.$this->di->get('configuration')->getLanguageShort(),
                                ltrim($analyticsEntry->slug, '/')
                            ),
                        ]
                    )
                );
                if (null !== $item) {
                    $items[] = $item;
                }
                $parsed[$analyticsEntry->slug] = '';
            }

            $analyticsEntries->next();
        }

        $params['items'] = $items;

        return $params;
    }
}
