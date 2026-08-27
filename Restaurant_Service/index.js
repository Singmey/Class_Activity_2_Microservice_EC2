//Import Server
const e1 = require('express')

// Create object of that server
const app = e1();

//View All Restaurant
app.get('/viewallrestaurant', (req, res) => {
    res.send('VIEW ALL RESTAURANT...');
});

//search restaurant
app.get('/searchrestaurant', (req, res) => {
    res.send('SEARCH FOR A RESTAURANT...');
});


//Start the express server. 5000 is the port num
app.listen(5000, () =>
    console.log('EXPRESS Server Started at Port No: 5000'));
