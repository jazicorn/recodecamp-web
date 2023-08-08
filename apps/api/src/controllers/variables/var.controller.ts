'use strict';
import { Request, Response } from 'express';
import Router from 'express-promise-router';
import client from '../../config/db';
import { faker } from '@faker-js/faker';
import { Question } from '../../classes/javascript.question';
import { JS_Type } from  '../../types/types.question';
import { getRandomInt } from '../../utils/index'

export default class VarGeneral {
    public pathVar = '/var';
    public pathVarId = '/var/:id';
    public pathVarNew = '/var/new';
    public router = Router();
    constructor() {
        this.initializeRoutes();
    }

    public initializeRoutes() {
        this.router.get(this.pathVar, this.var);
        this.router.get(this.pathVarId, this.varId);
        this.router.get(this.pathVarNew,this.varNew);
    }

    public var = async (req: Request, res: Response) => {
        if (req.method === 'GET') {
            try {
                const results = await client.query(`SELECT * FROM variables WHERE category='variables'`);
                res.status(200).send({ data: results.rows });
            } catch {
                res.status(500).send({ error: "Something went wrong" });
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
                    res.status(200).send({ data: results.rows });
                } catch {
                    res.status(500).send({ error: "Something went wrong" });
                }
                break
            case('UPDATE'):
                try {
                    const id = req.params.id;
                    const question = await client.query(`SELECT * FROM variables WHERE id = $1`, [id]);
                    // #TODO: UPDATE Row in DATABASE
                    res.status(200);
                } catch {
                    res.status(500).send({ error: "Something went wrong" });
                }
                break
            case('DELETE'):
                try {
                    const id = req.params.id;
                    const results = await client.query(`DELETE * FROM variables WHERE id = $1`, [id]);
                    res.status(200).send({ data: results.rows });
                } catch {
                    res.status(500).send({ error: "Something went wrong" });
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
                    const data: JS_Type = req.body;
                    const question = new Question(data);
                    const results = await client.query(`INSERT INTO variables ( created_at, updated_at, id, language, level, points, task, data, result, conditions, constraints, category, category_sub, tags, refs ) VALUES( $1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15)`, [
                            question.created_at,
                            question.updated_at,
                            question.id,
                            question.language,
                            question.level,
                            question.points,
                            question.task,
                            question.data,
                            question.result,
                            question.conditions,
                            question.constraints,
                            question.category,
                            question.category_sub,
                            question.tags,
                            question.refs
                         ]);
                    res.status(200);
                } catch {
                    res.status(500).send({ error: "Something went wrong" });
                }
                break
            default:
                res.status(400).send({ error: `${req.method} Method Not Allowed` });
        }
    };
}
