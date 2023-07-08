import { Pool, QueryResult } from 'pg';

const pool = new Pool({ connectionString: process.env.API_PSQL });

pool.on('connect', () => {
    console.log('Successful Connection!');
});

export default {
    query: (
        text: string,
        params: any,
        callback: (err: Error, result: QueryResult<any>) => void
    ) => {
        return pool.query(text, params, callback);
    },
};
