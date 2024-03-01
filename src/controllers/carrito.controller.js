import db from "../db/db.js";
import { literal, col, Op } from "sequelize";
const { tables } = db;

const { carritos, productos, tiendas_productos} = tables;

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
    };
};


export const getProductosCarrito = async (req, res) => {
    const {idUser, idTienda} = req.body;
    try {
        
        const CarritosTiendas = await tiendas_productos.findAll({

                include: [{
                    association: "promocion",

                    include: [{
                        association: "tiendas_productos",
                        include: [{
                            association: "promocion",

                        }]
                    }
                ],
                    where: {
                        estado: {
                            [Op.gte]: 1
                        }
                    }
                }]
            /*
            include: [{
                association: "tiendas_productos",
                where: {
                    id_tienda: idTienda,
                    id_producto: col('productos.id')
                },
    
            }
            ]
            */
 
        });
        res.status(200).json({
            message: "Productos del usuario encontrados satisfactoriamente",
            data: CarritosTiendas
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Oops Something goes wrong"
        });
    };

};