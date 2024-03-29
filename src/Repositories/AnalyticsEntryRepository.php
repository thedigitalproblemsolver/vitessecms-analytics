<?php

declare(strict_types=1);

namespace VitesseCms\Analytics\Repositories;

use MongoDB\Driver\Cursor;
use Phalcon\Incubator\MongoDB\Mvc\Collection\Exception;
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

    public function getById(string $modelId, bool $hideUnpublished = true): ?AnalyticsEntry
    {
        return $this->parseGetById($modelId, $hideUnpublished);
    }

    public function findAll(
        FindValueIterator $findValuesIterator = null,
        bool $hideUnpublished = true,
        int $limit = null,
        FindOrderIterator $findOrders = null
    ): AnalyticsEntryIterator {
        return $this->parseFindAll($findValuesIterator, $hideUnpublished, $limit, $findOrders);
    }

    /**
     * @throws Exception
     */
    public function getPageViewsByDay(): \Traversable|Cursor|\ArrayIterator
    {
        return AnalyticsEntry::aggregate([
            [
                '$group' => [
                    '_id' => ['$dateToString' => ['format' => '%Y-%m-%d', 'date' => '$entryTime']],
                    'date' => ['$first' => ['$dateToString' => ['format' => '%Y-%m-%d', 'date' => '$entryTime']]],
                    'amount' => ['$sum' => 1],
                ],
            ],
            ['$sort' => ['_id' => -1]],
            ['$limit' => 30],
        ]);
    }
}
