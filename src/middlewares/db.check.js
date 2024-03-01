import db from '../db/db.js';
const {tables} = db;
const { productos} = tables;

export const checkBarcode = async(barcode) => {
    try {

        const Barcode = await productos.findAll({
            attributes: ['id'],
            where: { barcode}
        });
        if (Barcode.length >= 1) throw new Error('Barcode en uso');
    } catch(error) {
        console.log(1, error);
        throw new Error('Barcode en uso');
    };
}


export const checkName = async(name) => {
    try {

        const Name = await productos.findAll({
            attributes: ['id'],
            where: { nombre: name}
        });
        if (Name.length >= 1) throw new Error('Nombre en uso');
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
/*

*/