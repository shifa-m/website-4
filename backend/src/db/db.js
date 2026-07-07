import mongoose, { connect } from "mongoose";
import dotenv from "dotenv"

async function connectDB() {
            
{
            try{

                        await mongoose.connect(process.env.MONGO_URL)

                        console.log("DataBase has been connected")

            }catch(err){

                        console.log("Database connection has been denied",err)
            }
}}

export default connectDB