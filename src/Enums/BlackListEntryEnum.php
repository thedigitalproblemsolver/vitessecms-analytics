<?php

declare(strict_types=1);

namespace VitesseCms\Analytics\Enums;

enum BlackListEntryEnum: string
{
    case LISTENER = 'BlackListEntryListener';
    case GET_REPOSITORY = 'BlackListEntryListener:getRepository';
}
