// app.js
const postgres = require('postgres');
require('dotenv').config();

const { API_PGHOST, API_PGDATABASE, API_PGUSER, API_PGPASSWORD, API_ENDPOINT_ID } = process.env;
const URL = `postgres://${API_PGUSER}:${API_PGPASSWORD}@${API_PGHOST}/${API_PGDATABASE}?options=project%3D${API_ENDPOINT_ID}`;

const client = postgres(URL, { ssl: 'require' });

export default client;

