<?php
declare(strict_types=1);

namespace VitesseCms\Analytics\Listeners\Controllers;

use Phalcon\Events\Event;
use VitesseCms\Admin\Forms\AdminlistFormInterface;
use VitesseCms\Analytics\Controllers\AdminblacklistentryController;

final class AdminblacklistentryControllerListener
{
    public function adminListFilter(
        Event $event,
        AdminblacklistentryController $controller,
        AdminlistFormInterface $form
    ): void {
        $form->addText('%ANALYTICS_IP_ADDRESS%', 'filter[ipAddress]');
    }
}