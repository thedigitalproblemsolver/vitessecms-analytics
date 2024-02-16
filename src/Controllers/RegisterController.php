<?php

declare(strict_types=1);

namespace VitesseCms\Analytics\Controllers;

use VitesseCms\Analytics\DTO\ClickEntryDTO;
use VitesseCms\Analytics\DTO\RegisterExitDTO;
use VitesseCms\Analytics\Enums\RegisterEnum;
use VitesseCms\Core\AbstractControllerAdmin;

final class RegisterController extends AbstractControllerAdmin
{
    public function entryAction(): void
    {
        $entryId = $this->eventsManager->fire(RegisterEnum::EVENT_HANDLE_ENTRY->value, new \stdClass());

        if (null !== $entryId) {
            $this->jsonResponse(['id' => $entryId]);
        } else {
            $this->viewService->disable();
        }
    }

    public function exitAction(string $entryId): void
    {
        $this->eventsManager->fire(RegisterEnum::EVENT_HANDLE_EXIT->value, new RegisterExitDTO($entryId));

        $this->viewService->disable();
    }

    public function clickAction(): void
    {
        $this->eventsManager->fire(
            RegisterEnum::EVENT_HANDLE_CLICK->value,
            new ClickEntryDTO(
                $this->request->getPost('path', 'string'),
                $this->request->getPost('target', 'string'),
                $this->request->getPost('category', 'string'),
                $this->request->getPost('action', 'string')
            )
        );

        $this->viewService->disable();
    }
}
