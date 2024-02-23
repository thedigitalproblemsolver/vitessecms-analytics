<?php

declare(strict_types=1);

namespace VitesseCms\Analytics\Repositories;

use MongoDB\Driver\Cursor;
use Phalcon\Incubator\MongoDB\Mvc\Collection\Exception;
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

    public function getById(string $modelId, bool $hideUnpublished = true): ?WebCrawlerEntry
    {
        return $this->parseGetById($modelId, $hideUnpublished);
    }

    public function findAll(
        FindValueIterator $findValuesIterator = null,
        bool $hideUnpublished = true,
        int $limit = null,
        FindOrderIterator $findOrders = null
    ): WebCrawlerEntryIterator {
        return $this->parseFindAll($findValuesIterator, $hideUnpublished, $limit, $findOrders);
    }

    /**
     * @throws Exception
     */
    public function getWebcrawlerVisitsByDay(): \Traversable|Cursor|\ArrayIterator
    {
        return WebCrawlerEntry::aggregate([
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
