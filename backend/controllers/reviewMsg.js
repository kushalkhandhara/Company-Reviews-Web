import { validationResult } from "express-validator";
import { db } from "../db.js";

export const msgReviews = (req,res) => {
    console.log("Reached to Message Reviews");
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({messgae : errors.array()});
    }

    const { name,email,company_name,company_website,bond,offer_letter,stay,workMsg,workprofile } = req.body;
    const q = "INSERT INTO reviews(`name`,`email`,`company_name`,`company_website`,`bond`,`offer_letter`,`stay`,`workMsg`,`workprofile`) VALUES (?,?,?,?,?,?,?,?,?) ";

    const values = [name,email,company_name,company_website,bond,offer_letter,stay,workMsg,workprofile];

    db.query(q,values,(error, data) => {
        if(error){
            return res.status(500).json({message : error.message});
        }
        return res.status(201).json({message : "Data Added to database successfully"})
    })
}