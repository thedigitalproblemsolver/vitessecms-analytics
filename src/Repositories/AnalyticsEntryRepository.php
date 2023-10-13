<?php declare(strict_types=1);

namespace VitesseCms\Analytics\Repositories;

use VitesseCms\Analytics\Models\AnalyticsEntry;
use VitesseCms\Analytics\Models\AnalyticsEntryIterator;
use VitesseCms\Database\Models\FindOrderIterator;
use VitesseCms\Database\Models\FindValueIterator;

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
        ?FindValueIterator $findValues = null,
        bool               $hideUnpublished = true,
        ?int               $limit = null,
        ?FindOrderIterator $findOrders = null
    ): AnalyticsEntryIterator
    {
        AnalyticsEntry::setFindPublished($hideUnpublished);
        if ($limit !== null) {
            AnalyticsEntry::setFindLimit($limit);
        }

        $this->parseFindValues($findValues);
        $this->parseFindOrders($findOrders);

        return new AnalyticsEntryIterator(AnalyticsEntry::findAll());
    }

    protected function parseFindValues(?FindValueIterator $findValues = null): void
    {
        if ($findValues !== null) :
            while ($findValues->valid()) :
                $findValue = $findValues->current();
                AnalyticsEntry::setFindValue(
                    $findValue->getKey(),
                    $findValue->getValue(),
                    $findValue->getType()
                );
                $findValues->next();
            endwhile;
        endif;
    }

    protected function parseFindOrders(?FindOrderIterator $findOrders = null): void
    {
        if ($findOrders !== null) :
            while ($findOrders->valid()) :
                $findOrder = $findOrders->current();
                AnalyticsEntry::addFindOrder(
                    $findOrder->getKey(),
                    $findOrder->getOrder()
                );
                $findOrders->next();
            endwhile;
        endif;
    }
}