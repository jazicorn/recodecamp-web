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
import auth from '../../../middleware/auth';

dotenv.config();

class Guest_Routes {
    /**Public: Guest Delete Routes*/
    public pathGuestDelete = '/guest/delete/:id';
    /**Public: Create Guest*/
    public pathGuestNew = '/guest/new';
    /**Public: Validate Guest*/
    public pathGuestLogin = '/guest/login';
    /**Public: Validate Guest*/
    public pathGuestLogout = '/guest/logout';
    /**Public: Auth guest*/
    public pathGuestAuth = '/guest/verify';
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
        this.router.post(this.pathGuestNew, this.guestNew);
        this.router.post(this.pathGuestLogin, this.guestLogin);
        this.router.delete(this.pathGuestLogout, auth, this.guestLogout);
        this.router.delete(this.pathGuestDelete, auth, this.guestDelete);
        this.router.get(this.pathGuestAuth, auth, this.guestAuth);
    }


    /**Public: Create Guest*/
    public guestNew = async (req: Request, res: Response) => {
        //console.log("route: api/guest/new")
        switch(req.method) {
            case('POST'):
                try {
                    const data = req.body;
                    //console.log("data:", data);
                    const guestIP = req.socket.remoteAddress;
                    const validIP = z.string().ip(guestIP);
                    const validEmail = z.string().email(data._EMAIL);
                    const validPasswordMin = z.string().min(8,data._PASSWORD);
                    const validPasswordMax = z.string().max(16,data._PASSWORD);
                    const validPasswordRegex = z.string().regex(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$,;%^*-]).{8,16}$/,data._PASSWORD);
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
                        guest._IP_ADDRESS = guestIP as string;
                        // Encrypt user password
                        const encryptedPassword = await bcrypt.hash(data._PASSWORD, 10);
                        // set encrypted password
                        guest._PASSWORD = encryptedPassword;
                        // convert subscription to string value
                        guest._SUBSCRIPTION = guest._SUBSCRIPTION.toString().trim();
                        // convert courses to string value
                        guest._COURSES = guest._COURSES.toString().trim();
                        // guest after updates
                        //console.log("guest", guest);
                        const createGuest = await sql`INSERT INTO _GUEST(
                        _ID,
                        _CREATED_AT,
                        _UPDATED_AT,
                        _ACCESS_TOKEN,
                        _FIRST_LOGIN,
                        _ADMIN,
                        _SUBSCRIPTION,
                        _IP_ADDRESS,
                        _PASSCODE,
                        _PASSCODE_CONFIRMED,
                        _EMAIL,
                        _EMAIL_CONFIRMED,
                        _EMAIL_PASSCODE,
                        _PASSWORD,
                        _DEFAULT_LANGUAGE,
                        _DEFAULT_ROUTE,
                        _POINTS_TOTAL,
                        _POINTS_JAVASCRIPT,
                        _POINTS_JAVA,
                        _POINTS_PYTHON,
                        _COURSES
                        ) VALUES (
                            ${guest._ID},
                            ${guest._CREATED_AT},
                            ${guest._UPDATED_AT},
                            ${guest._ACCESS_TOKEN},
                            ${guest._FIRST_LOGIN},
                            ${guest._ADMIN},
                            ${guest._SUBSCRIPTION},
                            ${guest._IP_ADDRESS},
                            ${guest._PASSCODE},
                            ${guest._PASSCODE_CONFIRMED},
                            ${guest._EMAIL},
                            ${guest._EMAIL_CONFIRMED},
                            ${guest._EMAIL_PASSCODE},
                            ${guest._PASSWORD},
                            ${guest._DEFAULT_LANGUAGE},
                            ${guest._DEFAULT_ROUTE},
                            ${guest._POINTS_TOTAL},
                            ${guest._POINTS_JAVASCRIPT},
                            ${guest._POINTS_JAVA},
                            ${guest._POINTS_PYTHON},
                            ${guest._COURSES})`;
                        const getGuest = await sql`SELECT * FROM _GUEST WHERE _ID = ${guest._ID}`;
                        //console.log("guest info:", getGuest);
                        if(getGuest !== undefined) {
                            return res.sendStatus(200);
                        } else {
                            return res.status(500).send({ error: "Guest Creation Error" });
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
    /**Public: Login Guest*/
    public guestLogin = async (req: Request, res: Response) => {
        switch(req.method) {
            case('POST'):
                try {
                    const data = req.body;
                    //console.log(data);

                    /**Retrieve Guest */
                    // Check Email in database
                    const getGuest = await sql`SELECT * FROM _GUEST WHERE _EMAIL = ${data._EMAIL}`;
                    const guestResult = getGuest[0];
                    //console.log("guestResult:", guestResult)

                    /**Validate Guest Data */
                    // Check Guest IP Address
                    const guestIP = req.socket.remoteAddress;
                    const validIP = z.string().ip(guestIP);
                    // Check Email & Password
                    const validEmail = data._EMAIL === guestResult._email;
                    //console.log("validEmail", validEmail);
                    // Compare Encrypted Password
                    const validPasswordCompare = bcrypt.compareSync(
                        data._PASSWORD,
                        guestResult._password
                    );
                    //console.log("validPasswordCompare:", validPasswordCompare);

                    /**Transform Data */
                    // uppercase guestResult keys
                    Object.entries(guestResult).forEach(([key, value]) => {
                        guestResult[key.toUpperCase()] = guestResult[key];
                        //console.log(`${key}: ${value}`);
                    });
                    // Create Guest Object
                    const guestObj = new Guest(guestResult);
                    //console.log("guest:", guestObj);

                    /**Update Data */
                    // Set Guest IP Address
                    guestObj._IP_ADDRESS = guestIP as string;
                    // Update Guest Login Time
                    guestObj._UPDATED_AT = new Date();
                    // Save Updated Time to DB

                    await sql` UPDATE _GUEST SET _UPDATED_AT = ${guestObj._UPDATED_AT} WHERE _ID = ${guestObj._ID}`;

                    /**Create JWT Token */
                    // Create Token
                    const getToken = jwt.sign({ _ID: guestObj._ID, _EMAIL: guestObj._EMAIL }, process.env.SECRET_TOKEN, {
                        algorithm: 'HS256',
                        allowInsecureKeySizes: true,
                        expiresIn: 86400, // 24 hours
                    });
                    // Save Guest Token
                    guestObj._ACCESS_TOKEN = getToken;

                    //console.log("guestObj:", guestObj)

                    if(!validIP) {
                        return res.status(400).send({ error: "User Network Error" });
                    } else if(!validEmail || !validPasswordCompare) {
                        return res.status(400).send({ error: "Invalid Guest Information" });
                    } else if(validIP && validEmail && validPasswordCompare) {
                        return res.cookie("_ACCESS_TOKEN", getToken, {
                            httpOnly: true,
                            secure: true,
                            sameSite: 'strict',
                        }).status(200).send({data: guestObj});
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

    /**Private: Logout Guest*/
    public guestLogout = async (req: Request, res: Response) => {
        switch(req.method) {
            case('DELETE'):
                return res.clearCookie("_ACCESS_TOKEN").sendStatus(200);
                break
            default:
                return res.status(400).send({ error: `${req.method} Method Not Allowed` });
        }
    }

    /**Private: Deletes Guest*/
    public guestDelete = async (req: Request, res: Response) => {
        switch(req.method) {
            case('DELETE'):
                try {
                    /**token */
                    const token = req.cookies._ACCESS_TOKEN;
                    //console.log("token:", token)
                    /**jwt token */
                    const decoded = jwt.verify(token, process.env.SECRET_TOKEN);
                    //console.log("decoded:", decoded)
                    /** <-- Validate User Info --> */
                    const data = req.body;

                    /**Retrieve Guest */
                    // Check Email in database
                    const getGuest = await sql`SELECT * FROM _GUEST WHERE _EMAIL = ${data._EMAIL}`;
                    const guestResult = getGuest[0];
                    //console.log("guestResult:", guestResult)
                    /**Validate user === token */
                    if(decoded._EMAIL !==  guestResult._email) {
                        return res.status(403).send("Valid token is required for account deletion");
                    }
                    /**Validate Guest Data */
                    // Check Guest IP Address
                    const guestIP = req.socket.remoteAddress;
                    const validIP = z.string().ip(guestIP);
                    // Check Email & Password
                    //const validEmail = data._EMAIL === guestResult._email;
                    //console.log("validEmail", validEmail);
                    // Compare Encrypted Password
                    const validPasswordCompare = bcrypt.compareSync(
                        data._PASSWORD,
                        guestResult._password
                    );
                    //console.log("validPasswordCompare:", validPasswordCompare);

                    /**Return Error if Invalid Return 400*/
                    if(!validIP) {
                        return res.status(400).send({ error: "Invalid IP Address" })
                    }
                    if(!validPasswordCompare) {
                        return res.status(400).send({ error: "Invalid Password" })
                    }

                    /**Delete Guest */
                    const id = req.params.id;
                    //console.log(id)
                    const result = await sql`DELETE FROM _GUEST WHERE _id = ${id}`;
                    //console.log(result);
                    return res.clearCookie("_ACCESS_TOKEN").sendStatus(200);
                } catch {
                    return res.status(500).send({ error: "Guest Not Found"});
                }
                break
            default:
                return res.status(400).send({ error: `${req.method} Method Not Allowed` });
        };
    };
    /**Public: Auth Guest*/
    public guestAuth = async (req: Request, res: Response) => {
        switch(req.method) {
            case('GET'):
                try {
                    /**token */
                    const token = req.cookies._ACCESS_TOKEN;
                    //console.log("token:", token)
                    /**jwt token */
                    const decoded = jwt.verify(token, process.env.SECRET_TOKEN);
                    //console.log("decoded:", decoded)
                    // /**Retrieve Guest */
                    // Check Email in database
                    const getGuest = await sql`SELECT * FROM _GUEST WHERE _ID = ${decoded._ID}`;
                    const guestResult = getGuest[0];
                    //console.log("guest:", guestResult);
                    if (!guestResult) {
                        const result = { authenticated: false, data: {} }
                        return res.status(400).json(result);
                    }
                    /**Transform Data */
                    // uppercase guestResult keys
                    Object.entries(guestResult).forEach(([key, value]) => {
                        guestResult[key.toUpperCase()] = guestResult[key];
                        //console.log(`${key}: ${value}`);
                    });
                    // Create Guest Object
                    const guestObj = new Guest(guestResult);
                    //console.log("guest:", guestObj);
                    const result = { authenticated: true, data: guestObj }
                    res.status(200).json(result);
                }
                catch (err) {
                    return res.status(500).send({ error: "Guest Not Found"});
                }
                break
            default:
                return res.status(400).send({ error: `${req.method} Method Not Allowed` });
        }
    }
}

export default Guest_Routes;
