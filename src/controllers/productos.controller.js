import {pool} from "../db.js";


 export const addProducto = async (req, res) => {
    const {estado, kit, barcode, nombre, presentacion, descripcion, foto, peso} = req.body;
    try {
    const [result] = await pool.query('INSERT INTO productos (estado, kit, barcode, nombre, presentacion, descripcion, foto, peso) VALUES(IFNULL(?, 1),IFNULL(?,0),?,?,IFNULL(?,""),?,?,IFNULL(?,0.00))',[estado, kit, barcode, nombre, presentacion, descripcion, foto, peso]);
        console.log(result);

    const [rows] = await pool.query("SELECT estado, kit, barcode, nombre, presentacion, descripcion, foto, peso FROM productos WHERE id = ?",[result.insertId]);
    res.status(200).json({
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

