import express from "express";
import {nanoid} from "nanoid"
import dotenv from "dotenv"
import connectDB from "./src/config/monogo.config.js"
import short_url from "./src/routes/short_url.route.js"
import user_routes from "./src/routes/user.routes.js"
import auth_routes from "./src/routes/auth.routes.js"
import { redirectFromShortUrl } from "./src/controller/short_url.controller.js";
import { errorHandler } from "./src/utils/errorHandler.js";
import cors from "cors"
import { attachUser } from "./src/utils/attachUser.js";
import cookieParser from "cookie-parser"

dotenv.config("./.env"); 

const app=express();

//resourse sharing(data) from frontend to backend
app.use(cors({
    origin: 'http://localhost:5173', // your React app
    credentials: true // 👈 this allows cookies to be sent
}));

//used for parsing 
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser())

app.use(attachUser)

app.use("/api/create",short_url);
app.use("/api/user",user_routes)
app.use("/api/auth",auth_routes)
app.get("/:id",redirectFromShortUrl);

app.use(errorHandler);

app.listen(3000,()=>{
    connectDB();
    console.log("server is running on port 3000 http://localhost:3000");
})