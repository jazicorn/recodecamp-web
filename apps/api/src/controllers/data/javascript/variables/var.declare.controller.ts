'use strict';
import { Request, Response } from 'express';
import Router from 'express-promise-router';
import client from '../../../../config/db';
import { Question } from '../../../../classes/question';
import { Q_Type } from  '../../../../types/types.question';
import { getRandomInt } from '../../../../utils/index';
import { objRandom, objRandomVar, objRandomConst, objRandomLet } from '../../../../data/javascript/javascript.var.declare'

export default class VarDeclare {
    public pathVarRandomDeclare = '/javascript/var/declare/all'
    public pathVarDeclareVar = '/javascript/var/declare/var';
    public pathVarDeclareConst = '/javascript/var/declare/const';
    public pathVarDeclareLet = '/javascript/var/declare/let';
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
        const data = objRandom();
        const question: Q_Type = new Question(data);
        switch(req.method) {
            case('GET'):
                try {
                    return res.status(200).send({ data: question });
                } catch {
                    return res.status(500).send({ error: "Something went wrong" });
                }
                break
            default:
                return res.status(400).send({ error: `${req.method} Method Not Allowed` });
        }
    };

    public varDeclareVar = async (req: Request, res: Response) => {
        const data = objRandomVar();
        const question: Q_Type = new Question(data);
        switch(req.method) {
            case('GET'):
                try {
                    return res.status(200).send({ data: question });
                } catch {
                    return res.status(500).send({ error: "Something went wrong" });
                }
                break
            default:
                return res.status(400).send({ error: `${req.method} Method Not Allowed` });
        }
    };

    public varDeclareConst = async (req: Request, res: Response) => {
        const data = objRandomConst();
        const question: Q_Type = new Question(data);
         switch(req.method) {
            case('GET'):
                try {
                    return res.status(200).send({ data: question });
                } catch {
                    return res.status(500).send({ error: "Something went wrong" });
                }
                break
            default:
                return res.status(400).send({ error: `${req.method} Method Not Allowed` });
        }
    };

     public varDeclareLet = async (req: Request, res: Response) => {
        const data = objRandomLet();
        const question: Q_Type = new Question(data);
        switch(req.method) {
            case('GET'):
                try {
                    return res.status(200).send({ data: question });
                } catch {
                    return res.status(500).send({ error: "Something went wrong" });
                }
                break
            default:
                return res.status(400).send({ error: `${req.method} Method Not Allowed` });
        }
    };
}
