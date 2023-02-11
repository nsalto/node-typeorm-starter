import express, { NextFunction, Request, Response } from "express";
import morgan from "morgan";
import cors from "cors";
import routes from "./routes/index";
import handleError from "./middlewares/error";

const app = express();

// Middlewares
app.use(cors());

app.use(
    morgan(":method :status :url :res[content-length] - :response-time ms", {
        skip(req: express.Request) {
            return req.url === "/liveness";
        },
    })
);

app.use(
    express.urlencoded({
        limit: "5mb",
        parameterLimit: 100000,
        extended: false,
    })
);

app.use(
    express.json({
        limit: "5mb",
    })
);

app.use("/api", routes);

app.use(handleError);

export default app;
