import { validationResult } from "express-validator";
import { db } from "../db.js";

export const msgContactForm = (req,res)=>{

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    const {name,email,message}  = req.body;
    const q = "INSERT INTO contact (`name`,`email`,`message`) VALUES (?,?,?)";
    const values = [name,email,message];

    db.query(q,values,(err,data)=>{
        if(err){
            return res.status(500).json({message : err.message});
        }
        return res.status(201).json({message : "Data Added to database successfully"})
    })
}