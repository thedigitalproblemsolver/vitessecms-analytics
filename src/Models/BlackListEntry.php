<?php

declare(strict_types=1);

namespace VitesseCms\Analytics\Models;

use VitesseCms\Database\AbstractCollection;

class BlackListEntry extends AbstractCollection
{
    public string $ipAddress;
}
