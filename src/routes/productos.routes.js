import { Router } from "express";
import { addProducto, addProductoToTienda } from "../controllers/productos.controller.js";
import { check } from "express-validator";
import { checkBarcode, checkName, checkProducto, checkTienda } from "../middlewares/db.check.js";
import validateDocuments from '../middlewares/validate.documents.js';
const router = Router();

router.post('/productos',[
    check('nombre').notEmpty().withMessage('El nombre es requerido').bail().isString().withMessage('Numeros no se aceptan como nombre').bail().isLength({max: 60}).withMessage('El nombre no puede exceder los 60 caracteres').bail().custom(checkName),
    check('barcode').notEmpty().withMessage('El barcode es requerido').bail().custom(checkBarcode),
    validateDocuments
], addProducto);

router.post('/tiendas/productos',[
    check('id_producto').notEmpty().withMessage('El producto es requerido').bail().custom(checkProducto),
    check('id_tienda').notEmpty().withMessage('La tienda es requerida').bail().custom(checkTienda),
    check('valor').notEmpty().withMessage('El valor es requerido').bail().isInt().withMessage('El valor tiene que ser un numero'),
    check('compra_maxima').notEmpty().withMessage('compra maxima es requerida').bail().isInt().withMessage('La compra maxima debe ser un numero'),
    validateDocuments
], addProductoToTienda);


export default router;