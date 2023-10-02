'use strict';
import { Request, Response } from 'express';
import Router from 'express-promise-router';
import sql from '../../../config/db';
import { faker } from '@faker-js/faker';
import { JS_Question } from '../../../classes/javascript.question';
import { JS_Type } from  '../../../types/types.question';
import { getRandomInt } from '../../../utils/index';
import cors from 'cors';

export default class Questions {
    /**Public: Get All Questions*/
    public pathQuestion = '/q';
    /**Public: Get Question by ID*/
    public pathQuestionId = '/q/get/:id';
    /**Private: Create Question*/
    public pathQuestionNew = '/q/new';
    /**Private: Update Question*/
    public pathQuestionUpdate = '/q/update/:id';
    /**Private: Delete Question';*/
    public pathQuestionDelete = '/q/delete/:id';
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
        this.router.get(this.pathQuestion, this.questionAll);
        this.router.get(this.pathQuestionId, this.questionId);
        this.router.post(this.pathQuestionNew, this.corsOptions, this.questionPost);
        this.router.put(this.pathQuestionUpdate, this.corsOptions, this.questionUpdate);
        this.router.delete(this.pathQuestionDelete, this.corsOptions, this.questionDelete);
    }

    public questionAll = async (req: Request, res: Response) => {
        switch(req.method) {
            case('GET'):
                try {
                    const results = await sql`SELECT * FROM _QUESTIONS`;
                    return res.status(200).send({ data: results.rows });
                } catch {
                    return res.status(500).send({ error: "Something went wrong" });
                }
                break
            default:
                return res.status(400).send({ error: `${req.method} Method Not Allowed` });
        }
    };

    public questionId = async (req: Request, res: Response) => {
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

    public questionUpdate = async (req: Request, res: Response) => {
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

    public questionPost = async (req: Request, res: Response) => {
        switch(req.method) {
            case('POST'):
                try {
                    const data: JS_Type = req.body;
                    const question = new JS_Question(data);
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
                            ${question._QUESTION_CREATED_AT},
                            ${question._QUESTION_UPDATED_AT},
                            ${question._QUESTION_ID},
                            ${question._QUESTION_LANGUAGE},
                            ${question._QUESTION_LEVEL},
                            ${question._QUESTION_POINTS},
                            ${question._QUESTION_TASK},
                            ${question._QUESTION_DATA},
                            ${question._QUESTION_RESULT},
                            ${question._QUESTION_HINTS},
                            ${question._QUESTION_BOILERPLATE},
                            ${question._QUESTION_CONDITIONS},
                            ${question._QUESTION_CONSTRAINTS},
                            ${question._QUESTION_CATEGORY},
                            ${question._QUESTION_CATEGORY_SUB},
                            ${question._QUESTION_TAGS},
                            ${question._QUESTION_REFS}
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

    public questionDelete = async (req: Request, res: Response) => {
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
