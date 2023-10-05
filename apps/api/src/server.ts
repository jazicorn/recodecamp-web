'use strict';
/* eslint-disable  @typescript-eslint/no-explicit-any */
import express, { Application } from 'express';
import cookieParser from 'cookie-parser';
import session from 'express-session';
import bodyParser from 'body-parser';
import cors from 'cors';
import * as dotenv from 'dotenv';
dotenv.config();

// function transformCorsOrg() {
//     const result = [];
//     const corsOrgEnv = process.env.CORS_URLS || '';
//     const corsOrg = corsOrgEnv.split(',') ;
//     console.log(corsOrg);
//     return corsOrg
// }

class App {
    public app: Application;
    public port: number;
    private corsOptions;

    constructor(authControllers, controllers) {
        // #TODO | figure out how to turn env var string to an array of strings
        this.corsOptions = '';
        this.app = express();
        this.port = parseInt(process.env.PORT as string) || 8000;
        this.initMiddlewares();
        this.initAuthControllers(authControllers);
        this.initControllers(controllers);
    }

    private initMiddlewares() {
        this.app.use(bodyParser.urlencoded({
            extended: true
        }));
        this.app.use(bodyParser.json());
        this.app.use(cookieParser());
        this.app.options("*", (req, res) => {
            res.setHeader("Access-Control-Allow-Origin", "*");
            res.setHeader("Access-Control-Allow-Methods", "GET, HEAD, PUT, PATCH, POST, DELETE, OPTIONS");
            res.setHeader("Access-Control-Allow-Headers", "Content-Type");
            res.sendStatus(204);
        });
        this.app.use(cors({
            origin: [
                "https://vercel.com/jazicorn/recodecamp-web",
                "https://recodecamp-web.vercel.app",
                "https://recodecamp-web.vercel.app/#/",
                "https://www.recodecamp.com"
            ],
            "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
            "preflightContinue": false,
            "optionsSuccessStatus": 204
        }));
        // this.app.use( "/", (req, res, next) => {
        //     res.setHeader('Access-Control-Allow-Origin', '*');
        //     res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
        //     res.setHeader('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
        //     next();
        // });
        // this.app.set('trust proxy', 1) // trust first proxy
        // this.app.use(session({
        //     secret: process.env.SECRET_TOKEN,
        //     saveUninitialized:true,
        //     cookie: { sameSite: 'strict', secure: false, maxAge: 1000 * 60 * 60 * 24 },
        //     resave: false
        // }));
    }

    private initAuthControllers(controllers) {
        controllers.forEach((controller) => {
            this.app.use('/auth', controller.router);
        });
    }

    private initControllers(controllers) {
        controllers.forEach((controller) => {
            this.app.use('/', (req, res, next) => {
                    res.setHeader('Access-Control-Allow-Origin', '*');
                    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
                    res.setHeader('Access-Control-Allow-Methods', 'GET, PUT, PATCH, POST, DELETE');
                    next();
                },
                controller.router
            );
        });
    }

    public listen() {
        this.app.listen(this.port, "0.0.0.0", (): void => {
            console.log(
                `Server Running here 👉 http://localhost:${this.port}`
            );
        });
    }
}

export default App;
