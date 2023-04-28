<?php declare(strict_types=1);

namespace VitesseCms\Analytics\Factories;

use DateTime;
use Phalcon\Incubator\MongoDB\Helper\Mongo;
use VitesseCms\Analytics\Models\AnalyticsEntry;

class AnalyticsEntryFactory
{
    public static function create(
        string   $slug,
        DateTime $entryTime,
        string   $operatingSystem,
        string   $browser,
        string   $browserVersion,
        bool     $published = true
    ): AnalyticsEntry
    {
        $analyticsEntry = new AnalyticsEntry();
        $analyticsEntry->slug = $slug;
        $analyticsEntry->entryTime = Mongo::convertDatetime($entryTime);
        $analyticsEntry->browser = $browser;
        $analyticsEntry->operatingSystem = $operatingSystem;
        $analyticsEntry->browserVersion = $browserVersion;
        $analyticsEntry->published = $published;

        return $analyticsEntry;
    }
}