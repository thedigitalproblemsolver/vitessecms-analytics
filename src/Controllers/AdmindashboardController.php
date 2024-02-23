<?php

declare(strict_types=1);

namespace VitesseCms\Analytics\Controllers;

use VitesseCms\Analytics\Models\AnalyticsEntry;
use VitesseCms\Analytics\Models\ClickEntry;
use VitesseCms\Analytics\Models\WebCrawlerEntry;
use VitesseCms\Analytics\Repositories\AnalyticsEntryRepository;
use VitesseCms\Analytics\Repositories\ClickEntryRepository;
use VitesseCms\Analytics\Repositories\WebCrawlerEntryRepository;
use VitesseCms\Core\AbstractControllerAdmin;
use VitesseCms\Database\DTO\GetRepositoryDTO;
use VitesseCms\Database\Enums\RepositoryEnum;

final class AdmindashboardController extends AbstractControllerAdmin
{
    private AnalyticsEntryRepository $analyticsEntryRepository;
    private ClickEntryRepository $clickEntryRepository;
    private WebCrawlerEntryRepository $webCrawlerEntryRepository;

    public function OnConstruct()
    {
        parent::OnConstruct();

        $this->analyticsEntryRepository = $this->eventsManager->fire(
            RepositoryEnum::GET_REPOSITORY->value,
            new GetRepositoryDTO(AnalyticsEntry::class)
        );
        $this->clickEntryRepository = $this->eventsManager->fire(
            RepositoryEnum::GET_REPOSITORY->value,
            new GetRepositoryDTO(ClickEntry::class)
        );
        $this->webCrawlerEntryRepository = $this->eventsManager->fire(
            RepositoryEnum::GET_REPOSITORY->value,
            new GetRepositoryDTO(WebCrawlerEntry::class)
        );
    }

    public function indexAction(): void
    {
        $mainJs = file_get_contents(__DIR__.'/../Resources/js/main.js');
        if ($mainJs) {
            $this->assetsService->addInlineJs($mainJs);
        }

        $this->viewService->set('content', '<div id="react-analytics-dashboard"></div>');
    }

    public function getPageViewsByDayAction(): void
    {
        $this->jsonResponse([
            'data' => array_reverse($this->analyticsEntryRepository->getPageViewsByDay()->toArray()),
        ]);
    }

    public function getClicksByDayAction(): void
    {
        $this->jsonResponse([
            'data' => array_reverse($this->clickEntryRepository->getClicksByDay()->toArray()),
        ]);
    }

    public function getWebcrawlerVisitsByDayAction(): void
    {
        $this->jsonResponse([
            'data' => array_reverse($this->webCrawlerEntryRepository->getWebcrawlerVisitsByDay()->toArray()),
        ]);
    }
}
