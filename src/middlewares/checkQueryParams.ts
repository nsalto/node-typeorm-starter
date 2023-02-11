import express from "express";
import { CustomError } from "./error";

const checkQueryParams =
    (required: any, optional: any) => (req: express.Request, res: express.Response, next: express.NextFunction) => {
        let obj = Object.getOwnPropertyNames(req.query);

        obj = obj.filter((f: any) => f !== "_from" && f !== "_limit");

        if (required.length > 0) {
            required.forEach((r: any) => {
                if (!obj.includes(r)) {
                    throw new CustomError(`Field "${r}" is missing`, 400);
                }
            });
        }

        const opt = optional.concat(required);

        obj.forEach((o: any) => {
            if (!opt.includes(o)) {
                throw new CustomError(`Field "${o}" is not valid`, 400);
            }
        });

        next();
    };

export default checkQueryParams;
