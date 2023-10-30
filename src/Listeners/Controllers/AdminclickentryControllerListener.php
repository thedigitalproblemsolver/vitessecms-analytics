<?php declare(strict_types=1);

namespace VitesseCms\Analytics\Listeners\Controllers;

use Phalcon\Events\Event;
use VitesseCms\Admin\Forms\AdminlistFormInterface;
use VitesseCms\Analytics\Controllers\AdminclickentryController;

class AdminclickentryControllerListener
{
    public function adminListFilter(Event $event, AdminclickentryController $controller, AdminlistFormInterface $form): void
    {
        $form->addText('%CORE_NAME%', 'filter[slug]');
        $form->addText('%ANALYTICS_CATEGORY%', 'filter[category]');
        $form->addText('%ANALYTICS_ACTION%', 'filter[action]');
        $form->addText('%ANALYTICS_TARGET%', 'filter[target]');
    }
}