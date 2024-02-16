<?php

declare(strict_types=1);

namespace VitesseCms\Analytics\Models;

/**
 * @extends \ArrayIterator<int, WebCrawlerEntry>
 */
class WebCrawlerEntryIterator extends \ArrayIterator
{
    /**
     * @param array<int, WebCrawlerEntry> $items
     */
    public function __construct(array $items)
    {
        parent::__construct($items);
    }

    public function current(): WebCrawlerEntry
    {
        return parent::current();
    }
}
