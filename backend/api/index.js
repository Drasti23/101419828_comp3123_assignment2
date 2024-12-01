const express = require("express");
const mongoose = require("mongoose");

const userRoutes = require("./routes/user"); 
const empRoutes = require("./routes/employee"); 



const app = express();
const DB_CONNECTION_STRING = "mongodb+srv://drastiparikh23:Dp%4023063@cluster0.a5txz.mongodb.net/Assignment1?retryWrites=true&w=majority&appName=Cluster0";

mongoose.connect(DB_CONNECTION_STRING, {
}).then(() => {
    console.log("Connected to MongoDB");
}).catch((err) => {
    console.log("Error: ", err);
});

const SERVER_PORT = 8091;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use("/api/v1/user/", userRoutes); 

app.use("/api/v1/emp", empRoutes); 


app.route("/")
    .get((req, res) => {
        res.send("<h1>MogoDB + Mongoose Example</h1>");
    });
app.listen(SERVER_PORT, () => {
    console.log(`Server running at http://localhost:${SERVER_PORT}/`);
});