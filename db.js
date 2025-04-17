import mongoose from "mongoose";

const connectDB = async () => {
    try {
        const conn =  await mongoose.connect("mongodb://localhost:27017/Knovator");
        console.log(`connected to mongodb database ${conn.connection.host}`);
    } catch (error) {
        console.log(`Error :- ${error}`)
    }
}

export default connectDB;