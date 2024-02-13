<?php

declare(strict_types=1);

namespace VitesseCms\Analytics\Listeners\Controllers;

use Phalcon\Events\Event;
use VitesseCms\Admin\Forms\AdminlistFormInterface;
use VitesseCms\Analytics\Controllers\AdminanalyticsentryController;

class AdminanalyticsentryControllerListener
{
    public function adminListFilter(
        Event $event,
        AdminanalyticsentryController $adminanalyticsentryController,
        AdminlistFormInterface $form
    ): void {
        $form->addText('%CORE_NAME%', 'filter[slug]');
        $form->addText('%ANALYTICS_REFERER%', 'filter[referer]');
        $form->addText('%ANALYTICS_USER_AGENT%', 'filter[userAgent]');
        $form->addDate('%ANALYTICS_DATE_FROM%', 'filter[date][createdAt][from]');
        $form->addDate('%ANALYTICS_DATE_TILL%', 'filter[date][createdAt][till]');
    }
}