import { Request, Response } from 'express';
import Router from 'express-promise-router';
import { _ROUTES_JAVASCRIPT } from '../constants/categories/javascript.routes';
import { _ROUTES_JAVA } from '../constants/categories/java.routes';
import { _ROUTES_PYTHON } from '../constants/categories/python.routes';
import { _LANGUAGES } from '../constants/languages';

class Index {
    public path = '/';
    public pathLanguages = '/languages';

    public pathCategories = '/categories/:id';
    public router = Router();
    constructor() {
        this.initializeRoutes();
    }

    public initializeRoutes() {
        this.router.get(this.path, this.helloWorld);
        this.router.get(this.pathLanguages, this.languages);
        this.router.get(this.pathCategories, this.categories);
    }

    public helloWorld = async (req: Request, res: Response) => {
        switch(req.method) {
            case('GET'):
                 try {
                    const data = await { data: "Hello World!" };
                    return res.status(200).send(data);
                } catch {
                    return res.status(500).send({ error: "Something went wrong"});
                }
                break
            default:
                return res.status(400).send({ error: `${req.method} Method Not Allowed` });
        };
    };

    public languages = async (req: Request, res: Response) => {
        switch(req.method) {
            case('GET'):
                try {
                    const languages = _LANGUAGES
                    return await res.status(200).send({ data: languages });
                } catch {
                    res.status(500).send({ error: "Something went wrong" });
                }
                break
            default:
                res.status(400).send({ error: `${req.method} Method Not Allowed` });
        }
    };

    public categories = async (req: Request, res: Response) => {
        switch(req.method) {
            case('GET'):
                try {
                    switch(req.params.id.toLowerCase()) {
                        case('javascript'):
                            return res.status(200).send({ data: _ROUTES_JAVASCRIPT });
                        case('java'):
                            return res.status(200).send({ data: _ROUTES_JAVA });
                        case('python'):
                            return res.status(200).send({ data: _ROUTES_PYTHON });
                        default:
                            return res.status(200).send({ data: _ROUTES_JAVASCRIPT });
                    }
                } catch {
                    res.status(500).send({ error: "route not found" });
                }
                break
            default:
                res.status(400).send({ error: `${req.method} Method Not Allowed` });
        }
    };
}

export default Index;
