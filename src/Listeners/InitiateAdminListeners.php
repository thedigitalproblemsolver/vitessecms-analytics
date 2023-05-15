<?php declare(strict_types=1);

namespace VitesseCms\Analytics\Listeners;

use VitesseCms\Analytics\Enums\AnalyticsEntryEnum;
use VitesseCms\Analytics\Listeners\Admin\AdminMenuListener;
use VitesseCms\Analytics\Repositories\AnalyticsEntryRepository;
use VitesseCms\Core\Interfaces\InitiateListenersInterface;
use VitesseCms\Core\Interfaces\InjectableInterface;

class InitiateAdminListeners implements InitiateListenersInterface
{
    public static function setListeners(InjectableInterface $di): void
    {
        $di->eventsManager->attach('adminMenu', new AdminMenuListener());
        $di->eventsManager->attach(AnalyticsEntryEnum::LISTENER->value, new AnalyticsEntryListener(
            new AnalyticsEntryRepository()
        ));
    }
}
