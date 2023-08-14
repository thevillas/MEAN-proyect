const express = require('express');
const conectarDB = require('./config/db')

const app = express();
const PORT= 4000;


conectarDB();

app.get('/', (req, res) => {
    res.send("hello MEAN");
})

app.listen(PORT, ()=>{
    console.log("server running");
})