import {getAbsences} from '@helpers/api/getAbsences';
import type {FastifyInstance} from 'fastify';

type query = {
    pageSize: number;
    page: number;
    type?: string;
    startDate?:string;
    endDate?: string;
};


export async function routes(fastify: FastifyInstance): Promise<void> {
    fastify.get('/absences', async (req, res) => {
        const {page, pageSize, type, startDate, endDate} = req.query as query
        const response = await getAbsences({page, pageSize, type,  startDate, endDate})
        res.status(200).send(response);
    });
}
