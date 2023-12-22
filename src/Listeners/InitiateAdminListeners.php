<?php

declare(strict_types=1);

namespace VitesseCms\Analytics\Listeners;

use VitesseCms\Analytics\Blocks\LatestClicks;
use VitesseCms\Analytics\Blocks\LatestViews;
use VitesseCms\Analytics\Controllers\AdminanalyticsentryController;
use VitesseCms\Analytics\Controllers\AdminblacklistentryController;
use VitesseCms\Analytics\Controllers\AdminclickentryController;
use VitesseCms\Analytics\Controllers\AdminwebcrawlerentryController;
use VitesseCms\Analytics\Listeners\Admin\AdminMenuListener;
use VitesseCms\Analytics\Listeners\Blocks\LatestClicksListener;
use VitesseCms\Analytics\Listeners\Blocks\LatestViewsListener;
use VitesseCms\Analytics\Listeners\Controllers\AdminanalyticsentryControllerListener;
use VitesseCms\Analytics\Listeners\Controllers\AdminblacklistentryControllerListener;
use VitesseCms\Analytics\Listeners\Controllers\AdminclickentryControllerListener;
use VitesseCms\Analytics\Listeners\Controllers\AdminwebcrawlerentryControllerListener;
use VitesseCms\Core\Interfaces\InitiateListenersInterface;
use VitesseCms\Core\Interfaces\InjectableInterface;

class InitiateAdminListeners implements InitiateListenersInterface
{
    public static function setListeners(InjectableInterface $di): void
    {
        $di->eventsManager->attach('adminMenu', new AdminMenuListener());
        $di->eventsManager->attach(AdminanalyticsentryController::class, new AdminanalyticsentryControllerListener());
        $di->eventsManager->attach(AdminblacklistentryController::class, new AdminblacklistentryControllerListener());
        $di->eventsManager->attach(AdminwebcrawlerentryController::class, new AdminwebcrawlerentryControllerListener());
        $di->eventsManager->attach(AdminclickentryController::class, new AdminclickentryControllerListener());
        $di->eventsManager->attach(LatestClicks::class, new LatestClicksListener());
        $di->eventsManager->attach(LatestViews::class, new LatestViewsListener());
    }
}
