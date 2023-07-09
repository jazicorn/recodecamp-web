'use strict';
/* eslint-disable  @typescript-eslint/no-explicit-any */
import express, { Application } from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

class App {
    public app: Application;
    public port: number;
    private corsOptions;

    constructor(controllers) {
        this.app = express();
        this.port = parseInt(process.env.PORT as string) || 8000;
        this.initMiddlewares();
        this.initControllers(controllers);
    }

    private initMiddlewares() {
        this.app.use(bodyParser.json());
        this.app.use(cors({ origin: true }));
        this.app.use(express.raw({ type: 'application/vnd.custom-type' }));
        this.app.use(express.text({ type: 'text/html' }));

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
