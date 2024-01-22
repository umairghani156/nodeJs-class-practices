const express = require("express");

const app = express();

const PORT = process.env.PORT || 5000;
const products_routes = require("./routes/products")

app.use("/api/products", products_routes)
app.get("/", (req, res)=>{
    res.send("Hello from Umair")
})

app.listen(PORT, ()=>{
    console.log("Server is listening on the port "+ PORT);
})