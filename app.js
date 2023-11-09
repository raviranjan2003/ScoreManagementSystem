const express = require('express');
const mongoose = require('mongoose');

const app = express();

const PORT = 3000;
const uri = "mongodb+srv://ravidemo3:Ravi2003@cluster0.huhsgu8.mongodb.net/?retryWrites=true&w=majority"

mongoose.connect(uri)
.then(()=>console.log("Database Connected Successfully !"))
.catch((err)=>console.log(err))

app.use('/', require('./routes'))

app.listen(PORT,()=>{
    console.log(`Server running on PORT : ${PORT}`);
})