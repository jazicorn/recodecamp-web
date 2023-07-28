'use strict';
import { Request, Response } from 'express';
import Router from 'express-promise-router';
import client from '../../config/db';
import { faker } from '@faker-js/faker';
import { Question } from '../../classes/javascript.question';
import { JS_Type } from  '../../types/types.question';
import { getRandomInt } from '../../utils/index';
import { objRandom, objRandomVar, objRandomConst, objRandomLet } from '../../data/var.declare.data'

export default class VarDeclare {
    public pathVarRandomDeclare = '/var/declare/random'
    public pathVarDeclareVar = '/var/declare/var';
    public pathVarDeclareConst = '/var/declare/const';
    public pathVarDeclareLet = '/var/declare/let';
    public router = Router();
    constructor() {
        this.initializeRoutes();
    }

    public initializeRoutes() {
        this.router.get(this.pathVarRandomDeclare, this.varRandomDeclare);
        this.router.get(this.pathVarDeclareVar, this.varDeclareVar);
        this.router.get(this.pathVarDeclareConst, this.varDeclareConst);
        this.router.get(this.pathVarDeclareLet, this.varDeclareLet);
    }

    public varRandomDeclare = async (req: Request, res: Response) => {
        const question: JS_Type = new Question(objRandom);
        if (req.method === 'GET') {
            try {
                res.status(200).json({ data: question });
            } catch {
                res.status(500).json({ error: "Something went wrong" });
            }
        } else {
            res.status(400).send({ error: `${req.method} Method Not Allowed` });
        }
    };

    public varDeclareVar = async (req: Request, res: Response) => {
        const question: JS_Type = new Question(objRandomVar);
        if (req.method === 'GET') {
            try {
                res.status(200).json({ data: question });
            } catch {
                res.status(500).json({ error: "Something went wrong" });
            }
        } else {
            res.status(400).send({ error: `${req.method} Method Not Allowed` });
        }

    };

    public varDeclareConst = async (req: Request, res: Response) => {
        const question: JS_Type = new Question(objRandomConst);
        if (req.method === 'GET') {
            try {
                res.status(200).json({ data: question });
            } catch {
                res.status(500).json({ error: "Something went wrong" });
            }
        } else {
            res.status(400).send({ error: `${req.method} Method Not Allowed` });
        }

    };

     public varDeclareLet = async (req: Request, res: Response) => {
        const question: JS_Type = new Question(objRandomLet);
        if (req.method === 'GET') {
            try {
                res.status(200).json({ data: question });
            } catch {
                res.status(500).json({ error: "Something went wrong" });
            }
        } else {
            res.status(400).send({ error: `${req.method} Method Not Allowed` });
        }

    };
}
