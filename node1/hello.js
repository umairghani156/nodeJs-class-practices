import express from "express";
import fs from "fs";

const app = express();
app.use(express.json());
let user = [];
app.post("/hello", (req, res) => {
    const {userName, userPasword, userEmail} = req.body;
    if(!userName || !userPasword || !userEmail )
        res.status(400).json({
            status: false,
            message: 'Data is invalid'
        });
    fs.readFile('./text.js', 'utf-8', (err, data) =>{
        const parseData = JSON.parse(data);
       user = parseData
       user.push({
        userEmail,
        userName,
        userPasword
       })
    fs.writeFile("./text.js", JSON.stringify(user), 'utf-8', (err)=>{
        if(!err)
            res.status(400).json({
                status: true,
                message: "Data is valid"
            })
    })
} )
});

const PORT = 8000;
app.listen(PORT, ()=>{
    console.log('Server started at port number ' + PORT);
});