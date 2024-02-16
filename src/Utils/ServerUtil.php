<?php

declare(strict_types=1);

namespace VitesseCms\Analytics\Utils;

class ServerUtil
{
    public static function getOperatingSystemFromUserAgent(string $agent): string
    {
        return trim(explode(';', $agent)[1]);
    }

    public static function getBrowserNameFromUserAgent(string $agent): string
    {
        return explode('/', self::getBrowserFromUserAgent($agent))[0];
    }

    public static function getBrowserFromUserAgent(string $agent): string
    {
        $parts = explode(' ', $agent);

        return end($parts);
    }

    public static function getBrowserVersionFromUserAgent(string $agent): string
    {
        return explode('/', self::getBrowserFromUserAgent($agent))[1];
    }
}
