'use strict';
import { Request, Response } from 'express';
import Router from 'express-promise-router';
import client from '../../../config/db';
import { Question } from '../../../classes/question';
import { Q_Type } from  '../../../types/types.question';
import { getRandomInt } from '../../../utils/index';
import { objSingle as objSingleJs, objMulti as objMultiJs } from '../../../data/javascript/javascript.comments';

export default class VarDeclare {
    public pathCommentsRandom = '/javascript/comments/all';
    public pathCommentsSingle = '/javascript/comments/single/all';
    public pathCommentsMulti = '/javascript/comments/multi/all';
    public router = Router();
    constructor() {
        this.initializeRoutes();
    }

    public initializeRoutes() {
        this.router.get(this.pathCommentsRandom, this.commentsRandom);
        this.router.get(this.pathCommentsSingle, this.commentsSingle);
        this.router.get(this.pathCommentsMulti, this.commentsMulti);
    }

    public commentsRandom = async (req: Request, res: Response) => {
        const dataSingle = objSingleJs();
        const dataMulti = objMultiJs();

        const questionSingle = new Question(dataSingle);
        const questionMulti = new Question(dataMulti);
        const random = getRandomInt(2);

        const randomQuestion = [dataSingle, dataMulti][random];

        switch(req.method) {
            case('GET'):
                try {
                    const result = await randomQuestion;
                    res.setHeader('Access-Control-Allow-Origin', '*');
                    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
                    res.setHeader('Access-Control-Allow-Methods', 'GET, PUT, PATCH, POST, DELETE');
                    return res.status(200).send({ data: result });
                } catch {
                    res.status(500).send({ error: "Something went wrong" });
                }
                break
            default:
                res.status(400).send({ error: `${req.method} Method Not Allowed` });
        };
    };

    public commentsSingle = async (req: Request, res: Response) => {
        const data = objSingleJs();
        const question = new Question(data);
        switch(req.method) {
            case('GET'):
                try {
                    const result = await question;
                    res.setHeader('Access-Control-Allow-Origin', '*');
                    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
                    res.setHeader('Access-Control-Allow-Methods', 'GET, PUT, PATCH, POST, DELETE');
                    return res.status(200).send({ data: result });
                } catch {
                    res.status(500).send({ error: "Something went wrong" });
                }
                break
            default:
                res.status(400).send({ error: `${req.method} Method Not Allowed` });
        }
    };

    public commentsMulti = async (req: Request, res: Response) => {
        const data = objMultiJs();
        const question = new Question(data);
         switch(req.method) {
            case('GET'):
                try {
                    const result = await question;
                    res.setHeader('Access-Control-Allow-Origin', '*');
                    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
                    res.setHeader('Access-Control-Allow-Methods', 'GET, PUT, PATCH, POST, DELETE');
                    return res.status(200).send({ data: result });
                } catch {
                    return res.status(500).send({ error: "Something went wrong" });
                }
                break
            default:
                return res.status(400).send({ error: `${req.method} Method Not Allowed` });
        }
    };

}
