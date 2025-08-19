import express from "express";
import { nanoid } from "nanoid";
import dotenv from "dotenv";
import connectDB from "./src/config/monogo.config.js";
import urlSchema from "./src/model/short_url.model.js"
import short_url from "./src/routes/short_url.route.js"
import  {redirectFromShortUrl}  from "./src/controller/short_url.controller.js";
import { errorHandler } from "./src/utils/errorHandler.js";

dotenv.config("./.env"); 

const app=express();

//used for parsing 
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/create",short_url);

app.get("/:id",redirectFromShortUrl);

app.use(errorHandler);

app.listen(3000,()=>{
    connectDB();
    console.log("server is running on port 3000 http://localhost:3000");
})