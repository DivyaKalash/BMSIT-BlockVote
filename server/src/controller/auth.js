const User = require("../models/user");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

exports.signup =  (req, res)=>{

    const {name, email, password, USN} = req.body;

    User.findOne({ USN: USN})
    .exec(async (error, user)=>{
        if(user){
            return res.status(400).json({
                message: "USN already exists!"
            });
        }
        const hashed_password = await bcrypt.hash(password, 10);


        const _user = new User({
            name,
            USN,
            email,
            hashed_password
        });

        _user.save((error, data)=>{
            if(error){
                return res.status(400).json({
                    message: "Something went wrong, Try Again!",
                    error
                });
            }
            else{
                return res.status(201).json({
                    message: "User Registered successfully..."
                });
            }
        });

    });

}

exports.signin = (req, res)=>{
    const {email, password} = req.body;
    User.findOne({email:email})
    .exec((error, user)=>{
        if(error){
            return res.status(400).json({ error });
        }
        if(user){
            if(user.authenticate(password)){
                const token = jwt.sign({_id:user._id}, "rdtydtydtygcg", {expiresIn: "1d"});
                const {_id, name, email, role, USN} = user;
                res.cookie("token", token, {expiresIn: "1d"});

                res.status(200).json({
                    token,
                    user:{
                        _id, name, email, role, USN
                    }
                });
            }
            else{
                return res.status(400).json({ message: "invalid password!" });
            }
        }
        else{
            return res.status(400).json({ message: "Something Went Wrong" });
        }
    });
}

exports.signout = (req, res) =>{

    res.clearCookie("token");
    res.status(200).json({
        message: "signout Successfully..."
    });

}
