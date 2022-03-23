import { getAbsences } from '@helpers/api/getAbsences';
import type { FastifyInstance } from 'fastify';

type query = {
  pageSize: number;
  page: number;
  sortBy?: string;
  type?:string
  date?:string
};



export async function routes(fastify: FastifyInstance): Promise<void> {
  fastify.get('/absences', async (req, res) => {
    // TODO fix this later
    const {  page, sortBy , pageSize, type, date}= req.query as query
    const response = await getAbsences({page, sortBy , pageSize, type, date})
    res.status(200).send(response);
  });
}
