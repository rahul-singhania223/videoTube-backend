import dotenv from "dotenv";
import mongoose from "mongoose";
import { DB_NAME} from "./constants.js";
import connectDb from "./db/index.js"

dotenv.config({
    path: "./env"
})

import express from "express";

const app = express();

connectDb();



// // run immidiatly
// ;( async() => {
//     try {

//         await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)

//         // hanlde error if express server is not able to talk to database
//         app.on("error", (err) => {
//             console.log("ERROR: ", err);
//             throw err
//         })

//         // listen to the server call 
//         app.listen(process.env.PORT, () => {
//             console.log("Server is listening on port: " + process.env.PORT)
//         })

//     }catch(error) {
//         console.error("ERROR: ", error)
//         throw err
//     }
// })()