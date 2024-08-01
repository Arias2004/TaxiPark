import mongoose from "mongoose";


const MONGODB_URI = 'mongodb+srv://stevdev04:CuCBTqsyHoFYfewG@stevdev.zvrherc.mongodb.net/mydb';

export const connectToDatabase = async () => {
    try {
        await mongoose.connect(MONGODB_URI)
        console.log("Connected to MongoDB")
    } catch (error) {
        console.error(error)
    }
}