import db from '../db/db.js';
const {tables} = db;
const { productos, tiendas} = tables;

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

        const products = await productos.findAll({
            attributes: ['id'],
            where: { id: id}
        });
        if (products.length <= 0) throw new Error('Producto inexistente');
    } catch(error) {
        console.log(error);
        throw new Error('Producto inexistente');
    };
}

export const checkTienda = async(id) => {
    try {

        const stores = await tiendas.findAll({
            attributes: ['id'],
            where: { id: id}
        });
        if (stores.length <= 0) throw new Error('Tienda inexistente');
    } catch(error) {
        console.log(error);
        throw new Error('Tienda inexistente');
    };
}
