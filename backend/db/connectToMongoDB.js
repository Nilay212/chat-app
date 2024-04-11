import  Mongoose  from "mongoose";


const connectToMongoDB = async () => {
    try {
        await Mongoose.connect(process.env.MONGO_DB_URI);
        console.log("connected to mongoDB");
    } catch (error) {
        console.log("Error connecting to mongoDB", error.message);
    }
}

export default connectToMongoDB