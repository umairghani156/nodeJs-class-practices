import express from "express";
import fs from "fs";

const app = express();

app.get('/profile', (req, res)=>{
    res.status(200).send({
        name: "Umair",
        age: 23,
        class: "Graduation"
    })
})


const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=>{
    console.log("Server is listening on the port " + PORT);
})