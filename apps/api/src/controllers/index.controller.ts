import { Request, Response } from 'express';
import Router from 'express-promise-router';

class Index {
    public path = '/';
    public router = Router();
    constructor() {
        this.initializeRoutes();
    }

    public initializeRoutes() {
        this.router.get(this.path, this.helloWorld);
    }

    public helloWorld = async (req: Request, res: Response) => {
        let err = 'Error';
        if (req.method === 'GET') {
            try {
                const data = { data: "Hello World!" };
                res.status(200).json(data);
            } catch {
                err =  "Something went wrong";
                res.status(500).json(err);
            }
        } else {
            err = `${req.method} Method Not Allowed`;
            res.status(400).send(err);
        }

    };
}

export default Index;
