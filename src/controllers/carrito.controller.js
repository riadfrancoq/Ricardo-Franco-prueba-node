import db from "../db/db.js";

const { tables } = db;
const { carritos} = tables;

export const addCarrito = async(req, res)=> { 
    const {idProducto, idTienda, idUser = 1, cantidad = 1} = req.body;
    try {
        const addCart = await carritos.create({cantidad, id_producto: idProducto, id_tienda: idTienda, id_user: idUser});
        res.status(201).json({
            message: "Carrito Creado Satisfactoriamente",
            data: addCart
        }
        )
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Oops Something goes wrong"
        });
    }
};