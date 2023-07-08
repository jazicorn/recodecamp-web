'use strict';
import { Request, Response } from 'express';
import Router from 'express-promise-router';
//import { faker } from '@faker-js/faker';
import query from '../db/index';

class StrQuestions {
    public pathStr = '/str/q';
    public pathStrId = '/str/q/:id';
    public router = Router();
    constructor() {
        this.initializeRoutes();
    }

    public initializeRoutes() {
        this.router.get(this.pathStrId, this.strId);
        this.router.post(this.pathStrId, this.strId);
        this.router.put(this.pathStrId, this.strId);
        this.router.delete(this.pathStr, this.str);
    }

    public str = async (req: Request, res: Response) => {
        const { method } = req;
        switch (method) {
            case 'GET':
                query('SELECT * FROM js ORDER BY id ASC', (err, results) => {
                    if (err) {
                        throw err;
                    }
                    res.status(200).json(results.rows);
                });
                return;
            case 'POST' | 'PUT' | 'Delete':
                return res.status(400).send(`${method} Method Not Allowed`);
            default:
                return res.status(405).send(` ${method} Method Not Allowed`);
        }
    };

    public strId = async (req: Request, res: Response) => {
        const { method } = req;
        const id = req.params.id;
        switch (method) {
            case 'GET':
                query(
                    'SELECT * FROM js WHERE id = $1',
                    [id],
                    (err, results) => {
                        if (err) {
                            throw err;
                        }
                        res.status(200).json(results.rows);
                    }
                );
                return;
            case 'POST':
                return res;
            case 'PUT':
                return res;
            case 'DELETE':
                return res;
            default:
                return res.status(405).send(` ${method} Method Not Allowed`);
        }
    };
}

export default StrQuestions;
