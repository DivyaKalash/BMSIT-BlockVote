const { check, validationResult } = require("express-validator");



exports.requireSignupValidator = [
    check("name")
    .notEmpty()
    .withMessage("name is required."),
    
    check("email")
    .isEmail()
    .withMessage("Provide Valid Email..."),

    check("password")
    .isLength({min:6})
    .withMessage("Password must be of minimum length of 6")
];

exports.requireSigninValidator = [
    
    check("email")
    .isEmail()
    .withMessage("Provide Valid Email..."),
    
    check("password")
    .isLength({min:6})
    .withMessage("Password must be of minimum length of 6")
];

exports.isRequestValidated = (req, res, next)=>{
    const errors = validationResult(req);
    if(errors.array().length > 0){
        return res.status(400).json({errors: errors.array()[0].msg});
    }
    next();
}