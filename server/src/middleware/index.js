const jwt = require("jsonwebtoken");


exports.requireSignin = (req, res, next)=>{

    if(req.headers.authorization){
    const token = req.headers.authorization.split(" ")[1];
    const user = jwt.verify(token, "rdtydtydtygcg" );
    req.user = user;
    }
    else{
        return res.status(400).json({
            message: "Authorization Required!"
        });
    }
    next();
}

exports.userMiddleWare = (req, res, next)=>{
    if(req.user.role =! "user"){
        return res.status(400).json({error: "User Access Denied!"});
    }
    next();

}

exports.adminMiddleware = (req, res, next)=>{
    if(req.user.role =! "admin"){
        return res.status(400).json({error: "Admin Access Denied!"});
    }
    next();
}