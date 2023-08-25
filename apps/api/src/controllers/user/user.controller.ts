import { Request, Response } from 'express';
import Router from 'express-promise-router';
import { User } from '../../classes/user';
import { User } from  '../../types/types.user';
import sql from '../../config/db';
import cors from 'cors';

class User {
    /**Public: Get User by ID*/
    public pathUser = '/user/:id';
    /**Public: User Registers Passcode*/
    public pathUserRegister = '/user/register';
    /**Public: Update User*/
    public pathUserUpdate = '/user/update/:id';
    /**Private: Admin Deletes User*/
    public pathUserDelete = '/user/delete/:id';
    /**Private: Admin Gets All Users*/
    public pathUserAll = '/user/all';
    /**Private: Admin Creates User*/
    public pathUserNew = '/user/new';
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
        this.router.get(this.pathUser, this.userId);
        this.router.get(this.pathUserRegister, this.userRegister);
        this.router.get(this.pathUserAll, this.corsOptions, this.userAll);
        this.router.post(this.pathUserNew, this.corsOptions, this.userNew);
        this.router.put(this.pathUserUpdate, this.userUpdate);
        this.router.delete(this.pathUserDelete, this.corsOptions, this.userDelete);
    }

    /**Public: Get User by ID*/
    public userId = async (req: Request, res: Response) => {
        switch(req.method) {
            case('GET'):
                try {
                    const id = req.params.id;
                    const data = await sql`SELECT * FROM _User WHERE _USER_ID = ${id}`;
                    return res.status(200).send(data);
                } catch {
                    return res.status(500).send({ error: "Something went wrong"});
                }
                break
            default:
                return res.status(400).send({ error: `${req.method} Method Not Allowed` });
        };
    };
    /**Public: Update User by ID*/
    public userUpdate = async (req: Request, res: Response) => {
        switch(req.method) {
            case('PUT'):
                 try {
                    const id = req.params.id;
                    const data = await sql`SELECT * FROM _User WHERE _USER_ID = ${id}`;
                    return res.status(200).send(data);
                } catch {
                    return res.status(500).send({ error: "Something went wrong"});
                }
                break
            default:
                return res.status(400).send({ error: `${req.method} Method Not Allowed` });
        };
    };
    /**Public: User Registers Passcode*/
    public userRegister = async (req: Request, res: Response) => {
        switch(req.method) {
            case('POST'):
                 try {
                    const { email, passcode } = req.body;
                    const data = await sql`SELECT * FROM _User WHERE _USER_PASSCODE = ${passcode} AND _USER_EMAIL = ${email}`;
                    return res.status(200).send(data);
                } catch {
                    return res.status(500).send({ error: "Something went wrong"});
                }
                break
            default:
                return res.status(400).send({ error: `${req.method} Method Not Allowed` });
        };
    };
    /**Private: Admin Gets All Users*/
    public userAll = async (req: Request, res: Response) => {
        switch(req.method) {
            case('GET'):
                 try {
                    const id = req.params.id;
                    const data = await sql`SELECT * FROM _User`;
                    return res.status(200).send(data);
                } catch {
                    return res.status(500).send({ error: "Something went wrong"});
                }
                break
            default:
                return res.status(400).send({ error: `${req.method} Method Not Allowed` });
        };
    };
    /**Private: Admin Creates User*/
    public userNew = async (req: Request, res: Response) => {
        switch(req.method) {
            case('POST'):
                try {
                    const data: JS_Type = req.body;
                    const user = new User(data);
                    const encryptedUserPassword = await bcrypt.hash(user._USER_PASSWORD, 10);
                    const results = await sql`INSERT INTO _USER (
                            _USER_CREATED_AT,
                            _USER_UPDATED_AT,
                            _USER_ID,
                            _USER_PASSCODE,
                            _USER_PASSCODE_CONFIRMED,
                            _USER_EMAIL,
                            _USER_EMAIL_CONFIRMED,
                            _USER_PASSWORD,
                            _USER_FIRSTNAME,
                            _USER_LASTNAME,
                            _USER_DEFAULT_LANGUAGE,
                            _USER_DEFAULT_ROUTE,
                            _USER_POINTS,
                            _USER_COURSES,
                        ) VALUES (
                            ${user._USER_CREATED_AT},
                            ${user._USER_UPDATED_AT},
                            ${user._USER_ID},
                            ${user._USER_PASSCODE},
                            ${user._USER_PASSCODE_CONFIRMED},
                            ${user._USER_EMAIL},
                            ${user._USER_EMAIL_CONFIRMED},
                            ${encryptedUserPassword},
                            ${user._USER_FIRSTNAME},
                            ${user._USER_LASTNAME},
                            ${user._USER_DEFAULT_LANGUAGE},
                            ${user._USER_DEFAULT_ROUTE},
                            ${user._USER_POINTS},
                            ${user._USER_COURSES},
                        )`;
                    const getUser = await sql`SELECT * FROM _User WHERE _USER_ID = ${user.id}`;
                    return res.status(200).send(getUser);
                } catch {
                    return res.status(500).send({ error: "Something went wrong" });
                }
                break
            default:
                return res.status(400).send({ error: `${req.method} Method Not Allowed` });
        }
    };
    /**Private: Admin Deletes User*/
    public userDelete = async (req: Request, res: Response) => {
        switch(req.method) {
            case('DELETE'):
                 try {
                    const id = req.params.id;
                    const results = await sql`DELETE * FROM _USER WHERE _USER_ID = ${id}`;
                    return res.status(200);
                } catch {
                    return res.status(500).send({ error: "Something went wrong"});
                }
                break
            default:
                return res.status(400).send({ error: `${req.method} Method Not Allowed` });
        };
    };
}

export default User;
