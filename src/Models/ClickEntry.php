<?php

declare(strict_types=1);

namespace VitesseCms\Analytics\Models;

use MongoDB\BSON\UTCDateTimeInterface;
use VitesseCms\Database\AbstractCollection;

class ClickEntry extends AbstractCollection
{
    public string $target;
    public UTCDateTimeInterface $entryTime;
    public string $category;
    public string $action;

    public function getNameField(string $languageShort = null): string
    {
        return $this->slug ?? '';
    }
}
