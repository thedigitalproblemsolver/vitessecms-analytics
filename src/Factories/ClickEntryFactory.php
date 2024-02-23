<?php

declare(strict_types=1);

namespace VitesseCms\Analytics\Factories;

use Phalcon\Incubator\MongoDB\Helper\Mongo;
use VitesseCms\Analytics\Models\ClickEntry;

final class ClickEntryFactory
{
    public static function create(
        string $slug,
        \DateTime $entryTime,
        string $category,
        string $target,
        string $action,
        bool $published = true
    ): ClickEntry {
        $clickEntry = new ClickEntry();
        $clickEntry->slug = $slug;
        $clickEntry->entryTime = Mongo::convertDatetime($entryTime);
        $clickEntry->published = $published;
        $clickEntry->category = $category;
        $clickEntry->target = $target;
        $clickEntry->action = $action;

        return $clickEntry;
    }
}
