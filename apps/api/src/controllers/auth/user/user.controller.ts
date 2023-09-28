import { Request, Response } from 'express';
import Router from 'express-promise-router';
import { user } from '../../../classes/user';
import { _user } from  '../../../types/types.user';
import sql from '../../../config/db';
import cors from 'cors';
import { z } from "zod";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import * as dotenv from 'dotenv';

dotenv.config();

class user_Routes {
    /**Public: user Delete Routes*/
    public pathUserDelete = '/delete/:id';
    /**Public: Create user*/
    public pathUserNew = '/new';
    /**Public: Validate user*/
    public pathUserLogin = '/login';
    /**Public: Auth user*/
    public pathUserAuth = '/verify';
    /**Express Router*/
    public router = Router({ mergeParams: true });
    /**Cors Options*/
    private corsOptions = cors({
        origin: process.env.WEBURL,
        optionsSuccessStatus: 200
    });

    constructor() {
        this.initializeRoutes();
    }

    public initializeRoutes() {
        this.router.post(this.pathuserNew, this.userNew);
        this.router.post(this.pathuserLogin, this.userLogin);
        this.router.delete(this.pathuserDelete, this.corsOptions, this.userDelete);
        this.router.post(this.pathuserAuth, this.userAuth);
    }


    /**Public: Create user*/
    public userNew = async (req: Request, res: Response) => {
        //console.log("route: api/user/new")
        switch(req.method) {
            case('POST'):
                try {
                    const data = req.body;
                    //console.log("data:", data);
                    const userIP = req.socket.remoteAddress;
                    const validIP = z.string().ip(userIP);
                    const validEmail = z.string().email(data._EMAIL);
                    const validPasswordMin = z.string().min(8,data._PASSWORD);
                    const validPasswordMax = z.string().max(16,data._PASSWORD);
                    const validPasswordRegex = z.string().regex(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$,;%^*-]).{8,16}$/,data._PASSWORD);
                    //console.log('validIP', validIP);
                    //console.log('validEmail', validEmail);
                    if(!validIP) {
                        return res.status(400).send({ error: "user Network Error" });
                    } else if(!validEmail) {
                        return res.status(400).send({ error: "Invalid Email" });
                    } else if(!validPasswordMin) {
                        return res.status(400).send({ error: "Password Not Minimum Length" });
                    } else if(!validPasswordMax) {
                        return res.status(400).send({ error: "Password Bigger than Max Length" });
                    } else if(!validPasswordRegex) {
                        return res.status(400).send({ error: "Password Requires At Least One Special Character" });
                    } else if(validIP && validEmail && validPasswordMin && validPasswordMax && validPasswordRegex) {
                        const user = new user(data);
                        // set user ip address
                        user._IP_ADDRESS = userIP as string;
                        // Encrypt user password
                        const encryptedPassword = await bcrypt.hash(data._PASSWORD, 10);
                        // set encrypted password
                        user._PASSWORD = encryptedPassword;
                        // convert subscription to string value
                        user._SUBSCRIPTION = user._SUBSCRIPTION.toString().trim();
                        // convert courses to string value
                        user._COURSES = user._COURSES.toString().trim();
                        // user after updates
                        //console.log("user", user);
                        const createUser = await sql`INSERT INTO _USER(
                        _ID,
                        _CREATED_AT,
                        _UPDATED_AT,
                        _GUEST,
                        _ADMIN,
                        _FIRST_LOGIN,
                        _ACCESS_TOKEN,
                        _SUBSCRIPTION,
                        _IP_ADDRESS,
                        _PASSCODE,
                        _PASSCODE_CONFIRMED,
                        _EMAIL,
                        _EMAIL_CONFIRMED,
                        _EMAIL_PASSCODE,
                        _USERNAME,
                        _PASSWORD,
                        _FIRST_NAME,
                        _LAST_NAME,
                        _SOCIAL_HANDLE_GITHUB,
                        _SOCIAL_HANDLE_GOOGLE,
                        _SOCIAL_HANDLE_APPLE,
                        _SOCIAL_HANDLE_FACEBOOK,
                        _SOCIAL_HANDLE_TWITTER,
                        _SOCIAL_HANDLE_LINKEDIN,
                        _DEFAULT_LANGUAGE,
                        _DEFAULT_ROUTE,
                        _POINTS_TOTAL,
                        _COURSES,
                        ) VALUES (
                            ${user._ID},
                            ${user._CREATED_AT},
                            ${user._UPDATED_AT},
                            ${user._GUEST},
                            ${user._ADMIN},
                            ${user._FIRST_LOGIN},
                            ${user._ACCESS_TOKEN},
                            ${user._SUBSCRIPTION},
                            ${user._IP_ADDRESS},
                            ${user._PASSCODE},
                            ${user._PASSCODE_CONFIRMED},
                            ${user._EMAIL},
                            ${user._EMAIL_CONFIRMED},
                            ${user._EMAIL_PASSCODE},
                            ${user._USERNAME},
                            ${user._PASSWORD},
                            ${user._FIRST_NAME},
                            ${user._LAST_NAME},
                            ${user._SOCIAL_HANDLE_GITHUB},
                            ${user._SOCIAL_HANDLE_GOOGLE},
                            ${user._SOCIAL_HANDLE_APPLE},
                            ${user._SOCIAL_HANDLE_FACEBOOK},
                            ${user._SOCIAL_HANDLE_TWITTER},
                            ${user._SOCIAL_HANDLE_LINKEDIN},
                            ${user._DEFAULT_LANGUAGE},
                            ${user._DEFAULT_ROUTE},
                            ${user._POINTS_TOTAL},
                            ${user._COURSES},
                        )`;
                        const getuser = await sql`SELECT * FROM _user WHERE _ID = ${user._ID}`;
                        //console.log("user info:", getuser);
                        if(getUser !== undefined) {
                            return res.sendStatus(200);
                        } else {
                            return res.status(500).send({ error: "user Creation Error" });
                        }
                    } else {
                        return res.status(400).send({ error: "Invalid Data" });
                    }
                } catch {
                    return res.status(500).send({ error: "Database Connection Error" });
                }
                break
            default:
                return res.status(400).send({ error: `${req.method} Method Not Allowed` });
        }
    };
    /**Public: Login user*/
    public userLogin = async (req: Request, res: Response) => {
        switch(req.method) {
            case('POST'):
                try {
                    const data = req.body;
                    //console.log(data);

                    /**Retrieve user */
                    // Check Email in database
                    const getUser = await sql`SELECT * FROM _user WHERE _EMAIL = ${data._EMAIL}`;
                    const userResult = getuser[0];
                    //console.log("userResult:", userResult)

                    /**Validate user Data */
                    // Check user IP Address
                    const userIP = req.socket.remoteAddress;
                    const validIP = z.string().ip(userIP);
                    // Check Email & Password
                    const validEmail = data._EMAIL === userResult._email;
                    //console.log("validEmail", validEmail);
                    // Compare Encrypted Password
                    const validPasswordCompare = bcrypt.compareSync(
                        data._PASSWORD,
                        userResult._password
                    );
                    //console.log("validPasswordCompare:", validPasswordCompare);

                    /**Transform Data */
                    // uppercase userResult keys
                    Object.entries(userResult).forEach(([key, value]) => {
                        userResult[key.toUpperCase()] = userResult[key];
                        //console.log(`${key}: ${value}`);
                    });
                    // Create user Object
                    const userObj = new user(userResult);
                    //console.log("user:", userObj);

                    /**Update Data */
                    // Set user IP Address
                    userObj._IP_ADDRESS = userIP as string;
                    // Update user Login Time
                    userObj._UPDATED_AT = new Date();
                    // Save Updated Time to DB

                    await sql` UPDATE _user SET _UPDATED_AT = ${userObj._UPDATED_AT} WHERE _ID = ${userObj._ID}`;

                    /**Create JWT Token */
                    // Create Token
                    const getToken = jwt.sign({ _ID: userObj._ID, _EMAIL: userObj._EMAIL }, process.env.SECRET_TOKEN, {
                        algorithm: 'HS256',
                        allowInsecureKeySizes: true,
                        expiresIn: 86400, // 24 hours
                    });
                    // Save user Token
                    userObj._ACCESS_TOKEN = getToken;

                    //console.log("userObj:", userObj)

                    if(!validIP) {
                        return res.status(400).send({ error: "User Network Error" });
                    } else if(!validEmail || !validPasswordCompare) {
                        return res.status(400).send({ error: "Invalid user Information" });
                    } else if(validIP && validEmail && validPasswordCompare) {
                        return res.cookie("access_token", getToken, {
                            httpOnly: true,
                            secure: process.env.NODE_ENV === "production",
                        }).status(200).send({data: userObj});
                    } else {
                        return res.status(400).send({ error: "Invalid Data" });
                    }
                } catch {
                    return res.status(500).send({ error: "Database Connection Error" });
                }
                break
            default:
                return res.status(400).send({ error: `${req.method} Method Not Allowed` });
        }
    };

    /**Private: Admin Deletes user*/
    public userDelete = async (req: Request, res: Response) => {
        switch(req.method) {
            case('DELETE'):
                try {
                    /** <-- Validate User Info --> */
                    const data = req.body;
                    /**Retrieve user */
                    // Check Email in database
                    const getuser = await sql`SELECT * FROM _user WHERE _EMAIL = ${data._EMAIL}`;
                    const userResult = getuser[0];
                    //console.log("userResult:", userResult)

                    /**Validate user Data */
                    // Check user IP Address
                    const userIP = req.socket.remoteAddress;
                    const validIP = z.string().ip(userIP);
                    // Check Email & Password
                    //const validEmail = data._EMAIL === userResult._email;
                    //console.log("validEmail", validEmail);
                    // Compare Encrypted Password
                    const validPasswordCompare = bcrypt.compareSync(
                        data._PASSWORD,
                        userResult._password
                    );
                    //console.log("validPasswordCompare:", validPasswordCompare);

                    if(!validIP) {
                        return res.status(400).send({ error: "Invalid IP Address" })
                    }
                    if(!validPasswordCompare) {
                        return res.status(400).send({ error: "Invalid Password" })
                    }

                    /**Delete user */
                    try {
                        const id = req.params.id;
                        const results = await sql`DELETE * FROM _user WHERE _ID = ${id}`;
                        return res.status(200);
                    } catch {
                        return res.status(500).send({ error: "user Not Found" })
                    }
                } catch {
                    return res.status(500).send({ error: "Something went wrong"});
                }

                break
            default:
                return res.status(400).send({ error: `${req.method} Method Not Allowed` });
        };
    };
    /**Public: Auth user*/
    public userAuth = async (req: Request, res: Response) => {
        const defaultReturnObject = { authenticated: false, user: null };

        try {
            const { token } = req.body
            // const token = String(req?.headers?.authorization?.replace('Bearer ', ''));
            // console.log("token", token)
            //console.log("data", token);
            const decoded = jwt.verify(token, process.env.SECRET_TOKEN);
            //console.log("decoded", decoded)
            // /**Retrieve user */
            // Check Email in database
            const getuser = await sql`SELECT * FROM _user WHERE _ID = ${decoded._ID}`;
            const userResult = getuser[0];
            //console.log("user:", userResult);
            if (!userResult) {
            res.status(400).json(defaultReturnObject);
                return;
            }
            /**Transform Data */
            // uppercase userResult keys
            Object.entries(userResult).forEach(([key, value]) => {
                userResult[key.toUpperCase()] = userResult[key];
                //console.log(`${key}: ${value}`);
            });
            // Create user Object
            const userObj = new user(userResult);
            //console.log("user:", userObj);
            const result = { authenticated: true, user: userObj }
            res.status(200).json(result);
        }
        catch (err) {
            console.log('POST auth/me, Something Went Wrong', err);
            res.status(400).json(defaultReturnObject);
        }
    }

    /**Public: Delete user*/
    public userRemove = async (req: Request, res: Response) => {
        switch(req.method) {
            case('DELETE'):
                 try {
                    const data = req.body;
                    const userResult = await sql`SELECT * FROM _user WHERE _EMAIL = ${data._EMAIL}`;
                     /**Validate user Data */
                    // Check user IP Address
                    const userIP = req.socket.remoteAddress;
                    const validIP = z.string().ip(userIP);
                    // Check Email & Password
                    //const validEmail = data._EMAIL === userResult._email;
                    //console.log("validEmail", validEmail);
                    // Compare Encrypted Password
                    const validPasswordCompare = bcrypt.compareSync(
                        data._PASSWORD,
                        userResult._password
                    );
                    //console.log("validPasswordCompare:", validPasswordCompare);
                     if(!validIP) {
                        return res.status(400).send({ error: "Invalid IP Address" })
                    }
                    if(!validPasswordCompare) {
                        return res.status(400).send({ error: "Invalid Password" })
                    }
                    try {
                        const id = req.params.id;
                        const results = await sql`DELETE * FROM _user WHERE _ID = ${id}`;
                        return res.status(200);
                    } catch {
                        return res.status(500).send({ error: "user Not Found" })
                    }
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

export default user_Routes;
