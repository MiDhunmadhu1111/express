
const express = require('express');
const app = express();
const port = 3000;


app.get('/user/:manu', (req, res) => {
    const userId = req.params.id;
    res.send(`Welcome, user with ID: ${userId}`);
});


app.listen(port, () => {
    console.log('Server is running on port 3000');
});
