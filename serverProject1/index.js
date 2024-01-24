import express from "express";
import { route } from "./routes/authRoute.js";

const app = express();
app.use(express.json());
app.use("/auth", route);


// app.use((req, res, next)=>{
//     if(token === "valid"){
//         next()
//     }else{
//         res.send({
//             status: false,
//             message: "Invalid token"
//         })
//     }
// });

const PORT = process.env.PORT || 8000;

app.listen(PORT, ()=>{
    console.log(`Server is listening on the port ${PORT}`);
});

