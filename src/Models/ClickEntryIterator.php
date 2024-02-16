<?php

declare(strict_types=1);

namespace VitesseCms\Analytics\Models;

/**
 * @extends \ArrayIterator<int, ClickEntry>
 */
class ClickEntryIterator extends \ArrayIterator
{
    /**
     * @param array<int, ClickEntry> $items
     */
    public function __construct(array $items)
    {
        parent::__construct($items);
    }

    public function current(): ClickEntry
    {
        return parent::current();
    }
}
