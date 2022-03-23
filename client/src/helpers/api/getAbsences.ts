import type { Absence } from '@type/Absence.type';
import axios from 'axios';

export type GetAbsenceFilter = {
  type?: string;
  date?: string;
};

type GetAbsenceQuery = {
  page: number;
  sortBy?: string;
  pageSize: number;
  type?: string;
  date?: string;
};

export async function getAbsences({
  page,
  sortBy = 'date',
  pageSize,
}: GetAbsenceQuery): Promise<Absence[]> {
  // TODO Change here
  const response = await axios.get('http://localhost:7001/absences',{ params: { page, sortBy, pageSize } });

  return response.data;
}
