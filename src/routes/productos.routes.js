import { Router } from "express";
import { addProducto } from "../controllers/productos.controller.js";
import { check } from "express-validator";
import { checkBarcode, checkName } from "../middlewares/db.check.js";
import validateDocuments from '../middlewares/validate.documents.js';
const router = Router();

router.post('/productos',[
    check('nombre').notEmpty().withMessage('El nombre es requerido').bail().isString().withMessage('Numeros no se aceptan como nombre').bail().isLength({max: 60}).withMessage('El nombre no puede exceder los 60 caracteres').bail().custom(checkName),
    check('barcode').notEmpty().withMessage('El barcode es requerido').bail().custom(checkBarcode),
    validateDocuments
], addProducto);

export default router;