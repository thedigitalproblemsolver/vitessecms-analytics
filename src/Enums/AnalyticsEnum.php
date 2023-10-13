<?php declare(strict_types=1);

namespace VitesseCms\Analytics\Enums;

enum AnalyticsEnum: string
{
    case ANALYTICS_ASSETS_LISTENER = 'AnalyticsAssetsListener';
    case ANALYTICS_ASSETS_BUILD_JAVASCRIPT = 'AnalyticsAssetsListener:buildJavascript';
}