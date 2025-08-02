import express from "express"
import dotenv from "dotenv"
import cookieParser from "cookie-parser";
import cors from "cors"

import authRoutes from "./routes/auth.route.js"
import messageRoute from "./routes/message.route.js"
import { connectDB } from "./lib/db.js";
import { app, server } from "./lib/socket.js"

dotenv.config();
import { formatMessageTime } from "../../frontend/CHAT-APP/src/lib/utils.js";
console.log('MONGODB_URI:', process.env.MONGODB_URI); 

app.use(cookieParser())
app.use(express.json())

app.use(cors({
    origin:"http://localhost:5173",
    credentials:true
}));

const PORT = process.env.PORT

app.use("/api/auth",authRoutes)
app.use("/api/messages",messageRoute)

server.listen(PORT,()=>{
    console.log("server running..........on "+PORT);
    connectDB()
});