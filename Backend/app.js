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

dotenv.config({ path: "./.env" });

const app=express();

//resourse sharing(data) from frontend to backend
const allowedOrigins = [
  "http://localhost:5173",
  process.env.FRONTEND_URL
];

app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true
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

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    connectDB();
    console.log(`🚀 Server running on port ${PORT}`);
});
