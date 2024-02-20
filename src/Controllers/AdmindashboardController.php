<?php

declare(strict_types=1);

namespace VitesseCms\Analytics\Controllers;

use VitesseCms\Core\AbstractControllerAdmin;

final class AdmindashboardController extends AbstractControllerAdmin
{
    public function indexAction(): void
    {
        $mainJs = file_get_contents(__DIR__.'/../Resources/react/dist/main.js');
        if ($mainJs) {
            $this->assetsService->addInlineJs($mainJs);
        }

        $this->viewService->set('content', '<div id="react-analytics-dashboard"></div>');
    }

    public function getPageViewsByDayAction(): void
    {
        $this->jsonResponse([
            'data' => [
                [
                    'date' => '2024-02-16',
                    'amount' => rand(0, 30),
                ],
                [
                    'date' => '2024-02-15',
                    'amount' => rand(0, 30),
                ],
                [
                    'date' => '2024-02-14',
                    'amount' => rand(0, 30),
                ],
            ],
        ]);
    }

    public function getClicksByDayAction(): void
    {
        $this->jsonResponse([
            'data' => [
                [
                    'date' => '2024-02-16',
                    'amount' => rand(0, 999),
                ],
                [
                    'date' => '2024-02-15',
                    'amount' => rand(0, 999),
                ],
                [
                    'date' => '2024-02-14',
                    'amount' => rand(0, 999),
                ],
            ],
        ]);
    }

    public function getWebcrawlerVisitsByDayAction(): void
    {
        $this->jsonResponse([
            'data' => [
                [
                    'date' => '2024-02-16',
                    'amount' => rand(0, 999),
                ],
                [
                    'date' => '2024-02-15',
                    'amount' => rand(0, 999),
                ],
                [
                    'date' => '2024-02-14',
                    'amount' => rand(0, 999),
                ],
            ],
        ]);
    }
}
