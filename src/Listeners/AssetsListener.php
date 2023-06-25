<?php declare(strict_types=1);

namespace VitesseCms\Analytics\Listeners;

use VitesseCms\Analytics\Repositories\BlackListEntryRepository;
use VitesseCms\Database\Models\FindValue;
use VitesseCms\Database\Models\FindValueIterator;
use VitesseCms\Media\Services\AssetsService;

class AssetsListener
{
    public function __construct(
        private readonly AssetsService            $assetsService,
        private readonly string                   $vendorBaseDir,
        private readonly string                   $ipAddress,
        private readonly BlackListEntryRepository $blackListEntryRepository,
        private readonly bool                     $isAdminPage
    )
    {
    }

    public function buildJavascript(): void
    {
        if (!$this->isAdminPage) {
            if ($this->blackListEntryRepository->count(
                    new FindValueIterator([new FindValue('ipAddress', $this->ipAddress)])
                ) === 0
            ) {
                $this->assetsService->addInlineJs(file_get_contents(
                    $this->vendorBaseDir . 'analytics/src/Resources/js/analytics.js'
                ));
            }
        }
    }
}