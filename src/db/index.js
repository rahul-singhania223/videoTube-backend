import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";


async function connectDb() {
    try {

       const connectionInstance =  await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        console.log(`\n Mongodb connected !! DB HOST: ${connectionInstance.connection.host}`)
    }catch(error) {
        console.error("MONGODB CONNECTION FAILED: \n ", error)
        process.exit(1);
    }
}

export default connectDb;