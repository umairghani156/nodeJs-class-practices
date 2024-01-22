import express from "express";
import fs from "fs";

const app = express();

const productsItem = [
    {
        id: "1",
        name: "Iftikhar",
        class: "12th"
    },
    {
        id: "2",
        name: "Umair",
        class: "Graduate"
    },
    {
        id: "3",
        name: "Imran",
        class: "Msc"
    },
    {
        id: "4",
        name: "Sajjad",
        class: "graduate"
    },{
        id: "5",
        name: "Saim",
        class: "10th"
    },
    {
        id: "6",
        name: "Kashif",
        class: "graduate"
    },
]
app.use((req, res, next)=>{
    req.studentName = "Umair",
    console.log("Main hun middleware 1");
    next()
})
app.use((req, res, next)=>{
    req.studentName2 = "Iftikhar",
    console.log('Main hn middleware 2', req.studentName);
    next()
})


app.get("/product/:id", (req, res)=>{
    const findSpecificData = productsItem.find((val)=>{
        return val.id === req.params.id;
    });

    console.log('findSpecificData', findSpecificData);
    if(!findSpecificData)
    return res.json({
          status: false,
        message : "No user found",
    })
    res.status(200).json({
        status: true,
        data: findSpecificData,
    })

});

const PORT = 8000;
app.listen(PORT, ()=>{
    console.log(`Server is listening on the PORT ${PORT}`);
});