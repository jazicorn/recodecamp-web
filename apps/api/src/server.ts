'use strict';
/* eslint-disable  @typescript-eslint/no-explicit-any */
import express, { Application } from 'express';
import session from 'express-session';
import bodyParser from 'body-parser';
import cors from 'cors';
import * as dotenv from 'dotenv';
dotenv.config();

class App {
    public app: Application;
    public port: number;
    private corsOptions;

    constructor(authControllers, controllers) {
        this.app = express();
        this.port = parseInt(process.env.PORT as string) || 8000;
        this.initMiddlewares();
        this.initAuthControllers(authControllers);
        this.initControllers(controllers);
        this.corsOptions = process.env.CORS_URLS;
    }

    private initMiddlewares() {
        this.app.use(bodyParser.urlencoded({
            extended: true
        }));
        this.app.use(bodyParser.json());
        this.app.use(cors(this.corsOptions));
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
