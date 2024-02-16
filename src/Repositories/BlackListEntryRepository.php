<?php

declare(strict_types=1);

namespace VitesseCms\Analytics\Repositories;

use VitesseCms\Analytics\Models\BlackListEntry;
use VitesseCms\Analytics\Models\BlackListEntryIterator;
use VitesseCms\Database\Models\FindOrderIterator;
use VitesseCms\Database\Models\FindValueIterator;
use VitesseCms\Database\Traits\TraitRepositoryConstructor;
use VitesseCms\Database\Traits\TraitRepositoryParseCount;
use VitesseCms\Database\Traits\TraitRepositoryParseFindAll;
use VitesseCms\Database\Traits\TraitRepositoryParseGetById;

class BlackListEntryRepository
{
    use TraitRepositoryConstructor;
    use TraitRepositoryParseFindAll;
    use TraitRepositoryParseGetById;
    use TraitRepositoryParseCount;

    public function getById(string $modelId, bool $hideUnpublished = true): ?BlackListEntry
    {
        return $this->parseGetById($modelId, $hideUnpublished);
    }

    public function findAll(
        FindValueIterator $findValuesIterator = null,
        bool $hideUnpublished = true,
        int $limit = null,
        FindOrderIterator $findOrders = null
    ): BlackListEntryIterator {
        return $this->parseFindAll($findValuesIterator, $hideUnpublished, $limit, $findOrders);
    }

    public function count(FindValueIterator $findValuesIterator = null, bool $hideUnpublished = true): int
    {
        return $this->parseCount($findValuesIterator, $hideUnpublished);
    }
}
