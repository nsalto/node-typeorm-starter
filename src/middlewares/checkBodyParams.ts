import express from "express";

const checkBodyParams =
    (required: string[], optional: string[]) =>
    (req: express.Request, res: express.Response, next: express.NextFunction) => {
        const obj = Object.getOwnPropertyNames(req.body);

        if (required.length > 0) {
            required.forEach((value) => {
                if (!obj.includes(value)) {
                    next(new Error(`Field "${value}" is missing`));
                }
            });
        }

        const opt = optional.concat(required);

        obj.forEach((o: any) => {
            if (!opt.includes(o)) {
                next(new Error(`Field "${o}" is not valid`));
            }
        });

        Object.keys(req.body).forEach((key) => {
            if (req.body[key] === "") {
                next(new Error(`Field (${key}) is empty`));
            }
        });

        next();
    };

export default checkBodyParams;
