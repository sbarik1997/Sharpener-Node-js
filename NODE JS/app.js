const express = require('express');

const app = express();

app.use((req,res,next) => {
    console.log("In the middleware!");
    next();
})
app.use((req,res,next) => {
    console.log("In the middleware 2!");
    res.send("<h1> Hello to node js</h1>");
})

app.listen(3000);