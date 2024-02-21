import {pool} from "../db.js";



export const listTiendas = async(req, res) => {
    try {
        
        res.status(200).json({
            message: ""
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Oops Something goes wrong"
        });
    }
};