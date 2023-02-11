import { Request, Response, NextFunction } from "express";

export class CustomError extends Error {
    public status: number;

    constructor(message: string, status: number) {
        super(message);
        this.status = status;
    }
}

function handleError(err: TypeError | CustomError, req: Request, res: Response, next: NextFunction) {
    if (err instanceof CustomError) {
        res.status(err.status).json({ message: err.message });
    } else {
        console.error(err);
        res.status(500).json({ message: 'Internal Server Error' });
    }
}

export default handleError;
