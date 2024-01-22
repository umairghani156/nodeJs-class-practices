import express from "express";
import fs from "fs";

const app = express();

const PORT = 3000;
app.post('/', (req, res)=>{
    res.send('Hello Darling ghgjjhfdgdddhjhgfdfghj')
});
app.listen(PORT, ()=>{
   console.log('Example app listening on port ' + PORT);
})