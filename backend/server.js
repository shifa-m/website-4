import app from "./index.js";
import connectDB from "../backend/src/db/db.js";

connectDB()

app.listen(3000,(req,res)=>{

            console.log("Server is running on port Number 3000")
})
