<?php

declare(strict_types=1);

namespace VitesseCms\Analytics\Listeners;

use VitesseCms\Analytics\Controllers\AdminanalyticsentryController;
use VitesseCms\Analytics\Controllers\AdminblacklistentryController;
use VitesseCms\Analytics\Controllers\AdminclickentryController;
use VitesseCms\Analytics\Controllers\AdminwebcrawlerentryController;
use VitesseCms\Analytics\Enums\AnalyticsEntryEnum;
use VitesseCms\Analytics\Enums\BlackListEntryEnum;
use VitesseCms\Analytics\Enums\ClickEntryEnum;
use VitesseCms\Analytics\Enums\WebCrawlerEntryEnum;
use VitesseCms\Analytics\Listeners\Admin\AdminMenuListener;
use VitesseCms\Analytics\Listeners\Controllers\AdminanalyticsentryControllerListener;
use VitesseCms\Analytics\Listeners\Controllers\AdminblacklistentryControllerListener;
use VitesseCms\Analytics\Listeners\Controllers\AdminclickentryControllerListener;
use VitesseCms\Analytics\Listeners\Controllers\AdminwebcrawlerentryControllerListener;
use VitesseCms\Analytics\Listeners\Models\AnalyticsEntryListener;
use VitesseCms\Analytics\Listeners\Models\BlackListEntryListener;
use VitesseCms\Analytics\Listeners\Models\ClickEntryListener;
use VitesseCms\Analytics\Listeners\Models\WebCrawlerEntryListener;
use VitesseCms\Analytics\Models\AnalyticsEntry;
use VitesseCms\Analytics\Models\BlackListEntry;
use VitesseCms\Analytics\Models\ClickEntry;
use VitesseCms\Analytics\Models\WebCrawlerEntry;
use VitesseCms\Analytics\Repositories\AnalyticsEntryRepository;
use VitesseCms\Analytics\Repositories\BlackListEntryRepository;
use VitesseCms\Analytics\Repositories\ClickEntryRepository;
use VitesseCms\Analytics\Repositories\WebCrawlerEntryRepository;
use VitesseCms\Core\Interfaces\InitiateListenersInterface;
use VitesseCms\Core\Interfaces\InjectableInterface;

class InitiateAdminListeners implements InitiateListenersInterface
{
    public static function setListeners(InjectableInterface $di): void
    {
        $di->eventsManager->attach('adminMenu', new AdminMenuListener());
        $di->eventsManager->attach(
            AnalyticsEntryEnum::LISTENER->value,
            new AnalyticsEntryListener(
                new AnalyticsEntryRepository(AnalyticsEntry::class)
            )
        );
        $di->eventsManager->attach(
            WebCrawlerEntryEnum::LISTENER->value,
            new WebCrawlerEntryListener(
                new WebCrawlerEntryRepository(WebCrawlerEntry::class)
            )
        );
        $di->eventsManager->attach(
            BlackListEntryEnum::LISTENER->value,
            new BlackListEntryListener(
                new BlackListEntryRepository(BlackListEntry::class)
            )
        );
        $di->eventsManager->attach(
            ClickEntryEnum::LISTENER->value,
            new ClickEntryListener(
                new ClickEntryRepository(ClickEntry::class)
            )
        );
        $di->eventsManager->attach(AdminanalyticsentryController::class, new AdminanalyticsentryControllerListener());
        $di->eventsManager->attach(AdminblacklistentryController::class, new AdminblacklistentryControllerListener());
        $di->eventsManager->attach(AdminwebcrawlerentryController::class, new AdminwebcrawlerentryControllerListener());
        $di->eventsManager->attach(AdminclickentryController::class, new AdminclickentryControllerListener());
    }
}
