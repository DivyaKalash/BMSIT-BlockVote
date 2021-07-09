const express = require("express");
const env = require("dotenv");
const app = express();
const userRoutes = require("./routes/auth");
const authRoutes = require("./routes/admin/auth");
const mongoose = require("mongoose");
const cors = require("cors");

env.config();


mongoose.connect(`mongodb+srv://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PASSWORD}@cluster0.ml2un.mongodb.net/${process.env.MONGO_DB_DATABASE}?retryWrites=true&w=majority`,
{
    useNewUrlParser: true, 
    useUnifiedTopology: true
}
).then(() =>{
    console.log("Database Connected");
});
app.use(cors());
app.use(express.json());
app.use(userRoutes);
app.use(authRoutes);

const PORT = process.env.PORT || 8080;
app.listen(PORT, ()=>{
    console.log(`Server running at PORT: ${PORT} `);
});