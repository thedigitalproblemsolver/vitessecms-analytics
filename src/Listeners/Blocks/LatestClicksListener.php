<?php

declare(strict_types=1);

namespace VitesseCms\Analytics\Listeners\Blocks;

use Phalcon\Events\Event;
use VitesseCms\Block\Forms\BlockForm;
use VitesseCms\Form\Models\Attributes;

final class LatestClicksListener
{
    public function buildBlockForm(Event $event, BlockForm $form): void
    {
        $form->addNumber(
            '%ANALYTICS_ITEM_LIMIT%',
            'itemsLimit',
            (new Attributes())->setRequired()
        );
    }
}
