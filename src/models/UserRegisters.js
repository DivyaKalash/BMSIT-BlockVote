const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
    name : {
        type : 'string',
        required : true
    },
    usn : {
        type : 'string',
        required : true,
        unique : true
    },
    email : {
        type : 'string',
        required : true,
        unique : true
    },
    password : {
        type : 'string',
        required : true,
    },
    confirmpassword : {
        type : 'string',
        required : true,
    }
})

//Hashing of passwords, if we update or create new user the password will be hashed

userSchema.pre("save", async function(next){
    if(this.isModified("password")){
        this.password = await bcrypt.hash(this.password, 16);
        this.confirmpassword = undefined;
    }
    next();
})

// Create the collection

const Register = new mongoose.model("Register", userSchema);
module.exports = Register;