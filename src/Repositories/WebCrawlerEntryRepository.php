<?php

declare(strict_types=1);

namespace VitesseCms\Analytics\Repositories;

use VitesseCms\Analytics\Models\WebCrawlerEntry;
use VitesseCms\Analytics\Models\WebCrawlerEntryIterator;
use VitesseCms\Database\Models\FindOrderIterator;
use VitesseCms\Database\Models\FindValueIterator;
use VitesseCms\Database\Traits\TraitRepositoryConstructor;
use VitesseCms\Database\Traits\TraitRepositoryParseFindAll;
use VitesseCms\Database\Traits\TraitRepositoryParseGetById;

class WebCrawlerEntryRepository
{
    use TraitRepositoryConstructor;
    use TraitRepositoryParseFindAll;
    use TraitRepositoryParseGetById;

    public function getById(string $id, bool $hideUnpublished = true): ?WebCrawlerEntry
    {
        return $this->parseGetById($id, $hideUnpublished);
    }

    public function findAll(
        ?FindValueIterator $findValuesIterator = null,
        bool $hideUnpublished = true,
        ?int $limit = null,
        ?FindOrderIterator $findOrders = null
    ): WebCrawlerEntryIterator {
        return $this->parseFindAll($findValuesIterator, $hideUnpublished, $limit, $findOrders);
    }
}