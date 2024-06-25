const express = require('express');

const app = express();

const loged=(req,rep,next)=>{
    console.log("logged in")
    next();

};
// app.use(loged)
app.get('/',(req,res)=>{
    res.sent('first')
})
app.get('/hi',(req,res)=>{
    res.sent('second')

})
app.get('/hii',(req,res)=>{
    res.sent('third')
})

// console.log("start")