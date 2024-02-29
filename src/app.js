import express, {json} from "express";
// cambie esto con cuidado 
import productosRouter from './routes/productos.routes.js';
const app = express();

app.use(json());
app.use('/api/', productosRouter);
export default app;