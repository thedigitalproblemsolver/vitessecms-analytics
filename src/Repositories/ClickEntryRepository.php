<?php declare(strict_types=1);

namespace VitesseCms\Analytics\Repositories;

use VitesseCms\Analytics\Models\ClickEntry;
use VitesseCms\Analytics\Models\ClickEntryIterator;
use VitesseCms\Database\Models\FindOrderIterator;
use VitesseCms\Database\Models\FindValueIterator;

class ClickEntryRepository
{
    public function getById(string $id, bool $hideUnpublished = true): ?ClickEntry
    {
        ClickEntry::setFindPublished($hideUnpublished);

        /** @var ClickEntry $webCrawlerEntry */
        $webCrawlerEntry = ClickEntry::findById($id);
        if (is_object($webCrawlerEntry)):
            return $webCrawlerEntry;
        endif;

        return null;
    }

    public function findAll(
        ?FindValueIterator $findValues = null,
        bool               $hideUnpublished = true,
        ?int               $limit = null,
        ?FindOrderIterator $findOrders = null
    ): ClickEntryIterator
    {
        ClickEntry::setFindPublished($hideUnpublished);
        if ($limit !== null) {
            ClickEntry::setFindLimit($limit);
        }

        $this->parseFindValues($findValues);
        $this->parseFindOrders($findOrders);

        return new ClickEntryIterator(ClickEntry::findAll());
    }

    protected function parseFindValues(?FindValueIterator $findValues = null): void
    {
        if ($findValues !== null) :
            while ($findValues->valid()) :
                $findValue = $findValues->current();
                ClickEntry::setFindValue(
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
                ClickEntry::addFindOrder(
                    $findOrder->getKey(),
                    $findOrder->getOrder()
                );
                $findOrders->next();
            endwhile;
        endif;
    }
}