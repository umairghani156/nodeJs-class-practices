import express from "express";
import fs from "fs";

const app = express();
app.use(express.json());

let users = []
app.post('/signup', (req, res) => {
    const { userName, userEmail, userPassword } = req.body;
    if (!userName || !userEmail || !userPassword)
        res.status(400).json({
            status: false,
            message: 'All fields are required'
        })
    fs.readFile('./users.js', "utf-8", (err, data) => {
       const parseData = JSON.parse(data);
        users = parseData;
        users.push({
            userName,
            userEmail,
            userPassword
        })

        fs.writeFile('./users.js', JSON.stringify(users), 'utf-8', (err) =>{
            if (!err)
                res.status(200).json({
                    status: true,
                    message: "signUp successfully"
                })
        })



    })

});

app.post("/login", (req, res)=>{
    const {email, password} = req.body;
    if(!email || !password)
    res.status(400).json({
    status: false,
    message: 'All fields are required',
  });
  fs.readFile("./users.js", "utf-8", (err, data)=>{
    const parseData = JSON.parse(data);
    users = parseData;
    const foundUser = users.find((user) => user.userEmail === email)
    if(foundUser){
          if(foundUser.userPassword === password){
            return res.json({
                status: true,
                message: 'LOgged in Successfully',
                data: foundUser
            })
          }else{
            return res.json({
                status: false,
                message: "Credentials are not valid"
            })
          }
    }else{
        return res.json({
            status: false,
            message: 'No user found'
        });
    }
       
  });
})

const PORT = 8000;

app.listen(PORT, () => {
    console.log('server on port' + PORT);
});