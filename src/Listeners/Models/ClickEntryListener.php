<?php declare(strict_types=1);

namespace VitesseCms\Analytics\Listeners\Models;

use VitesseCms\Analytics\Repositories\ClickEntryRepository;

class ClickEntryListener
{
    public function __construct(private readonly ClickEntryRepository $clickEntryRepository)
    {
    }

    public function getRepository(): ClickEntryRepository
    {
        return $this->clickEntryRepository;
    }
}