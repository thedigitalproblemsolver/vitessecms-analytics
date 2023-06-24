<?php declare(strict_types=1);

namespace VitesseCms\Analytics\Listeners\Models;

use VitesseCms\Analytics\Repositories\BlackListEntryRepository;

class BlackListEntryListener
{
    public function __construct(private readonly BlackListEntryRepository $blackListEntryRepository)
    {
    }

    public function getRepository(): BlackListEntryRepository
    {
        return $this->blackListEntryRepository;
    }
}