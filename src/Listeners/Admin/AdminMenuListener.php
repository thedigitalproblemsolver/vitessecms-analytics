<?php declare(strict_types=1);

namespace VitesseCms\Analytics\Listeners\Admin;

use Phalcon\Events\Event;
use VitesseCms\Admin\Models\AdminMenu;
use VitesseCms\Admin\Models\AdminMenuNavBarChildren;

class AdminMenuListener
{
    public function AddChildren(Event $event, AdminMenu $adminMenu): void
    {
        $children = new AdminMenuNavBarChildren();
        $children->addChild('Pageviews', 'admin/analytics/adminanalyticsentry/adminlist');
        $children->addChild('Blacklist', 'admin/analytics/adminblacklistentry/adminlist');
        $adminMenu->addDropdown('Insights', $children);
    }
}
