import { Client } from 'pg'
const env = process.env;

const port = parseInt(env.API_PGPORT as string)

const client = new Client({
    host: env.API_PGHOST,
    port: port,
    user: env.API_PGUSER,
    password: env.API_PGPASSWORD,
    database: env.API_PGDATABASE
})

export default client;
