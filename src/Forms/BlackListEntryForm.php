<?php declare(strict_types=1);

namespace VitesseCms\Analytics\Forms;

use VitesseCms\Admin\Interfaces\AdminModelFormInterface;
use VitesseCms\Form\AbstractForm;
use VitesseCms\Form\Models\Attributes;

class BlackListEntryForm extends AbstractForm implements AdminModelFormInterface
{
    public function buildForm(): void
    {
        $this->addText('%CORE_NAME%', 'name', (new Attributes())->setRequired()->setMultilang());
        $this->addText('%ANALYTICS_IP_ADDRESS%', 'ipAddress');
        $this->addSubmitButton('%CORE_SAVE%');
    }
}