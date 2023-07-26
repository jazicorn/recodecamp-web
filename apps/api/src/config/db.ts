// app.js
const postgres = require('postgres');
require('dotenv').config();

const { API_PGHOST, API_PGDATABASE, AOI_PGUSER, API_PGPASSWORD, API_ENDPOINT_ID } = process.env;
const URL = `postgres://${API_PGUSER}:${API_PGPASSWORD}@${API_PGHOST}/${API_PGDATABASE}?options=project%3D${API_ENDPOINT_ID}`;

default export const sql = postgres(URL, { ssl: 'require' });

async function getPgVersion() {
  const result = await sql`select version()`;
  console.log(result);
}

getPgVersion();
