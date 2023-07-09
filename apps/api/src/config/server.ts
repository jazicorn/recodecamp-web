'use strict';
/* eslint-disable  @typescript-eslint/no-explicit-any */
import express, { Application } from 'express';
import bodyParser from 'body-parser';
//import cors from 'cors';

class App {
    public app: Application;
    public port: number;
    //private corsOptions;

    constructor(controllers, port: number) {
        this.app = express();
        this.port = port;
        this.initMiddlewares();
        //this.app.options('localhost', cors());
        this.initControllers(controllers);
    }

    private initMiddlewares() {
        this.app.use(bodyParser.json());
        //this.app.use(cors());
    }

    private initControllers(controllers) {
        controllers.forEach((controller) => {
            this.app.use('/api', controller.router);
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
