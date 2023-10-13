<?php declare(strict_types=1);

namespace VitesseCms\Analytics\Models;

use ArrayIterator;

class BlackListEntryIterator extends ArrayIterator
{
    public function __construct(array $items)
    {
        parent::__construct($items);
    }

    public function current(): BlackListEntry
    {
        return parent::current();
    }
}