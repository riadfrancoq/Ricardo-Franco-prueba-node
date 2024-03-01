import db from '../db/db.js';
const {tables} = db;
const { productos, tiendas_productos} = tables;

 export const addProducto = async (req, res) => {

    const {estado, kit, barcode, nombre, presentacion, descripcion, foto, peso} = req.body;

    try {
    
    const product = await productos.create({
        estado, kit, barcode, nombre, presentacion, descripcion, foto, peso
        });
    res.status(201).json({
        message: "Se a creado un producto satisfactoriamente",
        product: product

    });
        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Oops Something goes wrong"
        });
    }

};


export const addProductoToTienda = async(req, res) => {

    const {compraMaxima, valor, idPromocion, idTienda, idProducto} = req.body;

    try {
    
    const checkIfExists = await tiendas_productos.findAll({
        attributes: ['id'],        
        where: {
            id_tienda: idTienda,
            id_producto: idProducto
        }
    })

    if (checkIfExists.length >= 1 ) {
        return res.status(403).json({
            mesage: "Este producto ya existe en la tienda"
        });
    }

    const product = await tiendas_productos.create({
        compra_maxima: compraMaxima, valor, id_promocion: idPromocion, id_tienda: idTienda, id_producto: idProducto
        });
    res.status(200).json({
        message: "Producto añadido satisfactoriamente",
        product
    })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Oops Something goes wrong"
        });
    }

};


export const getProductosFromTiendas = async (req, res) => {

    const {id} = req.params;

    try {
       
        const [rows] = await pool.query("SELECT tp.compra_maxima, tp.valor, p.estado, p.kit, p.barcode, p.nombre AS producto, p.presentacion, p.descripcion, p.foto, p.peso  FROM tiendas_productos AS tp JOIN productos AS p ON tp.id_producto = p.id JOIN tiendas_promociones AS tpro ON tpro.id_tienda = ?  WHERE tp.id_tienda = ? AND tpro.estado = 1 AND DATE(NOW()) >= tpro.inicio AND DATE(NOW()) <= tpro.fin ",[id, id]);
        res.status(200).json({
            message: "200",
            rows
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Oops Something goes wrong"
        });
    }

};


