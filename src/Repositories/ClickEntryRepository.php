<?php

declare(strict_types=1);

namespace VitesseCms\Analytics\Repositories;

use VitesseCms\Analytics\Models\ClickEntry;
use VitesseCms\Analytics\Models\ClickEntryIterator;
use VitesseCms\Database\Models\FindOrderIterator;
use VitesseCms\Database\Models\FindValueIterator;
use VitesseCms\Database\Traits\TraitRepositoryConstructor;
use VitesseCms\Database\Traits\TraitRepositoryParseFindAll;
use VitesseCms\Database\Traits\TraitRepositoryParseGetById;

class ClickEntryRepository
{
    use TraitRepositoryConstructor;
    use TraitRepositoryParseFindAll;
    use TraitRepositoryParseGetById;

    public function getById(string $modelId, bool $hideUnpublished = true): ?ClickEntry
    {
        return $this->parseGetById($modelId, $hideUnpublished);
    }

    public function findAll(
        FindValueIterator $findValuesIterator = null,
        bool $hideUnpublished = true,
        int $limit = null,
        FindOrderIterator $findOrders = null
    ): ClickEntryIterator {
        return $this->parseFindAll($findValuesIterator, $hideUnpublished, $limit, $findOrders);
    }
}
