const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/user');
const employeeRoutes = require('./routes/employee');

const app = express();
const cors = require('cors');

app.use(cors());
const DB_CONNECTION_STRING = "mongodb://mongodb:27017/Assignment02";
//const DB_CONNECTION_STRING = "mongodb+srv://drastiparikh23:Dp%4023063@cluster0.a5txz.mongodb.net/Assignment02?retryWrites=true&w=majority&appName=Cluster0";


app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));

mongoose.connect(DB_CONNECTION_STRING, {
}).then(() => {
    console.log("Connected to MongoDB");
}).catch((err) => {
    console.log("Error: ", err);
});
app.use(express.json());
app.use('/users', userRoutes);
app.use('/employees', employeeRoutes);

const PORT= 5001;

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`))