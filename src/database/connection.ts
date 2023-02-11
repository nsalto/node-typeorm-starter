import { DataSource } from "typeorm";
import { DATABASE_HOST, DATABASE_PORT, DATABASE_NAME, DATABASE_USER, DATABASE_PASSWORD } from "../config/index";

const dbConnection = new DataSource({
    type: "postgres",
    host: DATABASE_HOST || "localhost",
    port: Number(DATABASE_PORT),
    username: DATABASE_USER,
    password: String(DATABASE_PASSWORD),
    database: DATABASE_NAME,
    schema: "private",
    synchronize: true,
    entities: ["./dist/entities/*.js"],
});

export default dbConnection;
