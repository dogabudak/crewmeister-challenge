import type { Absence } from '@type/Absence.type';

export async function makeRequest(page: number, filter): Promise<{count: number, records:Absence[]}> {
  const query = { page };

  const results = await fetch(`/absences?page=${page}`);
  return results.json();
}
