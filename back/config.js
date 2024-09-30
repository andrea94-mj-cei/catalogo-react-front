import dotenv from 'dotenv';
import path from 'path';

//Creacion de variable __dirname para usar carpeta public con VERCEL
//nos dice en que carpeta de nuestro ordenador se está ejecutando mi servidor express
export const __dirname = path.resolve();

dotenv.config();

export const PORT = process.env.PORT || 5000;
export const DOMAIN = process.env.DOMAIN || "http://localhost";

export const FULL_DOMAIN = `${DOMAIN}:${PORT}`;

export const JWT_SECRET = process.env.JWT_SECRET || 'UTILIZA_UNA_JWT_sEgUrA';