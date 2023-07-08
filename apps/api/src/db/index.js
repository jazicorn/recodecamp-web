'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
// eslint-disable-next-line @typescript-eslint/no-var-requires
const pg_1 = require('pg');
// TODO: add logging to querying | https://node-postgres.com/guides/project-structure
const pool = new pg_1.Pool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: parseInt(process.env.DB_PORT || '5432'),
});
exports.default = {
    query: (text, params, callback) => {
        return pool.query(text, params, callback);
    },
};
//# sourceMappingURL=index.js.map
