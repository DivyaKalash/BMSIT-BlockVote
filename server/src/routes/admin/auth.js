const express = require("express");
const { signup, signin, signout } = require("../../controller/admin/auth");
const { requireSignin } = require("../../middleware");
const { requireSigninValidator, isRequestValidated, requireSignupValidator } = require("../../validator/auth");
const router  = express.Router();

router.post("/admin/signin",requireSigninValidator, isRequestValidated, signin);

router.post("/admin/signup",requireSignupValidator, isRequestValidated, signup);

router.post("/admin/signout", signout);




module.exports = router;