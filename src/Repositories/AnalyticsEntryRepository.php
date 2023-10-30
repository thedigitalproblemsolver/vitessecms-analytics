<?php

declare(strict_types=1);

namespace VitesseCms\Analytics\Repositories;

use VitesseCms\Analytics\Models\AnalyticsEntry;
use VitesseCms\Analytics\Models\AnalyticsEntryIterator;
use VitesseCms\Database\Models\FindOrderIterator;
use VitesseCms\Database\Models\FindValueIterator;
use VitesseCms\Database\Traits\TraitRepositoryConstructor;
use VitesseCms\Database\Traits\TraitRepositoryParseFindAll;
use VitesseCms\Database\Traits\TraitRepositoryParseGetById;

class AnalyticsEntryRepository
{
    use TraitRepositoryConstructor;
    use TraitRepositoryParseFindAll;
    use TraitRepositoryParseGetById;

    public function getById(string $id, bool $hideUnpublished = true): ?AnalyticsEntry
    {
        return $this->parseGetById($id, $hideUnpublished);
    }

    public function findAll(
        ?FindValueIterator $findValuesIterator = null,
        bool $hideUnpublished = true,
        ?int $limit = null,
        ?FindOrderIterator $findOrders = null
    ): AnalyticsEntryIterator {
        return $this->parseFindAll($findValuesIterator, $hideUnpublished, $limit, $findOrders);
    }
}