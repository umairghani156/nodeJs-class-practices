import express from "express";
import fs from "fs";
const app = express();
app.use(express.json())
let users = []
export const signUp = (req, res , next)=>{
    try{
        const {userName, email, password} = req.body;
        if(!userName || !email || !password)
        res.status(400).json({
         status: false,
         message: 'Error in getting weather'
        });
     fs.readFile("./users.js", "utf-8", (err, data)=>{
        const parsedData = JSON.parse(data);
        users = parsedData
        users.push({
           userName : userName,
           userEmail: email,
           userpassword: password
        });

   
    fs.writeFile("./users.js", JSON.stringify(users), "utf-8", (err)=>{
        if(!err)
        res.status(200).json({
            status : true,
            message: 'user signed up'
        })
    })
     });
    }catch(error){
       console.log(error.message);
    }
};
export const login = (req, res)=>{
    try{
    const {userEmail, userPassword} = req.body;
    fs.readFile("./users.js", "utf-8", (err, data)=>{
        const parsedData = JSON.parse(data);
        const users = parsedData;
        users.find((user)=>{
            if(user.userEmail === userEmail || user.userPassword === userPassword) {
                res.json({
                    status: true,
                    message: "logged in successfully"
                 });
            }
        });
       
    });
    
    }catch(error){
       console.log(error.message);
    }
};