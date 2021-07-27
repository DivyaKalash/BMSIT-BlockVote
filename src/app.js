const express = require('express');
const path = require('path');
const bcrypt = require('bcryptjs');

const app = express();
require("./db/connect");
const Register = require("./models/UserRegisters");
const PORT = process.env.PORT || 3000;
app.use(express.json());

//create
app.post("/register", async(req, res)=>{
    try{
        const addUser = new Register(req.body);
        console.log(addUser);
        const insertUser = await addUser.save();
        res.status(201).send(insertUser);
    }catch(e){
        res.status(400).send(e);
    }
});

//read
app.get("/register", async(req, res)=>{
    try{
        const getUsers = await Register.find({});
        res.send(getUsers);
    }catch(e){
        res.status(400).send(e);
    }
})

//login code
app.post('/login', async(req, res)=>{
    try{
        const email = req.body.email;
        const password = req.body.password;
        const userDetails = await Register.findOne({email:email});
        if((email.substring(10)==="@bmsit.in") && (await bcrypt.compare(password, userDetails.password))){
            console.log("logged in successfully");
        }else{
            console.log("Invalid Credentials");
        }
    }catch(e){
        res.status(400).send(`Invalid Details and ${e}`);
    }
})

app.listen(PORT, () =>{
    console.log("Server is up");
})