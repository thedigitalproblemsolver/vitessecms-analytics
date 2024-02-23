<?php

declare(strict_types=1);

namespace VitesseCms\Analytics\Listeners\Admin;

use Phalcon\Events\Event;
use VitesseCms\Admin\Models\AdminMenu;
use VitesseCms\Admin\Models\AdminMenuNavBarChildren;

final class AdminMenuListener
{
    public function addChildren(Event $event, AdminMenu $adminMenu): void
    {
        $adminMenu->addDropdown(
            'Insights',
            (new AdminMenuNavBarChildren())
                ->addChild('Pageviews', 'admin/analytics/adminanalyticsentry/adminlist')
                ->addChild('Click actions', 'admin/analytics/adminclickentry/adminlist')
                ->addChild('WebCrawler visits', 'admin/analytics/adminwebcrawlerentry/adminlist')
                ->addChild('Blacklist', 'admin/analytics/adminblacklistentry/adminlist')
                ->addChild('Dashboard', 'admin/analytics/admindashboard/index')
        );
    }
}
