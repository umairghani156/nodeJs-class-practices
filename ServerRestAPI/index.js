import express from "express";
import { authRoutes } from "./routes/authRoute.js";

const app = express();

app.use("/auth", authRoutes);


const PORT = 8000;

app.listen(PORT, ()=>{
    console.log(`server is listening on the port ${PORT}`);
})