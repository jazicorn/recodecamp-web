'use strict';
import { Request, Response } from 'express';
import Router from 'express-promise-router';
import client from '../config/db';
//import { faker } from '@faker-js/faker';

class StrQuestions {
    public pathStr = '/str';
    public pathStrId = '/str/:id';
    public pathStrRandom = '/str/all'
    public router = Router();
    constructor() {
        this.initializeRoutes();
    }

    public initializeRoutes() {
        this.router.get(this.pathStr, this.str);
        this.router.get(this.pathStrId, this.strId);
        this.router.get(this.pathStrRandom, this.strRandom);
    }

    public str = async (req: Request, res: Response) => {
        if (req.method === 'GET') {
            try {
                const results = await client.query(`SELECT * FROM strings WHERE category='strings'`);
                res.status(200).json({ data: results.rows });
            } catch {
                res.status(500).json({ error: "Something went wrong" });
            }
        } else {
            res.status(400).send({ error: `${req.method} Method Not Allowed` });
        }

    };

     public strRandom = async (req: Request, res: Response) => {
        if (req.method === 'GET') {
            try {
                const results = await client.query(`SELECT * FROM strings WHERE category='strings'`);
                res.status(200).json({ data: results.rows });
            } catch {
                res.status(500).json({ error: "Something went wrong" });
            }
        } else {
            res.status(400).send({ error: `${req.method} Method Not Allowed` });
        }

    };

    public strId = async (req: Request, res: Response) => {
        const id = req.params.id;
        if (req.method === 'GET') {
            try {
                const results = await client.query(`SELECT * FROM strings WHERE id =$1`, [id]);
                res.status(200).json({ data: results.rows });
            } catch {
                res.status(500).json({ error: "Something went wrong" });
            }
        } else {
            res.status(400).send({ error: `${req.method} Method Not Allowed` });
        }
    };
}

export default StrQuestions;
