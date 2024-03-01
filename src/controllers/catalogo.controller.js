import db from '../db/db.js';
import { Op, literal} from 'sequelize';
const {gte } = Op;
const {tables} = db;
const { productos, tiendas_productos, promociones} = tables;


export const getProductosFromTiendas = async (req, res) => {

    const {id} = req.params;
    
    try {
       
        const getProductsFromStore = await tiendas_productos.findAll({
            include: [{
                association: "promocion",
                attributes: [
                    ['id', 'id_promocion'],
                    'nombre',
                    'porcentaje',
                    [literal('tiendas_productos.valor * ((100 -promocion.porcentaje) / 100)'), 'valor_promocion'],


                ]
                ,
                include: [{
                    association: "tiendas_promociones",
                    attributes: [],
                    where: {estado: {
                        [gte]: 1
                    },
                    id_tienda: id
                }
                }]
            }
            ],
            where: {
                id_tienda: id
            }
        });


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