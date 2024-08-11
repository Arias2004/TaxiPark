import mongoose from "mongoose";


const MONGODB_URI = 'mongodb+srv://Admin:12345678.@cluster0.ngj91ih.mongodb.net/PortalWeb';

export const connectToDatabase = async () => {
    try {
        await mongoose.connect(MONGODB_URI)
        console.log("Connected to MongoDB")
    } catch (error) {
        console.error(error)
    }
}