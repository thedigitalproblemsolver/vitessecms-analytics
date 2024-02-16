<?php

declare(strict_types=1);

namespace VitesseCms\Analytics\Enums;

enum AnalyticsEntryEnum: string
{
    case LISTENER = 'AnalyticsEntryListener';
    case GET_REPOSITORY = 'AnalyticsEntryListener:getRepository';
}
