import express from "express";

import cors from "cors";

const app = express();
 app.use(cors())

app.post("/waether/:cityName", (req, res)=>{
    let weatherData = {
        karachi: {
            name: "karachi",
            temp: 34,
            humidity: 30,
            high: 34,
            low: 12
        },
        london: {
            name: "london",
            temp: 45,
            humidity: 24,
            high: 34,
            low: 5
        },
    }

    let userInputCityName = req.params.cityName.toLowerCase();
    let weatherDataTOSend = weatherData[userInputCityName];
    if(weatherDataTOSend){
        res.send(weatherDataTOSend)
    }else{
        res.status(404).send("Weather data is not available")
    }
})

const PORT = 8000;

app.listen(PORT, ()=>{
    console.log(`Server is listening on the port ${PORT}`);
})
