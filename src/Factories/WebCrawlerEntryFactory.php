<?php

declare(strict_types=1);

namespace VitesseCms\Analytics\Factories;

use Phalcon\Incubator\MongoDB\Helper\Mongo;
use VitesseCms\Analytics\Models\WebCrawlerEntry;

final class WebCrawlerEntryFactory
{
    public static function create(
        string $slug,
        \DateTime $entryTime,
        string $userAgent,
        string $referer,
        bool $published = true
    ): WebCrawlerEntry {
        $webCrawlerEntry = new WebCrawlerEntry();
        $webCrawlerEntry->slug = $slug;
        $webCrawlerEntry->entryTime = Mongo::convertDatetime($entryTime);
        $webCrawlerEntry->published = $published;
        $webCrawlerEntry->userAgent = $userAgent;
        $webCrawlerEntry->referer = $referer;

        return $webCrawlerEntry;
    }
}
