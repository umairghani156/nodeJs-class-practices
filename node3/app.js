
import express, { json } from "express";
import fs from "fs";

const app = express();
app.use(express.json());
let users = [];
app.post('/weather', (req, res) => {
    const {cityName} = req.body;
    if(!cityName)
    res.status(400).json({
     status: false,
     message: 'Error in getting weather'
    });

    fs.readFile("./users.js", "utf-8", (err, data)=>{
        const parseData = JSON.parse(data)
        users = parseData;
        users.push({
            cityName,
            temperature: "32c",
            humidity: 23,
            high: 32,
            low: 12
        });

   
    fs.writeFile("./users.js", JSON.stringify(users), "utf-8", (err)=>{
        if(!err)
        res.status(200).json({
            status : true,
            message: 'weather data is getting now'
        })
    })
     });
});

const PORT = 5000;
app.listen(PORT, ()=> {
    console.log(`server is getting on the port ${PORT}`);
});