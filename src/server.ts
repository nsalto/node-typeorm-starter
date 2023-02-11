import app from "./index";

import dbConnection from "./database/connection";
import { API_PORT } from "./config/index";
import logger from "./utils/logger";
import { seedBusinesses } from "./database/seeds/seeds";

dbConnection
    .initialize()
    .then(() => {
        logger.info("[DB] Database initialized!");
        app.listen(API_PORT, () => {
            seedBusinesses();
            logger.info(`[SERVER] running on http://localhost:${API_PORT ?? 5001}`);
        });
    })
    .catch((error) => {
        logger.error("[SERVER] Could not start the app or connect te db ");
        logger.error(error);
    });
