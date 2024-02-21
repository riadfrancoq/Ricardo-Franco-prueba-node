import {pool} from '../db.js';


export const checkBarcode = async(barcode) => {
    try {

        const [rows] = await pool.query("SELECT barcode FROM productos WHERE  barcode = ? ",[barcode]);
        if (rows.length >= 1) throw new Error('Barcode en uso');
    } catch(error) {
        console.log(error);
        throw new Error('Barcode en uso');
    };
}

export const checkName = async(name) => {
    try {

        const [rows] = await pool.query("SELECT name FROM productos WHERE  name = ? ",[name]);
        if (rows.length >= 1) throw new Error('Nombre en uso');
    } catch(error) {
        console.log(error);
        throw new Error('Nombre en uso');
    };
}

export const checkProducto = async(id) => {
    try {

        const [rows] = await pool.query("SELECT id FROM productos WHERE  id = ? ",[id]);
        if (rows.length <= 0) throw new Error('Producto inexistente');
    } catch(error) {
        console.log(error);
        throw new Error('Producto inexistente');
    };
}

export const checkTienda = async(id) => {
    try {

        const [rows] = await pool.query("SELECT id FROM tiendas WHERE  id = ? ",[id]);
        if (rows.length <= 0) throw new Error('Tienda inexistente');
    } catch(error) {
        console.log(error);
        throw new Error('Tienda inexistente');
    };
}