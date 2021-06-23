const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/BlockVoteRegister", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
}).then(()=>{
    console.log("Connection established");
}).catch((err)=>{
    console.log(`No Connection established`);
})