import type { Absence } from '@type/Absence.type';

export async function makeRequest(page: number, filter): Promise<{count: number, records:Absence[]}> {
  const results = await fetch(`/absences?page=${page}&startDate=${filter.startDate}&endDate=${filter.endDate}&type=${filter.type}`);
  return results.json();
}
