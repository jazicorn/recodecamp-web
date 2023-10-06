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
        try {
            const dataSingle = objSingleJs();
            const dataMulti = objMultiJs();

            const questionSingle = new Question(dataSingle);
            const questionMulti = new Question(dataMulti);
            const random = getRandomInt(2);

            const randomQuestion = [dataSingle, dataMulti][random];

            switch(req.method) {
                case('OPTIONS'):
                    res.setHeader("Access-Control-Allow-Origin", "*");
                    res.setHeader("Access-Control-Allow-Methods", "GET, HEAD, PUT, PATCH, POST, DELETE");
                    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
                    res.sendStatus(204);
                case('GET'):
                    if(randomQuestion !== undefined || Object.keys(randomQuestion).length !== 0 ) {
                        res.status(200).send({ data: randomQuestion });
                    }
                    break
                default:
                    res.status(400).send({ error: `${req.method} Method Not Allowed` });
            }
        } catch {
            res.status(500).send({ error: "Something went wrong" });
        };
    };

    public commentsSingle = async (req: Request, res: Response) => {
        try {
            const data = objSingleJs();
            const question = new Question(data);
            switch(req.method) {
                case('OPTIONS'):
                    res.setHeader("Access-Control-Allow-Origin", "*");
                    res.setHeader("Access-Control-Allow-Methods", "GET, HEAD, PUT, PATCH, POST, DELETE");
                    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
                    res.sendStatus(204);
                case('GET'):
                    if(question !== undefined || Object.keys(question).length !== 0 ) {
                        res.status(200).send({ data: question });
                    };
                    break
                default:
                    res.status(400).send({ error: `${req.method} Method Not Allowed` });
            }
        } catch {
            res.status(500).send({ error: "Something went wrong" });
        }
    };

    public commentsMulti = async (req: Request, res: Response) => {
        try {
            const data = objMultiJs();
            const question = new Question(data);
            switch(req.method) {
                case('OPTIONS'):
                    res.setHeader("Access-Control-Allow-Origin", "*");
                    res.setHeader("Access-Control-Allow-Methods", "GET, HEAD, PUT, PATCH, POST, DELETE");
                    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
                    res.sendStatus(204);
                case('GET'):
                    if(question !== undefined || Object.keys(question).length !== 0 ) {
                        res.status(200).send({ data: question });
                    };
                    break
                default:
                    return res.status(400).send({ error: `${req.method} Method Not Allowed` });
            }
        } catch {
            return res.status(500).send({ error: "Something went wrong" });
        }
    };

}
