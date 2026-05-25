//Import Server
const e1 = require('express')

// Create object of that server
const app = e1();

//Req API
app.post('/registration', (req, res) => {
    res.send('INSIDE REGISTRATION API..');
});

app.post('/login', (req, res) => {
    res.send('INSIDE LOGIN API..');
});

//Search API
app.get('/search', (req, res) => {
    res.send('INSIDE SEARCH API..');
});

//Update API
app.put('/update', (req, res) => {
    res.send('INSIDE UPDATE API..');
});

//Delete API
app.delete('/delete', (req, res) => {
    res.send('INSIDE DELETE API..');
});

//Start the express server. 5000 is the port num
app.listen(5000, () =>
    console.log('EXPRESS Server Started at Port No: 5000'));
