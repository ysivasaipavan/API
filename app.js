const express = require('express');
const app = express()

const mongoose=require('mongoose');


mongoose.connect("mongodb://localhost:27017/pavandb");

app.use(express.json());

app.use('/Users',require('./routes/first'))
app.get('/',(req,res)=>[
    res.send("Hello node js...")
])


app.listen(5000,(req,res)=>{
    console.log("Server connecting...");
})