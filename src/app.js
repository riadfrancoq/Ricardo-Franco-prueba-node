import db from './db/db.js';
import express from "express";
// cambie esto con cuidado 
 // import productosRouter from './routes/productos.routes.js';
const app = express();

app.use(express.json());
 // app.use('/api/', productosRouter);
export default app;
