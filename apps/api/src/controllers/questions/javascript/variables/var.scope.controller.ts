'use strict';
import { Request, Response } from 'express';
import Router from 'express-promise-router';
import client from '../../../../config/db';
import { Question } from '../../../../classes/question';
import { Q_Type } from  '../../../../types/types.question';
import { getRandomInt } from '../../../../utils/index';
import { objBlockScope, objFuncScope, objGlobalScope } from '../../../../data/javascript/javascript.var.scope';

export default class VarScope {
    public pathVarRandomScope = '/javascript/var/scope/all';
    public pathVarScopeBlock = '/javascript/var/scope/block';
    public pathVarScopeFunc = '/javascript/var/scope/func';
    public pathVarScopeGlobal = '/javascript/var/scope/global';
    public router = Router();
    constructor() {
        this.initializeRoutes();
    }

    public initializeRoutes() {
        this.router.get(this.pathVarRandomScope, this.varRandomScope);
        this.router.get(this.pathVarScopeBlock, this.varBlockScope);
        this.router.get(this.pathVarScopeFunc, this.varFuncScope);
        this.router.get(this.pathVarScopeGlobal, this.varGlobalScope);
    }

    public varRandomScope = async (req: Request, res: Response) => {
        const random = getRandomInt(3);
        const obj = [objBlockScope(), objFuncScope(), objGlobalScope()][random];
        const question = new Question(obj);
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

    public varBlockScope = async (req: Request, res: Response) => {
        const obj = objBlockScope();
        const question = new Question(obj);
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

    public varFuncScope = async (req: Request, res: Response) => {
        const obj = objFuncScope();
        const question = new Question(obj);
        switch(req.method) {
            case('GET'):
                try {
                    return res.status(200).send({ data: question });
                } catch {
                    return res.status(500).send({ error: "Something went wrong" });
                }
                break
            default:
                res.status(400).send({ error: `${req.method} Method Not Allowed` });
        }
    };

    public varGlobalScope = async (req: Request, res: Response) => {
        const obj = objGlobalScope();
        const question = new Question(obj);
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
