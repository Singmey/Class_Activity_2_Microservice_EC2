const express = require('express');
const axios = require('axios');
const app = express();

var bodyParser = require('body-parser');
app.use(bodyParser.json())
app.use(express.json());

const PAYMENT_SERVICE_URL = 'http://localhost:5002/paymentprocess';
const NOTIFICATION_SERVICE_URL = 'http://localhost:5003/sendnotification';

// Add Order
app.post('/addorder', async (req, res) => {
    try {
    //Call Payment Service
    const paymentResponse = await axios.post(PAYMENT_SERVICE_URL, req.body);
    const { status } = paymentResponse.data;

    //Call Notification Service based on payment result
    const notifMessage = status === 'Success'
                                ? 'Your order has been placed successfully!'
                                : 'Your order could not be placed due to payment failure.';

    await axios.post(NOTIFICATION_SERVICE_URL, {
        status: status,
        message: notifMessage
    });

    // Respond to the user
    res.json({
        orderStatus: status,
        message: `Order processed. Payment ${status}. Notification sent.`
    });

    } catch (error) {
        res.status(500).json({ error: 'Order processing failed', details: error.message });
    }
});

// View Order
app.get('/vieworder', (req, res) => {
    res.send('VIEWING ORDER DETAILS...');
});

// Cancel Order
app.delete('/cancelorder', (req, res) => {
    res.send('ORDER HAS BEEN CANCELED...')
});

app.listen(5001, () =>
    console.log('EXPRESS Server Started at Port No: 5001'));