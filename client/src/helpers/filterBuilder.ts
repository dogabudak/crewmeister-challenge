import type { FormikFilters, HTTPFilterBody } from '@type/Filter.type';

/**
 * This function generates the filter for GQL. It's a bit ugly since I do not know how exactly the filtering
 * works and if I can send undefined values.
 *
 * @param filters
 */
export function buildFilters(filters: FormikFilters): {
  generatedFilters: HTTPFilterBody;
  queryParams: Record<string, string>;
} {
  const generatedFilters: HTTPFilterBody = {};
  const queryParams: Record<string, string> = {};

  if (filters.type) {
    generatedFilters.type = filters.type;
    queryParams.type = filters.type;
  }

  if (filters.date) {
    generatedFilters.date = filters.date;
    queryParams.model = filters.date;
  }

  return {
    generatedFilters,
    queryParams,
  };
}
