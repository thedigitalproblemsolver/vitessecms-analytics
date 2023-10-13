<?php declare(strict_types=1);

namespace VitesseCms\Analytics\Enums;

enum WebCrawlerEntryEnum: string
{
    case LISTENER = 'WebCrawlerEntryListener';
    case GET_REPOSITORY = 'WebCrawlerEntryListener:getRepository';
}