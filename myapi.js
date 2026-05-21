//Import Server
const e1 = require('express')

// Create object of that server
const app = e1();

app.get('/view', (req, res) => {
    res.send('INSIDE VIEW API..');
});

app.post('/view', (req, res) => {
    res.send('INSIDE VIEW API..');
});

app.put('/view', (req, res) => {
    res.send('INSIDE VIEW API..');
});

app.delete('/view', (req, res) => {
    res.send('INSIDE VIEW API..');
});

//Start the express server. 5000 is the port num
app.listen(5000, () =>
    console.log('EXPRESS Server Started at Port No: 5000'));