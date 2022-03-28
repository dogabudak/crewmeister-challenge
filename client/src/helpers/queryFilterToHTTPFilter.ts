import type {QueryFilters} from '@type/Filter.type';

export function queryFilterToHTTPFilter(filter: QueryFilters) {
  return  {
    startDate: filter?.startDate,
    endDate: filter?.endDate,
    type: filter?.type,
  }
}
