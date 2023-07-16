<?php declare(strict_types=1);

namespace VitesseCms\Analytics\Enums;

enum RegisterEnum: string
{
    case LISTENER = 'RegisterListener';
    case EVENT_HANDLE_EXIT = 'RegisterListener:handleExit';
    case EVENT_HANDLE_ENTRY = 'RegisterListener:handleEntry';
}