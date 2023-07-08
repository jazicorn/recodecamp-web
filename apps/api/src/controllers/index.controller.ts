import { Request, Response } from 'express';

module.exports.index = (req: Request, res: Response) => {
    res.json('Hello World!');
};
