'use strict';
import { Request, Response } from 'express';
import Router from 'express-promise-router';
import sql from '../../config/db';
import { faker } from '@faker-js/faker';
import { Question } from '../../classes/javascript.question';
import { JS_Type } from  '../../types/types.question';
import { getRandomInt } from '../../utils/index';
import cors from 'cors';

export default class VarGeneral {
    /**Public: Get All Var Category Questions*/
    public pathVar = '/var';
    /**Public: Get Var Category Question by ID*/
    public pathVarId = '/var/get/:id';
    /**Private: Create Var Question*/
    public pathVarNew = '/var/new';
    /**Private: Update Var Question*/
    public pathVarUpdate = '/var/update/:id';
    /**Private: Delete Var Question';*/
    public pathVarDelete = '/var/delete/:id';
    /**Express Router */
    public router = Router();
    /**Cors Options*/
    private corsOptions = cors({
        origin: process.env.WEBURL,
        optionsSuccessStatus: 200
    });

    constructor() {
        this.initializeRoutes();
    }

    public initializeRoutes() {
        this.router.get(this.pathVar, this.varAll);
        this.router.get(this.pathVarId, this.varId);
        this.router.post(this.pathVarNew, this.corsOptions, this.varPost);
        this.router.put(this.pathVarUpdate, this.corsOptions, this.varUpdate);
        this.router.delete(this.pathVarDelete, this.corsOptions, this.varDelete);
    }

    public varAll = async (req: Request, res: Response) => {
        switch(req.method) {
            case('GET'):
                try {
                    const id = req.params.id;
                    const results = await sql`SELECT * FROM _QUESTIONS WHERE _QUESTIONS_CATEGORY = 'variables'`;
                    return res.status(200).send({ data: results.rows });
                } catch {
                    return res.status(500).send({ error: "Something went wrong" });
                }
                break
            default:
                return res.status(400).send({ error: `${req.method} Method Not Allowed` });
        }
    };

    public varId = async (req: Request, res: Response) => {
        switch(req.method) {
            case('GET'):
                try {
                    const id = req.params.id;
                    const results = await sql`SELECT * FROM _QUESTIONS WHERE _QUESTION_ID = ${id}`;
                    return res.status(200).send({ data: results.rows });
                } catch {
                    return res.status(500).send({ error: "Something went wrong" });
                }
                break
            default:
                return res.status(400).send({ error: `${req.method} Method Not Allowed` });
        }
    }

    public varUpdate = async (req: Request, res: Response) => {
        switch(req.method) {
            case('UPDATE'):
                try {
                    const id = req.params.id;
                    const results = await sql`SELECT * FROM _QUESTIONS WHERE _QUESTION_ID = ${id}`;
                    return res.status(200);
                } catch {
                    return res.status(500).send({ error: "Something went wrong" });
                }
                break
            default:
                return res.status(400).send({ error: `${req.method} Method Not Allowed` });
        }
    }

    public varPost = async (req: Request, res: Response) => {
        switch(req.method) {
            case('POST'):
                try {
                    const data: JS_Type = req.body;
                    const question = new Question(data);
                    const results = await sql`INSERT INTO _QUESTIONS (
                            _QUESTION_CREATED_AT,
                            _QUESTION_UPDATED_AT,
                            _QUESTION_ID,
                            _QUESTION_LANGUAGE,
                            _QUESTION_LEVEL,
                            _QUESTION_POINTS,
                            _QUESTION_TASK,
                            _QUESTION_DATA,
                            _QUESTION_RESULT,
                            _QUESTION_HINTS,
                            _QUESTION_BOILERPLATE,
                            _QUESTION_CONDITIONS,
                            _QUESTION_CONSTRAINTS,
                            _QUESTION_CATEGORY,
                            _QUESTION_CATEGORY_SUB,
                            _QUESTION_TAGS,
                            _QUESTION_REFS,
                        ) VALUES (
                            ${question.created_at},
                            ${question.updated_at},
                            ${question.id},
                            ${question.language},
                            ${question.level},
                            ${question.points},
                            ${question.task},
                            ${question.data},
                            ${question.result},
                            ${question.hints},
                            ${question.boilerplate},
                            ${question.conditions},
                            ${question.constraints},
                            ${question.category},
                            ${question.category_sub},
                            ${question.tags},
                            ${question.refs}
                         )`;
                    return res.status(200);
                } catch {
                    return res.status(500).send({ error: "Something went wrong" });
                }
                break
            default:
                return res.status(400).send({ error: `${req.method} Method Not Allowed` });
        }
    };

    public varDelete = async (req: Request, res: Response) => {
        switch(req.method) {
            case('DELETE'):
                try {
                    const id = req.params.id;
                    const results = await sql`DELETE * FROM _QUESTIONS WHERE _QUESTION_ID = ${id}`;
                    return res.status(200);
                } catch {
                    return res.status(500).send({ error: "Something went wrong" });
                }
                break
            default:
                return res.status(400).send({ error: `${req.method} Method Not Allowed` });
        }
    }

}
