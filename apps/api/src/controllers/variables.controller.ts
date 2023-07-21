'use strict';
import { Request, Response } from 'express';
import Router from 'express-promise-router';
import client from '../config/db';
//import { faker } from '@faker-js/faker';

/**
 * Query the database using the pool
 * @param {*} query
 * @param {*} params
 *
 * @see https://node-postgres.com/features/pooling#single-query
 */

/**
 * HTTP methods: https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods
 * HTTP codes: https://www.w3.org/Protocols/HTTP/HTRESP.html
 * Postgresql Error codes: https://www.postgresql.org/docs/current/errcodes-appendix.html
 * async-await pattern for get callback argument
 */

class VarQuestions {
    public pathVar = '/var';
    public pathVarId = '/var/:id';
    public pathVarRandom = '/var/random';
    public router = Router();
    constructor() {
        this.initializeRoutes();
    }

    public initializeRoutes() {
        this.router.get(this.pathVar, this.var);
        this.router.get(this.pathVarId, this.varId);
        this.router.get(this.pathVarRandom, this.varRandom);
    }

    public var = async (req: Request, res: Response) => {
        if (req.method === 'GET') {
            try {
                const results = await client.query(`SELECT * FROM variables WHERE category='variables'`);
                res.status(200).json({ data: results.rows });
            } catch {
                res.status(500).json({ error: "Something went wrong" });
            }
        } else {
            res.status(400).send({ error: `${req.method} Method Not Allowed` });
        }

    };

    public varRandom = async (req: Request, res: Response) => {
        if (req.method === 'GET') {
            try {
                const results = await client.query(`SELECT * FROM variables WHERE category='variables'`);
                res.status(200).json({ data: results.rows });
            } catch {
                res.status(500).json({ error: "Something went wrong" });
            }
        } else {
            res.status(400).send({ error: `${req.method} Method Not Allowed` });
        }

    };

    public varId = async (req: Request, res: Response) => {
        const id = req.params.id;
        if (req.method === 'GET') {
            try {
                const results = await client.query(`SELECT * FROM variables WHERE id =$1`, [id]);
                res.status(200).json({ data: results.rows });
            } catch {
                res.status(500).json({ error: "Something went wrong" });
            }
        } else {
            res.status(400).send({ error: `${req.method} Method Not Allowed` });
        }
    };
}

export default VarQuestions;
