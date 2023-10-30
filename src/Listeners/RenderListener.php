<?php declare(strict_types=1);

namespace VitesseCms\Analytics\Listeners;

use VitesseCms\Analytics\Enums\AnalyticsEnum;
use VitesseCms\Media\Services\AssetsService;

class RenderListener
{
    public function __construct(private readonly AssetsService $assetsService)
    {
    }

    public function loadAssets(): void
    {
        $this->assetsService->setEventLoader(AnalyticsEnum::ANALYTICS_ASSETS_BUILD_JAVASCRIPT->value);
    }
}