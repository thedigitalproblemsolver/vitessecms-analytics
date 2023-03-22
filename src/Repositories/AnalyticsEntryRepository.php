<?php declare(strict_types=1);

namespace VitesseCms\Analytics\Repositories;

use VitesseCms\Analytics\Models\AnalyticsEntry;

class AnalyticsEntryRepository
{
    public function getById(string $id, bool $hideUnpublished = true): ?AnalyticsEntry
    {
        AnalyticsEntry::setFindPublished($hideUnpublished);

        /** @var AnalyticsEntry $analyticsEntry */
        $analyticsEntry = AnalyticsEntry::findById($id);
        if (is_object($analyticsEntry)):
            return $analyticsEntry;
        endif;

        return null;
    }
}