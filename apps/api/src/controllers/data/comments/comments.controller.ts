'use strict';
import { Request, Response } from 'express';
import Router from 'express-promise-router';
import client from '../../../config/db';
import { Question } from '../../../classes/question';
import { Q_Type } from  '../../../types/types.question';
import { getRandomInt } from '../../../utils/index';
import { objSingle as objSingleJs, objMulti as objMultiJs } from '../../../data/javascript/javascript.comments';
import { objSingle as objSingleJava, objMulti as objMultiJava } from '../../../data/java/java.comments';
import { objSingle as objSinglePy, objMulti as objMultiPy } from '../../../data/python/python.comments';

export default class VarDeclare {
    public pathCommentsRandom = '/:id/comments/all';
    public pathCommentsSingle = '/:id/comments/single/all';
    public pathCommentsMulti = '/:id/comments/multi/all';
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
        let dataSingle
        let dataMulti

        switch(req.params.id.toLowerCase()) {
            case("javascript"):
                dataSingle = objSingleJs();
                dataMulti = objMultiJs();
                break
            case("java"):
                dataSingle = objSingleJava();
                dataMulti = objMultiJava();
                break
            case("python"):
                dataSingle = objSinglePy();
                dataMulti = objMultiPy();
                break
            default:
                dataSingle = objSingleJs();
                dataMulti = objMultiJs();
        }

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
        let data;
        switch(req.params.id.toLowerCase()) {
            case("javascript"):
                data = objSingleJs();
                break
            case("java"):
                data = objSingleJava();
                break
            case("python"):
                data = objSinglePy();
                break
            default:
                data = objSingleJs();
        }
        const question = new Question(data);
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
        let data;
        switch(req.params.id.toLowerCase()) {
            case("javascript"):
                data = objMultiJs();
                break
            case("java"):
                data = objMultiJava();
                break
            case("python"):
                data = objMultiPy();
                break
            default:
                data = objMultiJs();
        }
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
