<?php declare(strict_types=1);

namespace VitesseCms\Analytics\Repositories;

use VitesseCms\Analytics\Models\BlackListEntry;
use VitesseCms\Analytics\Models\BlackListEntryIterator;
use VitesseCms\Database\Models\FindOrderIterator;
use VitesseCms\Database\Models\FindValueIterator;

class BlackListEntryRepository
{
    public function getById(string $id, bool $hideUnpublished = true): ?BlackListEntry
    {
        BlackListEntry::setFindPublished($hideUnpublished);

        /** @var BlackListEntry $blackListEntry */
        $blackListEntry = BlackListEntry::findById($id);
        if (is_object($blackListEntry)):
            return $blackListEntry;
        endif;

        return null;
    }

    public function findAll(
        ?FindValueIterator $findValues = null,
        bool               $hideUnpublished = true,
        ?int               $limit = null,
        ?FindOrderIterator $findOrders = null
    ): BlackListEntryIterator
    {
        BlackListEntry::setFindPublished($hideUnpublished);
        if ($limit !== null) {
            BlackListEntry::setFindLimit($limit);
        }

        $this->parseFindValues($findValues);
        $this->parseFindOrders($findOrders);

        return new BlackListEntryIterator(BlackListEntry::findAll());
    }

    protected function parseFindValues(?FindValueIterator $findValues = null): void
    {
        if ($findValues !== null) :
            while ($findValues->valid()) :
                $findValue = $findValues->current();
                BlackListEntry::setFindValue(
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
                BlackListEntry::addFindOrder(
                    $findOrder->getKey(),
                    $findOrder->getOrder()
                );
                $findOrders->next();
            endwhile;
        endif;
    }

    public function count(?FindValueIterator $findValues = null, bool $hideUnpublished = true)
    {
        BlackListEntry::setFindPublished($hideUnpublished);
        $this->parseFindValues($findValues);
        
        return BlackListEntry::count();
    }
}