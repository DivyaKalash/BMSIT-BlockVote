const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = mongoose.Schema({
    name:{
        type: String,
        required: true,
        trim: true,
        
    },
   
    email:{
        type: String,
        required: true,
        trim: true,
        unique: true,
        lowercase: true
    },
    hashed_password:{
        type: String,
        required: true,
        min: 6
    },
    USN:{
        type: String
        // unique: true
    },
    voting_status:{
        type: String,
        enum: ["voted", "not voted"],
        default: "not voted"
        
    },
    role:{
        type: String,
        enum: ["user", "admin"],
        default: "user"
    },
    profilePicture:{type:String}

}, {timestamps: true});

// userSchema.virtual("password")
// .set(function(password){
//     this.hashed_password = bcrypt.hashSync(password, 10)
// });



userSchema.methods = {
    authenticate: async function(password){
        return await bcrypt.compare(password, this.hash_password);
    }
} 

module.exports = mongoose.model("User", userSchema);