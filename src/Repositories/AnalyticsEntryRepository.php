<?php declare(strict_types=1);

namespace VitesseCms\Analytics\Repositories;

use VitesseCms\Analytics\Models\AnalyticsEntry;
use VitesseCms\Analytics\Models\AnalyticsEntryIterator;

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

    public function findAll(
        bool $hideUnpublished = true,
        ?int $limit = null,
    ): AnalyticsEntryIterator
    {
        AnalyticsEntry::setFindPublished($hideUnpublished);
        AnalyticsEntry::addFindOrder('name');
        if ($limit !== null) {
            AnalyticsEntry::setFindLimit($limit);
        }

        return new AnalyticsEntryIterator(AnalyticsEntry::findAll());
    }
}