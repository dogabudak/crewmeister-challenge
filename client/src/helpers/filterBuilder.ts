import type { FormikFilters, HTTPFilterBody } from '@type/Filter.type';
import moment from "moment";

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
  if (filters.startDate) {
    const startDate = moment(filters.startDate).format('DD-MM-YYYY')
    generatedFilters.startDate =startDate;
    queryParams.startDate = startDate;
  }
  if (filters.endDate) {
    const endDate = moment(filters.endDate).format('DD-MM-YYYY')
    generatedFilters.endDate = endDate;
    queryParams.endDate = endDate;
  }

  return {
    generatedFilters,
    queryParams,
  };
}
