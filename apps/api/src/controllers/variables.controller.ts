'use strict';
import { Request, Response } from 'express';
import Router from 'express-promise-router';
import client from '../config/db';
//import { faker } from '@faker-js/faker';
import { Question } from '../classes/javascript.question.ts'

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
    public pathVarNew = '/var/new';
    public pathVarRandom = '/var/random';
    public router = Router();
    constructor() {
        this.initializeRoutes();
    }

    public initializeRoutes() {
        this.router.get(this.pathVar, this.var);
        this.router.get(this.pathVarId, this.varId);
        this.router.get(this.pathVarNew,this.varNew);
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
        switch(req.method) {
            case('GET'):
                try {
                    const id = req.params.id;
                    const results = await client.query(`SELECT * FROM variables WHERE id = $1`, [id]);
                    res.status(200).json({ data: results.rows });
                } catch {
                    res.status(500).json({ error: "Something went wrong" });
                }
                break
            case('UPDATE'):
                try {
                    const id = req.params.id;
                    const question = await client.query(`SELECT * FROM variables WHERE id = $1`, [id]);
                    // #TODO: UPDATE Row in DATABASE
                    res.status(200);
                } catch {
                    res.status(500).json({ error: "Something went wrong" });
                }
                break
            case('DELETE'):
                try {
                    const id = req.params.id;
                    const results = await client.query(`DELETE * FROM variables WHERE id = $1`, [id]);
                    res.status(200).json({ data: results.rows });
                } catch {
                    res.status(500).json({ error: "Something went wrong" });
                }
                break
            default:
                res.status(400).send({ error: `${req.method} Method Not Allowed` });
        }
    }

    public varNew = async (req: Request, res: Response) => {
        switch(req.method) {
            case('POST'):
                try {
                    const data = req.body;
                    const question = new Question(data.level, data.points, data.title, data.data, data.result, data.category, data.category_sub, data.tags, data.refs);
                    const results = await client.query(`INSERT INTO variables ( created_at, updated_at, id, language, level, points, title, data, result, category, category_sub, tags, refs ) VALUES( $1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13)`, [
                            question.created_at,
                            question.updated_at,
                            question.id,
                            question.language,
                            question.level,
                            question.points,
                            question.title,
                            question.data,
                            question.result,
                            question.category,
                            question.category_sub,
                            question.tags,
                            question.refs
                         ]);
                    res.status(200);
                } catch {
                    res.status(500).json({ error: "Something went wrong" });
                }
                break
            default:
                res.status(400).send({ error: `${req.method} Method Not Allowed` });
        }
    };
}

export default VarQuestions;
