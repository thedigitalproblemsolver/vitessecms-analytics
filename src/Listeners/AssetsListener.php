<?php declare(strict_types=1);

namespace VitesseCms\Analytics\Listeners;

use VitesseCms\Media\Services\AssetsService;

class AssetsListener
{
    public function __construct(private readonly AssetsService $assetsService, private readonly string $vendorBaseDir)
    {
    }

    public function buildJavascript(): void
    {
        $this->assetsService->addInlineJs(file_get_contents($this->vendorBaseDir . 'analytics/src/Resources/js/analytics.js'));
    }
}