import express from "express";
import fs from "fs";
import cors from "cors";
import path from 'path';
const __dirname = path.resolve();
const app = express();
app.use(express.json())
// app.use(cors())

// app.post("/weather/:cityName", (req, res) => {

//     console.log('req.params.cityName :', req.params.cityName);
//     console.log('req.params.side :', req.query.side);
//     console.log('req.params.unit :', req.query.unit);
//     console.log('req.params.side :', req.query.side);
//     console.log('req.params.cityName :', req.query.age);
//     // console.log("headers",JSON.stringify(req.headers));
//     console.log("req.body.name", req.body.name);
//     console.log("req.body.age", req.body.age);
//     console.log("req.body.rollNumber", req.body.rollNumber);
//     let weatherData = {
//         karachi: {
//             karachi: 'karachi',
//             temperature: 32,
//             humidity: 30,
//             high: 45,
//             low: 10,
//         },
//         london: {
//             karachi: 'london',
//             temperature: 32,
//             humidity: 30,
//             high: 45,
//             low: 10,
//         }
//     }
//     let userInputCityName = req.params.cityName.toLowerCase();
//     let weatherDataTOSend = weatherData[userInputCityName];
//     if(weatherDataTOSend){
//         res.send(weatherDataTOSend)
//     }else{
//         res.status(404).send("Weather data is not available")
//     }
//     res.send(
//     )
// });
// let comments = [];
// app.post("/comment/:name", (req, res, next)=>{
//     let name = req.params.name;
//     let comment = req.body.comment;

//     comments.push({
//         name: name,
//         comment: comment
//     });
//     res.send({
//         status: true,
//         message: "comment posted successfully"
//     })
// })

app.use("/static",express.static(path.join(__dirname, 'static')))

app.use(express.static(path.join(__dirname, 'public')))
const PORT = 3000;
app.listen(PORT, () => {
    console.log("Server is listening on the PORT " + PORT);
});