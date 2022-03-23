import type {HTTPFilterBody, QueryFilters} from '@type/Filter.type';

export function queryFilterToHTTPFilter(filter: QueryFilters): HTTPFilterBody {
  return {
    date: filter.date,
    type: filter.type,
  };
}
