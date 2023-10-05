'use strict';
/* eslint-disable  @typescript-eslint/no-explicit-any */
import express, { Application } from 'express';
import cookieParser from 'cookie-parser';
import session from 'express-session';
import bodyParser from 'body-parser';
import cors from 'cors';
import * as dotenv from 'dotenv';
dotenv.config();


const corsOpt = process.env.CORS_URLS;

class App {
    public app: Application;
    public port: number;
    private corsOptions;

    constructor(authControllers, controllers) {
        this.corsOptions = corsOpt.split(',');
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
            res.setHeader("Access-Control-Allow-Methods", "PUT, PATCH, POST, GET, DELETE, OPTIONS");
            res.setHeader("Access-Control-Allow-Headers", "Content-Type");
            res.sendStatus(204);
        });
        this.app.use(cors({
            origin: this.corsOptions
        }));
        // this.app.use( "/", (req, res, next) => {
        //     res.setHeader('access-control-allow-origin', '*');
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
            this.app.use('/', controller.router);
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
