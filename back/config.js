import dotenv from 'dotenv';


//Creacion de variable __dirname para usar carpeta public con VERCEL
import path from 'path';
export const __dirname = path.resolve();


dotenv.config();

export const PORT = process.env.PORT || 5000;
export const DOMAIN = process.envDOMAIN || "http://localhost";

export const JWT_SECRET = process.env.JWT_SECRET || 'UTILIZA_UNA_JWT_sEgUrA';