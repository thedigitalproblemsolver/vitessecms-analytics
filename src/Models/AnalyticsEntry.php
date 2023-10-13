<?php declare(strict_types=1);

namespace VitesseCms\Analytics\Models;

use MongoDB\BSON\UTCDateTimeInterface;
use VitesseCms\Database\AbstractCollection;

class AnalyticsEntry extends AbstractCollection
{
    public string $userAgent;
    public UTCDateTimeInterface $entryTime;
    public ?UTCDateTimeInterface $exitTime = null;
    public string $operatingSystem;
    public string $browser;
    public string $browserVersion;
    public string $referer;

    public function getNameField(?string $languageShort = null): string
    {
        return $this->slug ?? '';
    }
}