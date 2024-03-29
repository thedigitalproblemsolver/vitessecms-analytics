<?php

declare(strict_types=1);

namespace VitesseCms\Analytics;

use Phalcon\Di\DiInterface;
use VitesseCms\Core\AbstractModule;

class Module extends AbstractModule
{
    public function registerServices(DiInterface $injectable, string $module = null)
    {
        parent::registerServices($injectable, 'Analytics');
    }
}
