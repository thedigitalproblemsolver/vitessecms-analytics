<?php declare(strict_types=1);

namespace VitesseCms\Analytics\Listeners\Controllers;

use Phalcon\Events\Event;
use VitesseCms\Admin\Forms\AdminlistFormInterface;
use VitesseCms\Analytics\Controllers\AdminanalyticsentryController;

class AdminanalyticsentryControllerListener
{
    public function adminListFilter(Event $event, AdminanalyticsentryController $controller, AdminlistFormInterface $form): void
    {
        $form->addText('%CORE_NAME%', 'filter[slug]');
    }
}