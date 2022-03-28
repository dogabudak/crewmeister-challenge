import type { Absence } from '@type/Absence.type';
import axios from 'axios';

type GetAbsenceQuery = {
  page: number;
  pageSize: number;
  type?: string;
  startDate?: string;
  endDate?: string;
};

export async function getAbsences({
  page,
  pageSize,
  startDate,
  type,
  endDate
}: GetAbsenceQuery): Promise<Absence[]> {
  const response = await axios.get('http://localhost:7001/absences',{ params: { page, pageSize,type,startDate,endDate } });

  return response.data;
}
