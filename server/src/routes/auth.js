const express = require("express");
const { signup, signin, signout } = require("../controller/auth");
const { requireSigninValidator, isRequestValidated, requireSignupValidator } = require("../validator/auth");
const router  = express.Router();

router.post("/signin",requireSigninValidator, isRequestValidated, signin);

router.post("/signup",requireSignupValidator,isRequestValidated, signup);
router.post("/signout", signout);




module.exports = router;