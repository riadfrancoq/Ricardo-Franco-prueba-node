import db from '../db/db.js';
const {tables} = db;
const { productos, tiendas_productos} = tables;


export const getProductosFromTiendas = async (req, res) => {

    const {id} = req.params;
    
    try {
       
        const getProductsFromStore = await tiendas_productos.findAll({where: {id_tienda: id}});


        res.status(200).json({
            message: "200",
            result: getProductsFromStore
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Oops Something goes wrong"
        });
    }

};