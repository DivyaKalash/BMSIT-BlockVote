const User = require("../../models/user");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

exports.signup =  (req, res)=>{

    const {name, email, password, USN} = req.body;

    User.findOne({ email: email })
    .exec(async (error, user)=>{
        if(user){
            return res.status(400).json({
                message: "Email already exists!"
            });
        }
        const hashed_password = await bcrypt.hash(password, 10);

        const _user = new User({
            name,
            email,
            hashed_password,
            role: "admin",
            USN
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
                    message: "Admin Registered successfully..."
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
            if(user.authenticate(password) && user.role === "admin"){
                const token = jwt.sign({_id:user._id, role:user.role}, "rdtydtydtygcg", {expiresIn: "1d"});
                const {_id, name, email, role} = user;
                res.cookie("token", token, {expiresIn: "1d"});
                res.status(200).json({
                    token,
                    user:{
                        _id, name, email, role
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

