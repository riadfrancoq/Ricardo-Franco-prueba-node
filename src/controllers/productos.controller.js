import {pool} from "./db.js";


const addProducto = async (req, res) => {
    const {estado, kit, barcode, nombre, presentacion, descripcion, foto, peso} = req.body;
    try {
    const [rows] = await pool.query('INSERT INTO productos (estado, kit, barcode, nombre, presentacion, descripcion, foto, peso)VALUES(?,?,?,?,?,?,?,?)',[estado, kit, barcode, nombre, presentacion, descripcion, foto, peso]);
        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Oops Something goes wrong"
        });
    }

};


export {
    addProducto
}