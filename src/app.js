import express, {json} from "express";
import { check } from "express-validator";

import productosRouter from './routes/productos.routes.js';
const app = express();

app.use(express.json());
app.use('/api/', productosRouter);
export default app;