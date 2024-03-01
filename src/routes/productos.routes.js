
import { Router } from "express";
import { addProducto, addProductoToTienda, getProductosFromTiendas } from "../controllers/productos.controller.js";
import { check } from "express-validator";
import { checkBarcode, checkName, checkProducto, checkTienda } from "../middlewares/db.check.js";
import validateDocuments from '../middlewares/validate.documents.js';
const router = Router();

router.post('/productos',[
    check('nombre').notEmpty().withMessage('El nombre es requerido').bail().isString().withMessage('Numeros no se aceptan como nombre').bail().isLength({max: 60}).withMessage('El nombre no puede exceder los 60 caracteres').bail().custom(checkName),
    check('barcode').notEmpty().withMessage('El barcode es requerido').bail().custom(checkBarcode),
    check('presentacion').notEmpty().withMessage('La presentacion es requerida').bail().isString().withMessage("la presentacion tiene que ser un texto").bail().isLength({max: 25}),
    validateDocuments
], addProducto);

router.post('/tiendas/productos',[
    check('idProducto').notEmpty().withMessage('El producto es requerido').bail().custom(checkProducto),
    check('idTienda').notEmpty().withMessage('La tienda es requerida').bail().custom(checkTienda),
    check('valor').notEmpty().withMessage('El valor es requerido').bail().isInt().withMessage('El valor tiene que ser un numero'),
    check('compraMaxima').notEmpty().withMessage('compra maxima es requerida').bail().isInt().withMessage('La compra maxima debe ser un numero').bail().isLength({min:1, max: 2}).withMessage("La compra maxima no puede ser mayor a 99").bail(),
    validateDocuments
], addProductoToTienda);

router.get('/tiendas/productos/:id',[
    check('id').custom(checkTienda),
    validateDocuments
], getProductosFromTiendas);

export default router;
