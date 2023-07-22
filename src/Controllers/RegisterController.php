<?php declare(strict_types=1);

namespace VitesseCms\Analytics\Controllers;

use stdClass;
use VitesseCms\Analytics\DTO\ClickEntryDTO;
use VitesseCms\Analytics\DTO\RegisterExitDTO;
use VitesseCms\Analytics\Enums\RegisterEnum;
use VitesseCms\Core\AbstractControllerAdmin;

class RegisterController extends AbstractControllerAdmin
{
    public function entryAction(): void
    {
        $id = $this->eventsManager->fire(RegisterEnum::EVENT_HANDLE_ENTRY->value, new stdClass());

        if ($id !== null) {
            $this->jsonResponse(['id' => $id]);
        } else {
            $this->viewService->disable();
        }
    }

    public function exitAction(string $id): void
    {
        $this->eventsManager->fire(RegisterEnum::EVENT_HANDLE_EXIT->value, new RegisterExitDTO($id));

        $this->viewService->disable();
    }

    public function clickAction(): void
    {
        $this->eventsManager->fire(RegisterEnum::EVENT_HANDLE_CLICK->value, new ClickEntryDTO(
            $this->request->getPost('path', 'string'),
            $this->request->getPost('target', 'string'),
            $this->request->getPost('category', 'string'),
            $this->request->getPost('action', 'string')
        ));

        $this->viewService->disable();
    }
}