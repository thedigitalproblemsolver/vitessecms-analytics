<?php declare(strict_types=1);

namespace VitesseCms\Analytics\Listeners;

use VitesseCms\Analytics\Enums\AnalyticsEntryEnum;
use VitesseCms\Analytics\Enums\AnalyticsEnum;
use VitesseCms\Analytics\Enums\BlackListEntryEnum;
use VitesseCms\Analytics\Listeners\Admin\AdminMenuListener;
use VitesseCms\Analytics\Listeners\Models\AnalyticsEntryListener;
use VitesseCms\Analytics\Listeners\Models\BlackListEntryListener;
use VitesseCms\Analytics\Repositories\AnalyticsEntryRepository;
use VitesseCms\Analytics\Repositories\BlackListEntryRepository;
use VitesseCms\Core\Interfaces\InitiateListenersInterface;
use VitesseCms\Core\Interfaces\InjectableInterface;
use VitesseCms\Media\Enums\AssetsEnum;

class InitiateListeners implements InitiateListenersInterface
{
    public static function setListeners(InjectableInterface $di): void
    {
        $di->eventsManager->attach('adminMenu', new AdminMenuListener());
        $di->eventsManager->attach(AssetsEnum::RENDER_LISTENER->value, new RenderListener($di->assets));
        $di->eventsManager->attach(AnalyticsEnum::ANALYTICS_ASSETS_LISTENER->value, new AssetsListener(
            $di->assets,
            $di->configuration->getVendorNameDir()
        ));
        $di->eventsManager->attach(BlackListEntryEnum::LISTENER->value, new BlackListEntryListener(
            new BlackListEntryRepository()
        ));
        $di->eventsManager->attach(AnalyticsEntryEnum::LISTENER->value, new AnalyticsEntryListener(
            new AnalyticsEntryRepository()
        ));
    }
}
