const {Cashfree} = require('cashfree-pg');
const crypto = require('crypto')
const express  =  require('express')


router = express.Router();

function generateOrderId() {
    const uniqueId = crypto.randomBytes(16).toString('hex');

    const hash = crypto.createHash('sha256');
    hash.update(uniqueId);

    const orderId = hash.digest('hex');

    return orderId.substring(0, 12);
}

router.get('/api/payment', async (req, res) => {

    try {

        let request = {
            "order_amount": 1.00,
            "order_currency": "INR",
            "order_id": await generateOrderId(),
            customer_details: {
                "customer_id": "webcodder01",
                "customer_phone": "8809795723",
                "customer_name": "Abhinav",
                "customer_email": "zap@example.com"
            },
        }

        Cashfree.PGCreateOrder("2023-08-01", request).then(response => {
            console.log(response.data);
            res.json(response.data);

        }).catch(error => {
            console.error(error.response.data.message+"here");
        })


    } catch (error) {
        console.log(error);
    }


})


router.post('/api/verify', async (req, res) => {

    try {

        let {
            orderId
        } = req.body;

        Cashfree.PGFetchOrder("2023-08-01", orderId).then((response) => {

            res.json(response.data);
        }).catch(error => {
            console.error(error.response.data.message);
        })


    } catch (error) {
        console.log(error);
    }
})

module.exports=router;