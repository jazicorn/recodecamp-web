'use strict';
import { Request, Response } from 'express';
import Router from 'express-promise-router';
import client from '../../../config/db';
import { Question } from '../../../classes/question';
import { Q_Type } from  '../../../types/types.question';
import { getRandomInt } from '../../../utils/index';
import { objSingle, objMulti } from '../../../data/java/java.comments';

export default class VarDeclare {
    public pathCommentsRandom = '/java/comments/all';
    public pathCommentsSingle = '/java/comments/single/all';
    public pathCommentsMulti = '/java/comments/multi/all';
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
        const dataSingle = objSingle();
        const dataMulti = objMulti();

        const questionSingle = new Question(dataSingle);
        const questionMulti = new Question(dataMulti);
        const random = getRandomInt(2);

        const randomQuestion = [dataSingle, dataMulti][random];

        switch(req.method) {
            case('GET'):
                try {
                    res.status(200).send({ data: randomQuestion });
                } catch {
                    res.status(500).send({ error: "Something went wrong" });
                }
                break
            default:
                res.status(400).send({ error: `${req.method} Method Not Allowed` });
        };
    };

    public commentsSingle = async (req: Request, res: Response) => {
        //console.log("hello")
        const dataObj = objSingle();
        //console.log(dataObj)
        const question = new Question(dataObj);
        //console.log(question);
        switch(req.method) {
            case('GET'):
                try {
                    res.status(200).send({ data: question });

                } catch {
                    res.status(500).send({ error: "Something went wrong" });
                }
                break
            default:
                res.status(400).send({ error: `${req.method} Method Not Allowed` });
        }
    };

    public commentsMulti = async (req: Request, res: Response) => {
        const dataObj = objMulti();
        const question = new Question(dataObj);
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
