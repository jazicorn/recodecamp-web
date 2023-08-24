'use strict';
import { Request, Response } from 'express';
import Router from 'express-promise-router';
import client from '../../config/db';
import { Question } from '../../classes/question';
import { Q_Type } from  '../../types/types.question';
import { getRandomInt } from '../../utils/index';
import { objSingle, objMulti } from '../../data/comments.data'

export default class VarDeclare {
    // public pathCommentsRandom = '/comments/all';
    public pathCommentsSingle = '/comments/single/all';
    public pathCommentsMulti = '/comments/multi/all';
    public router = Router();
    constructor() {
        this.initializeRoutes();
    }

    public initializeRoutes() {
        // this.router.get(this.pathCommentsRandom, this.commentsRandom);
        this.router.get(this.pathCommentsSingle, this.commentsSingle);
        this.router.get(this.pathCommentsMulti, this.commentsMulti);
    }

    public commentsSingle = async (req: Request, res: Response) => {
        const data = objSingle();
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

    public commentsMulti = async (req: Request, res: Response) => {
        const data = objMulti();
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
