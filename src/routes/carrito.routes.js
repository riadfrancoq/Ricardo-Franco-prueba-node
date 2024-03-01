import { Router } from "express";
import { check } from "express-validator";
import { addCarrito, getProductosCarrito } from "../controllers/carrito.controller.js";
import validateDocuments from '../middlewares/validate.documents.js';
import {checkTienda, checkProducto, checkUser, checkTiendasProductos } from "../middlewares/db.check.js";

const router = Router();


// POST carrito
router.post('/carrito',[
    check('cantidad').isInt().withMessage('La cantidad tiene que ser un numero').bail().isLength({min: 1, max: 9}).withMessage('El numero no puede ser mayor a 999.999'),
    check('idTienda').toInt().isInt().withMessage('El id de la tienda tiene que ser un entero').bail().custom(checkTienda).withMessage('Tienda Inexistente').bail(),
    check('idProducto').toInt().isInt().withMessage('El id de la tienda tiene que ser un entero').bail().custom(checkProducto).withMessage('Producto Inexistente').bail().custom(checkTiendasProductos).withMessage("El producto no existe en la tienda").bail(),
    check('idUser').custom(checkUser),


    validateDocuments
], addCarrito);

router.get('/carrito',[
    check('idUser').notEmpty().withMessage("El id del usuario es requerido").bail().toInt().isInt().withMessage("El id del usuario debe ser un entero ").bail().custom(checkUser).withMessage("Usuario inexistente en la base de datos").bail(),
    check('idTienda').toInt().isInt().withMessage('El id de la tienda tiene que ser un entero').bail().custom(checkTienda).withMessage('Tienda Inexistente').bail(),
    validateDocuments
],getProductosCarrito);

export default router;