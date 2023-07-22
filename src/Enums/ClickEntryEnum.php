<?php declare(strict_types=1);

namespace VitesseCms\Analytics\Enums;

enum ClickEntryEnum: string
{
    case LISTENER = 'ClickEntryListener';
    case GET_REPOSITORY = 'ClickEntryListener:getRepository';
}