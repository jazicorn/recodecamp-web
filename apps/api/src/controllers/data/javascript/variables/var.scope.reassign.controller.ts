'use strict';
import { Request, Response } from 'express';
import Router from 'express-promise-router';
import client from '../../../../config/db';
import { Question } from '../../../../classes/question';
import { Q_Type } from  '../../../../types/types.question';
import { getRandomInt } from '../../../../utils/index';
import { objBlockScopeReassign } from '../../../../data/javascript/javascript.var.scope.reassign';

export default class VarScopeReassign {
    public pathVarReassignBlock = '/javascript/var/scope/reassign/block';
    public router = Router();
    constructor() {
        this.initializeRoutes();
    }

    public initializeRoutes() {
        this.router.get(this.pathVarReassignBlock, this.varBlockScope);
    }

    public varBlockScope = async (req: Request, res: Response) => {
        const data = objBlockScopeReassign();
        const question = new Question(data);
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
