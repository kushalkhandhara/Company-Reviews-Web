import express from "express";
import {validateContactForm} from "../validations/validations.js"
import {msgContactForm} from "../controllers/msgContact.js"

const router = express.Router();
router.post("/msgContactForm",validateContactForm,msgContactForm);
export default router;