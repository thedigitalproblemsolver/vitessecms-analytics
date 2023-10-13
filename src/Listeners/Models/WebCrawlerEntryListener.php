<?php declare(strict_types=1);

namespace VitesseCms\Analytics\Listeners\Models;

use VitesseCms\Analytics\Repositories\WebCrawlerEntryRepository;

class WebCrawlerEntryListener
{
    public function __construct(private readonly WebCrawlerEntryRepository $webCrawlerEntryRepository)
    {
    }

    public function getRepository(): WebCrawlerEntryRepository
    {
        return $this->webCrawlerEntryRepository;
    }
}