/*
import {pool} from "../db.js";


 export const addProducto = async (req, res) => {
    const {estado, kit, barcode, nombre, presentacion, descripcion, foto, peso} = req.body;
    try {
    const [result] = await pool.query('INSERT INTO productos (estado, kit, barcode, nombre, presentacion, descripcion, foto, peso) VALUES(IFNULL(?, 1),IFNULL(?,0),?,?,IFNULL(?,""),?,?,IFNULL(?,0.00))',[estado, kit, barcode, nombre, presentacion, descripcion, foto, peso]);
        console.log(result);

    const [rows] = await pool.query("SELECT estado, kit, barcode, nombre, presentacion, descripcion, foto, peso FROM productos WHERE id = ?",[result.insertId]);
    res.status(201).json({
        message: "Producto creado exitosamente",
        producto: rows[0]

    })
        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Oops Something goes wrong"
        });
    }

};


export const addProductoToTienda = async(req, res) => {

    const {compra_maxima, valor, id_promocion, id_tienda, id_producto} = req.body;

    try {
        
    const [rows] = await pool.query("INSERT INTO tiendas_productos (compra_maxima, valor, id_promocion, id_tienda, id_producto) VALUES(?,?,?,?,?)",[compra_maxima, valor, id_promocion, id_tienda, id_producto]);
    console.log(rows);
    res.status(200).json({
        rows
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
*/