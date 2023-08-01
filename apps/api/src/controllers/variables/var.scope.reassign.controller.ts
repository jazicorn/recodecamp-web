'use strict';
import { Request, Response } from 'express';
import Router from 'express-promise-router';
import client from '../../config/db';
import { Question } from '../../classes/javascript.question';
import { JS_Type } from  '../../types/types.question';
import { getRandomInt } from '../../utils/index';
import { objBlockScopeReassign } from '../../data/var.scope.reassign.data';

export default class VarScopeReassign {
    public pathVarReassignBlock = '/var/scope/reassign/block';
    public router = Router();
    constructor() {
        this.initializeRoutes();
    }

    public initializeRoutes() {
        this.router.get(this.pathVarReassignBlock, this.varBlockScope);
    }

    public varBlockScope = async (req: Request, res: Response) => {
        const data = objBlockScopeReassign();
        const question: JS_Type = new Question(data);
        switch(req.method) {
            case('GET'):
                try {
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
