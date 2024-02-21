import {pool} from '../db.js';


export const checkBarcode = async(barcode) => {
    try {

        const [rows] = await pool.query("SELECT barcode FROM productos WHERE  barcode = ? ",[barcode]);
        if (rows.length >= 1) throw new Error('Barcode en uso');
    } catch(error) {
        throw new Error('Barcode en uso');
    };
}

export const checkName = async(name) => {
    try {

        const [rows] = await pool.query("SELECT name FROM productos WHERE  name = ? ",[name]);
        if (rows.length >= 1) throw new Error('Nombre en uso');
    } catch(error) {
        throw new Error('Nombre en uso');
    };
}