'use strict';
import { Request, Response } from 'express';
import Router from 'express-promise-router';
import sql from '../../../../config/db';
import { faker } from '@faker-js/faker';
import { Question } from '../../../../classes/question';
import { Q_Type } from  '../../../../types/types.question';
import { getRandomInt } from '../../../../utils/index';
import { objRandom as objDeclare } from '../../../../data/javascript/javascript.var.declare';
import { objGlobalScope, objFuncScope, objBlockScope } from '../../../../data/javascript/javascript.var.scope';
import { objBlockScopeReassign } from '../../../../data/javascript/javascript.var.scope.reassign';
import cors from 'cors';

export default class VarGeneral {
    /**Public: Get random var */
    public pathRandom = '/javascript/var/all';
    /**Public: Get All Var Category Questions*/
    public pathVar = '/javascript/var';
    /**Public: Get Var Category Question by ID*/
    public pathVarId = '/javascript/var/get/:id';
    /**Private: Create Var Question*/
    public pathVarNew = '/javascript/var/new';
    /**Private: Update Var Question*/
    public pathVarUpdate = '/javascript/var/update/:id';
    /**Private: Delete Var Question';*/
    public pathVarDelete = '/javascript/var/delete/:id';
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
        this.router.get(this.pathRandom, this.varRandom);
        this.router.get(this.pathVar, this.varAll);
        this.router.get(this.pathVarId, this.varId);
        this.router.post(this.pathVarNew, this.corsOptions, this.varPost);
        this.router.put(this.pathVarUpdate, this.corsOptions, this.varUpdate);
        this.router.delete(this.pathVarDelete, this.corsOptions, this.varDelete);
    }

     public varRandom = async (req: Request, res: Response) => {
        const declare = new Question(objDeclare());
        const scopeGlobal = new Question(objGlobalScope());
        const scopeFunc = new Question(objFuncScope());
        const scopeBlock = new Question(objBlockScope());
        const reassign = new Question(objBlockScopeReassign());

        const random = getRandomInt(5);

        const varRandom = [declare, scopeGlobal, scopeFunc, scopeBlock, reassign][random];

        switch(req.method) {
            case('GET'):
                try {
                    return res.status(200).send({ data: varRandom });
                } catch {
                    return res.status(500).send({ error: "Something went wrong" });
                }
                break
            default:
                return res.status(400).send({ error: `${req.method} Method Not Allowed` });
        }
    };

    public varAll = async (req: Request, res: Response) => {
        switch(req.method) {
            case('GET'):
                try {
                    const results = await sql`SELECT * FROM _QUESTIONS WHERE _QUESTIONS_CATEGORY = 'variables'`;

                    return res.status(200).send({ data: results });
                    }
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
                        const results = await sql`SELECT * FROM _QUESTIONS WHERE _QUESTION_ID = ${id}`;

                        return res.status(200).send({ data: results });
                    }
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
                        const results = await sql`SELECT * FROM _QUESTIONS WHERE _QUESTION_ID = ${id}`;

                        return res.status(200);
                    }
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
                    const data: Q_Type = req.body;
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
                        _QUESTION_ANSWER_REGEX,
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
                        ${question._QUESTION_ANSWER_REGEX},
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

    public varDelete = async (req: Request, res: Response) => {
        switch(req.method) {
            case('DELETE'):
                try {
                        const results = await sql`DELETE * FROM _QUESTIONS WHERE _QUESTION_ID = ${id}`;

                        return res.status(200);
                    }
                } catch {
                    return res.status(500).send({ error: "Something went wrong" });
                }
                break
            default:
                return res.status(400).send({ error: `${req.method} Method Not Allowed` });
        }
    }

}
