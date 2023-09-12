import { Request, Response } from 'express';
import Router from 'express-promise-router';
import { Guest } from '../../classes/guest';
import { _Guest } from  '../../types/types.guest';
import sql from '../../config/db';
import cors from 'cors';
import { z } from "zod";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import * as dotenv from 'dotenv';

dotenv.config();

class Guest_Routes {
    /**Public: Get Guest by ID*/
    public pathGuest = '/guest/:id';
    /**Public: Validate Guest*/
    public pathGuestLogin = '/guest/login';
    /**Public: Guest Registers Passcode*/
    public pathGuestRegister = '/guest/register';
    /**Public: Update Guest*/
    public pathGuestUpdate = '/guest/update/:id';
    /**Private: Admin Deletes Guest*/
    public pathGuestDelete = '/guest/delete/:id';
    /**Private: Admin Gets All Guests*/
    public pathGuestAll = '/guest/all';
    /**Public: Create Guest*/
    public pathGuestNew = '/guest/new';
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
        this.router.get(this.pathGuest, this.guestId);
        this.router.get(this.pathGuestLogin, this.guestLogin);
        this.router.get(this.pathGuestRegister, this.guestRegister);
        this.router.get(this.pathGuestAll, this.corsOptions, this.guestAll);
        this.router.post(this.pathGuestNew, this.guestNew);
        this.router.put(this.pathGuestUpdate, this.guestUpdate);
        this.router.delete(this.pathGuestDelete, this.corsOptions, this.guestDelete);
    }

    /**Public: Get Guest by ID*/
    public guestId = async (req: Request, res: Response) => {
        switch(req.method) {
            case('GET'):
                try {
                    const id = req.params.id;
                    const data = await sql`SELECT * FROM _GUEST WHERE _GUEST_ID = ${id}`;
                    return res.status(200).send(data);
                } catch {
                    return res.status(500).send({ error: "Something went wrong"});
                }
                break
            default:
                return res.status(400).send({ error: `${req.method} Method Not Allowed` });
        };
    };
    /**Public: Update Guest by ID*/
    public guestUpdate = async (req: Request, res: Response) => {
        switch(req.method) {
            case('PUT'):
                 try {
                    const id = req.params.id;
                    const data = await sql`SELECT * FROM _GUEST WHERE _GUEST_ID = ${id}`;
                    return res.status(200).send(data);
                } catch {
                    return res.status(500).send({ error: "Something went wrong"});
                }
                break
            default:
                return res.status(400).send({ error: `${req.method} Method Not Allowed` });
        };
    };
    /**Public: Guest Registers Passcode*/
    public guestRegister = async (req: Request, res: Response) => {
        switch(req.method) {
            case('POST'):
                 try {
                    const { email, passcode } = req.body;
                    const data = await sql`SELECT * FROM _GUEST WHERE _USER_PASSCODE = ${passcode} AND _GUEST_EMAIL = ${email}`;
                    return res.status(200).send(data);
                } catch {
                    return res.status(500).send({ error: "Something went wrong"});
                }
                break
            default:
                return res.status(400).send({ error: `${req.method} Method Not Allowed` });
        };
    };
    /**Private: Admin Gets All Guests*/
    public guestAll = async (req: Request, res: Response) => {
        switch(req.method) {
            case('GET'):
                 try {
                    const id = req.params.id;
                    const data = await sql`SELECT * FROM _GUEST`;
                    return res.status(200).send(data);
                } catch {
                    return res.status(500).send({ error: "Something went wrong"});
                }
                break
            default:
                return res.status(400).send({ error: `${req.method} Method Not Allowed` });
        };
    };
    /**Public: Create Guest*/
    public guestNew = async (req: Request, res: Response) => {
        //console.log("route: api/guest/new")
        switch(req.method) {
            case('POST'):
                try {
                    const data = req.body;
                    const userIP = req.socket.remoteAddress;
                    const validIP = z.string().ip(userIP);
                    const validEmail = z.string().email(data._GUEST_EMAIL);
                    const validPasswordMin = z.string().min(8,data._GUEST_PASSWORD);
                    const validPasswordMax = z.string().max(16,data._GUEST_PASSWORD);
                    const validPasswordRegex = z.string().regex(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$,;%^*-]).{8,16}$/,data._GUEST_PASSWORD);
                    //console.log('validIP', validIP);
                    //console.log('validEmail', validEmail);
                    if(!validIP) {
                        return res.status(400).send({ error: "Guest Network Error" });
                    } else if(!validEmail) {
                        return res.status(400).send({ error: "Invalid Email" });
                    } else if(!validPasswordMin) {
                        return res.status(400).send({ error: "Password Not Minimum Length" });
                    } else if(!validPasswordMax) {
                        return res.status(400).send({ error: "Password Bigger than Max Length" });
                    } else if(!validPasswordRegex) {
                        return res.status(400).send({ error: "Password Requires At Least One Special Character" });
                    } else if(validIP && validEmail && validPasswordMin && validPasswordMax && validPasswordRegex) {
                        const guest = new Guest(data);
                        // set user ip address
                        guest.set_GUEST_IP_ADDRESS = userIP as string;
                        // Encrypt user password
                        const encryptedPassword = await bcrypt.hash(data._GUEST_PASSWORD, 10);
                        // set encrypted password
                        guest.set_GUEST_PASSWORD = encryptedPassword;
                        // convert courses to string value
                        guest.setDatabaseValues();
                        // guest after updates
                        //console.log("guest", guest);
                    } else {
                        return res.status(400).send({ error: "Invalid Data" });
                    }
                    const createGuest = await sql`INSERT INTO _GUEST(
                        _GUEST_ID,
                        _GUEST_CREATED_AT,
                        _GUEST_UPDATED_AT,
                        _GUEST_FIRST_LOGIN,
                        _GUEST_ADMIN,
                        _GUEST_SUBSCRIPTION,
                        _GUEST_IP_ADDRESS,
                        _GUEST_PASSCODE,
                        _GUEST_PASSCODE_CONFIRMED,
                        _GUEST_EMAIL,
                        _GUEST_EMAIL_CONFIRMED,
                        _GUEST_EMAIL_PASSCODE,
                        _GUEST_PASSWORD,
                        _GUEST_DEFAULT_LANGUAGE,
                        _GUEST_DEFAULT_ROUTE,
                        _GUEST_POINTS_TOTAL,
                        _GUEST_POINTS_JAVASCRIPT,
                        _GUEST_POINTS_JAVA,
                        _GUEST_POINTS_PYTHON,
                        _GUEST_COURSES)
                        VALUES (
                            ${guest._GUEST_ID},
                            ${guest._GUEST_CREATED_AT},
                            ${guest._GUEST_UPDATED_AT},
                            ${guest._GUEST_FIRST_LOGIN},
                            ${guest._GUEST_ADMIN},
                            ${guest._GUEST_SUBSCRIPTION},
                            ${guest._GUEST_IP_ADDRESS},
                            ${guest._GUEST_PASSCODE},
                            ${guest._GUEST_PASSCODE_CONFIRMED},
                            ${guest._GUEST_EMAIL},
                            ${guest._GUEST_EMAIL_CONFIRMED},
                            ${guest._GUEST_EMAIL_PASSCODE},
                            ${guest._GUEST_PASSWORD},
                            ${guest._GUEST_DEFAULT_LANGUAGE},
                            ${guest._GUEST_DEFAULT_ROUTE},
                            ${guest._GUEST_POINTS_TOTAL},
                            ${guest._GUEST_POINTS_JAVASCRIPT},
                            ${guest._GUEST_POINTS_JAVA},
                            ${guest._GUEST_POINTS_PYTHON},
                            ${guest._GUEST_COURSES})`;
                    const getGuest = await sql`SELECT * FROM _GUEST WHERE _GUEST_ID = ${guest._GUEST_ID}`;
                    //console.log("guest info:", getGuest);
                    if(getGuest !== undefined) {
                        return res.sendStatus(200);
                    } else {
                        return res.status(500).send({ error: "Guest Creation Error" });
                    }
                } catch {
                    return res.status(500).send({ error: "Database Connection Error" });
                }
                break
            default:
                return res.status(400).send({ error: `${req.method} Method Not Allowed` });
        }
    };
    /**Public: Login Guest*/
    public guestLogin = async (req: Request, res: Response) => {
        switch(req.method) {
            case('POST'):
                try {
                    const data = req.body;
                    // Check Email in database
                    const getGuest = await sql`SELECT * FROM _GUEST WHERE _GUEST_EMAIL = ${data._GUEST_EMAIL}`;
                    // Check Guest IP Address
                    const guestIP = req.socket.remoteAddress;
                    const validIP = z.string().ip(getGuestIP);
                    // Check Email & Password
                    const validEmail = data._GUEST_EMAIL.trim() === getGuest._GUEST_EMAIL;
                    const validPassword = data._GUEST_PASSWORD.trim() === getGuest._GUEST_PASSWORD;
                    // Compare Encrypted Password
                    const validCompare = bcrypt.compareSync(
                        data._GUEST_PASSWORD,
                        getGuest._GUEST_PASSWORD
                    );
                    // Create Guest Object
                    const guest = new Guest(data);
                    // Set Guest IP Address
                    guest.set_GUEST_IP_ADDRESS = guestIP as string;
                    // Create Token
                    const getToken = jwt.sign({ _GUEST_ID: guest._GUEST_ID, _GUEST_EMAIL: guest._GUEST_EMAIL }, process.env.SECRET_TOKEN, {
                        algorithm: 'HS256',
                        allowInsecureKeySizes: true,
                        expiresIn: 86400, // 24 hours
                    });
                    // Save Guest Token
                    guest._GUEST_ACCESS_TOKEN = getToken;
                    // Save Token To Session
                    req.session.token = getToken;
                    if(!validIP) {
                        return res.status(400).send({ error: "User Network Error" });
                    } else if(!validEmail || !validPassword) {
                        return res.status(400).send({ error: "Invalid Guest Information" });
                    } else if(validIP && validEmail && validCompare) {
                        return res.sendStatus(200).send({data: guest});
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
    /**Private: Admin Deletes Guest*/
    public guestDelete = async (req: Request, res: Response) => {
        switch(req.method) {
            case('DELETE'):
                 try {
                    const id = req.params.id;
                    const results = await sql`DELETE * FROM _GUEST WHERE _GUEST_ID = ${id}`;
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

export default Guest_Routes;
