<?php

declare(strict_types=1);

namespace VitesseCms\Analytics\Listeners\Models;

use VitesseCms\Database\Traits\TraitRepositoryConstructor;
use VitesseCms\Database\Traits\TraitRepositoryListener;

final class AnalyticsEntryListener
{
    use TraitRepositoryConstructor;
    use TraitRepositoryListener;
}