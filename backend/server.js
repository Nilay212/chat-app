import express from "express"
import dotenv from "dotenv"
import cookieParser from "cookie-parser";

import connectToMongoDB from "./db/connectToMongoDB.js";

import authRoutes from "./routes/auth.routes.js"
import messageRoutes from "./routes/message.routes.js"
import userRoutes from "./routes/user.routes.js"

const app = express();
const PORT = process.env.PORT || 3000;


dotenv.config();
app.use(express.json())  // to parse incomming request with json payload
app.use(cookieParser())


app.use("/api/auth", authRoutes)
app.use("/api/messages", messageRoutes)
app.use("/api/users", userRoutes)



app.get("/", (req,res) => {
    res.send("Hello World!!hjh");
})


app.listen(PORT, () => {
    connectToMongoDB();
    console.log(`server is running on port ${PORT}`);
})
