<?php declare(strict_types=1);

namespace VitesseCms\Analytics\Models;

use ArrayIterator;

class BlackListEntryIterator extends ArrayIterator
{
    public function __construct(array $products)
    {
        parent::__construct($products);
    }

    public function current(): BlackListEntry
    {
        return parent::current();
    }
}