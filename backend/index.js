import express from "express";
import msgContactRoutes from "./routes/msgContact.js"
import  msgReviews from "./routes/reviewMsg.js";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());
// Api for contact form data submission
app.use('/api/msgContact',msgContactRoutes);

// Api for adding review
app.use('/api/msgReview',msgReviews);

// Server Runnning on 8804
app.listen(8804,()=>{
    console.log(`Backend Server Running On : http://localhost:8804`)
})