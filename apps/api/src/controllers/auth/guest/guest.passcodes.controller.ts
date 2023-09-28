import { Request, Response } from 'express';
import Router from 'express-promise-router';
import { Guest } from '../../../classes/guest';
import { _Guest } from  '../../../types/types.guest';
import sql from '../../../config/db';
import cors from 'cors';
import { z } from "zod";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import * as dotenv from 'dotenv';

dotenv.config();

class Guest_Routes {
    /**Public: Guest Registers Passcode*/
    public pathGuestRegister = '/guest/register';
    /**Express Router*/
    public router = Router();
    /**Cors Options*/
    private corsOptions = cors({
        origin: process.env.WEBURL,
        optionsSuccessStatus: 200
    });

    constructor() {
        this.initializeRoutes();
    }

    public initializeRoutes() {
        this.router.get(this.pathGuestRegister, this.guestRegister);
    }

    /**Public: Guest Registers Passcode*/
    public guestRegister = async (req: Request, res: Response) => {
        switch(req.method) {
            case('POST'):
                 try {
                    const { email, passcode } = req.body;
                    const data = await sql`SELECT * FROM _GUEST WHERE _PASSCODE = ${passcode} AND _EMAIL = ${email}`;
                    return res.status(200).send(data);
                } catch {
                    return res.status(500).send({ error: "Something went wrong"});
                }
                break
            default:
                return res.status(400).send({ error: `${req.method} Method Not Allowed` });
        };
    };
}

export default Guest_Routes;
