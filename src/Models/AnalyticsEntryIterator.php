<?php

declare(strict_types=1);

namespace VitesseCms\Analytics\Models;

/**
 * @extends \ArrayIterator<int, AnalyticsEntry>
 */
class AnalyticsEntryIterator extends \ArrayIterator
{
    /**
     * @param array<int, AnalyticsEntry> $items
     */
    public function __construct(array $items)
    {
        parent::__construct($items);
    }

    public function current(): AnalyticsEntry
    {
        return parent::current();
    }
}
