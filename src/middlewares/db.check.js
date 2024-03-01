import db from '../db/db.js';
const {tables} = db;
const { productos, tiendas, users, tiendas_productos} = tables;

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
        throw new Error('Producto Inexistente en la Tienda');
    };
}

export const checkUser = async (id = 1) =>  {
    try {
        const Users = await users.findAll({
            attributes: ['id'],
            where: { id: id}
        });
        if (Users.length <= 0) throw new Error('Usuario Inexistente');
    } catch(error) {
        console.log(error);
        throw new Error('Usuario Inexistente');
    };
};

export const checkTiendasProductos = async (idProducto, {req}) => {
    try {
        const {idTienda} = req.body;
        const ProductsInStore = await tiendas_productos.findAll({
            where : {
                id_tienda: idTienda,
                id_producto: idProducto
            }
        });
        if (ProductsInStore.length <= 0) throw new Error("La tienda no posee este producto");
    } catch (error) {
        console.log(error);
        throw new Error('La tienda no posee este producto');
    }
};