'use strict';
import { Request, Response } from 'express';
import Router from 'express-promise-router';
import client from '../../config/db';
import { faker } from '@faker-js/faker';
import { Question } from '../../classes/javascript.question';
import { JS_Type } from  '../../types/types.question';
import { getRandomInt } from '../../utils/index';
import { objBlockScope, objFuncScope, objGlobalScope } from '../../data/var.scope.data';

export default class VarScope {
    public pathVarRandomScope = '/var/scope/random';
    public pathVarScopeBlock = '/var/scope/block';
    public pathVarScopeFunc = '/var/scope/func';
    public pathVarScopeGlobal = '/var/scope/global';
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
        switch(req.method) {
            case('GET'):
                try {
                    const random = getRandomInt(3);
                    const obj = [objBlockScope, objFuncScope, objGlobalScope][random];
                    const question = new Question(obj);
                    res.status(200).json({ data: question });
                } catch {
                    res.status(500).json({ error: "Something went wrong" });
                }
                break
            default:
                res.status(400).send({ error: `${req.method} Method Not Allowed` });
        }
    };

    public varBlockScope = async (req: Request, res: Response) => {
        switch(req.method) {
            case('GET'):
                try {
                    const question = new Question(objBlockScope);
                    res.status(200).json({ data: question });
                } catch {
                    res.status(500).json({ error: "Something went wrong" });
                }
                break
            default:
                res.status(400).send({ error: `${req.method} Method Not Allowed` });
        }
    };

    public varFuncScope = async (req: Request, res: Response) => {
        switch(req.method) {
            case('GET'):
                try {
                    const question = new Question(objFuncScope);
                    res.status(200).json({ data: question });
                } catch {
                    res.status(500).json({ error: "Something went wrong" });
                }
                break
            default:
                res.status(400).send({ error: `${req.method} Method Not Allowed` });
        }
    };

    public varGlobalScope = async (req: Request, res: Response) => {
        switch(req.method) {
            case('GET'):
                try {
                    const question = new Question(objGlobalScope);
                    res.status(200).json({ data: question });
                } catch {
                    res.status(500).json({ error: "Something went wrong" });
                }
                break
            default:
                res.status(400).send({ error: `${req.method} Method Not Allowed` });
        }
    };
}
