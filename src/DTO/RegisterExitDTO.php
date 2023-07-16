<?php declare(strict_types=1);

namespace VitesseCms\Analytics\DTO;

final class RegisterExitDTO
{
    public function __construct(public readonly string $id)
    {
    }
}