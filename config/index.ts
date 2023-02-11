import dotenv from 'dotenv';
dotenv.config();

const env = process.env;

// app
export const NODE_ENV = env.NODE_ENV;
export const API_URL = env.API_URL;
export const API_PORT = env.API_PORT;
export const JWT_SECRET = env.JWT_SECRET;

// database
export const DATABASE_HOST = env.DATABASE_HOST;
export const DATABASE_PORT = env.DATABASE_PORT;
export const DATABASE_NAME = env.DATABASE_NAME;
export const DATABASE_USER = env.DATABASE_USER;
export const DATABASE_PASSWORD = env.DATABASE_PASSWORD;


