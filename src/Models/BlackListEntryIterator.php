<?php

declare(strict_types=1);

namespace VitesseCms\Analytics\Models;

/**
 * @extends \ArrayIterator<int, BlackListEntry>
 */
class BlackListEntryIterator extends \ArrayIterator
{
    /**
     * @param array<int, BlackListEntry> $items
     */
    public function __construct(array $items)
    {
        parent::__construct($items);
    }

    public function current(): BlackListEntry
    {
        return parent::current();
    }
}
