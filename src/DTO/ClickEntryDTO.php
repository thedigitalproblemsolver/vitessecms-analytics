<?php

declare(strict_types=1);

namespace VitesseCms\Analytics\DTO;

final class ClickEntryDTO
{
    final public function __construct(
        public readonly string $path,
        public readonly string $target,
        public readonly string $category,
        public readonly string $action
    ) {
    }
}
