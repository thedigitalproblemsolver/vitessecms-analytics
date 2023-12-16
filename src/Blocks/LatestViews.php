<?php

declare(strict_types=1);

namespace VitesseCms\Analytics\Blocks;

use Phalcon\Di\Di;
use stdClass;
use VitesseCms\Analytics\Enums\AnalyticsEntryEnum;
use VitesseCms\Analytics\Repositories\AnalyticsEntryRepository;
use VitesseCms\Block\AbstractBlockModel;
use VitesseCms\Block\Models\Block;
use VitesseCms\Content\Enum\ItemEnum;
use VitesseCms\Content\Repositories\ItemRepository;
use VitesseCms\Core\Services\ViewService;
use VitesseCms\Database\Enums\FindValueTypeEnum;
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

        $this->analyticsEntryRepository = $di->get('eventsManager')->fire(
            AnalyticsEntryEnum::GET_REPOSITORY->value,
            new stdClass()
        );

        $this->itemRepository = $di->get('eventsManager')->fire(ItemEnum::GET_REPOSITORY, new stdClass());
    }

    public function getTemplateParams(Block $block): array
    {
        $params = parent::getTemplateParams($block);

        $AnalyticsEntries = $this->analyticsEntryRepository->findAll(
            new FindValueIterator([
                new FindValue('slug', '/', FindValueTypeEnum::NOT->value)
            ]),
            true,
            30,
            new FindOrderIterator([new FindOrder('createdAt', -1)])
        );

        $items = [];
        $parsed = [];
        while ($AnalyticsEntries->valid()) {
            $AnalyticsEntry = $AnalyticsEntries->current();
            if (!isset($parsed[$AnalyticsEntry->slug]) && count($items) < 12) {
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
