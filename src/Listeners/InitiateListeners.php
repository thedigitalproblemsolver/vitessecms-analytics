<?php declare(strict_types=1);

namespace VitesseCms\Analytics\Listeners;

use VitesseCms\Analytics\Listeners\Admin\AdminMenuListener;
use VitesseCms\Core\Interfaces\InitiateListenersInterface;
use VitesseCms\Core\Interfaces\InjectableInterface;

class InitiateListeners implements InitiateListenersInterface
{
    public static function setListeners(InjectableInterface $di): void
    {
        $di->eventsManager->attach('adminMenu', new AdminMenuListener());
    }
}
