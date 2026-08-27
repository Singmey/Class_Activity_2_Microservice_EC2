const e1 = require('express');
const app = e1();
app.use(e1.json());

//Send notification
app.post('/sendnotification', (req, res) => {
    const status = req.body?.status || 'Unknown';

    let message;
    if (status === 'Success') {
        message = 'Your order has been placed successfully!';
    } else if (status === 'Failure') {
        message = 'Your order could not be placed due to payment failure.';
    } else {
        message = 'Order status unknown.';
    }

    console.log(`Notification: Order ${status} - ${message}`);
    res.send(`Notification sent: Order ${status}`);
});

//Run express server
app.listen(5003, () =>
    console.log('EXPRESS Server Started at Port No: 5003'));

