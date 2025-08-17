import express from "express";
import { nanoid } from "nanoid";
import dotenv from "dotenv";
import connectDB from "./src/config/monogo.config.js";
import urlSchema from "./src/model/short_url.model.js"
import short_url from "./src/routes/short_url.route.js"

dotenv.config("./.env");

const app=express();

//used for parsing 
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/create",short_url);

app.get("/:id",async (req,res)=>{
  const {id}=req.params;
  const url= await urlSchema.findOne({short_Url:id});
  if(url)
  {
    res.redirect(url.full_Url);
  }
  else{
     res.status(404).send("not be found");
  }
})

app.listen(3000,()=>{
    connectDB();
    console.log("server is running on port 3000 http://localhost:3000");
})