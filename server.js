
const express = require('express');

const app = express();
const PORT = 3000;

app.use (express.json());
app.post('/',(req,res)=>{
    const{name}=req.post
})

app.get('/',(req,res)=>{
    res.status(200);
    res.send("welcome to root URL of Server")
})


app.get('/Hi',(req,res)=>{
    res.status(200);
    res.send("<h2>Iam Midhun<h2>");
});


app.listen(PORT, (error) =>{
    if(!error)
        console.log("Server is Successfully Running, and App is listening on port "+ PORT)
    else 
        console.log("Error occurred, server can't start", error);
    }
);


app.get ('/',(req,res)=>{
   
    res.send("hello world")
})
app.post('/',(req,res)=>{
   res.sendStatus("hi")
})