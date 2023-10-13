<?php declare(strict_types=1);

namespace VitesseCms\Analytics\Listeners\Models;

use VitesseCms\Analytics\Repositories\AnalyticsEntryRepository;

class AnalyticsEntryListener
{
    public function __construct(private readonly AnalyticsEntryRepository $analyticsEntryRepository)
    {
    }

    public function getRepository(): AnalyticsEntryRepository
    {
        return $this->analyticsEntryRepository;
    }
}