import { Router } from "express";
import { check } from "express-validator";
import { getProductosFromTiendas } from "../controllers/catalogo.controller.js";
import validateDocuments from '../middlewares/validate.documents.js';
import {checkTienda } from "../middlewares/db.check.js";

const router = Router()

router.get('/catalogo/:id',[
    check('id').custom(checkTienda),
    validateDocuments
], getProductosFromTiendas);

export default router;