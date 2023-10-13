<?php declare(strict_types=1);

namespace VitesseCms\Analytics\Repositories;

use VitesseCms\Analytics\Models\WebCrawlerEntry;
use VitesseCms\Analytics\Models\WebCrawlerEntryIterator;
use VitesseCms\Database\Models\FindOrderIterator;
use VitesseCms\Database\Models\FindValueIterator;

class WebCrawlerEntryRepository
{
    public function getById(string $id, bool $hideUnpublished = true): ?WebCrawlerEntry
    {
        WebCrawlerEntry::setFindPublished($hideUnpublished);

        /** @var WebCrawlerEntry $webCrawlerEntry */
        $webCrawlerEntry = WebCrawlerEntry::findById($id);
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
    ): WebCrawlerEntryIterator
    {
        WebCrawlerEntry::setFindPublished($hideUnpublished);
        if ($limit !== null) {
            WebCrawlerEntry::setFindLimit($limit);
        }

        $this->parseFindValues($findValues);
        $this->parseFindOrders($findOrders);

        return new WebCrawlerEntryIterator(WebCrawlerEntry::findAll());
    }

    protected function parseFindValues(?FindValueIterator $findValues = null): void
    {
        if ($findValues !== null) :
            while ($findValues->valid()) :
                $findValue = $findValues->current();
                WebCrawlerEntry::setFindValue(
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
                WebCrawlerEntry::addFindOrder(
                    $findOrder->getKey(),
                    $findOrder->getOrder()
                );
                $findOrders->next();
            endwhile;
        endif;
    }
}