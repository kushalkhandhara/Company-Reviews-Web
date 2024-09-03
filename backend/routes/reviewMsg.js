import express from "express";
import { msgReviews } from "../controllers/reviewMsg.js";
import {validationReviewsForm} from "../validations/validations.js";

const router = express.Router();
router.post("/msgReviewForm",validationReviewsForm,msgReviews);
export default router;