const crypto = require('crypto');
const {Cashfree} = require('cashfree-pg');

Cashfree.XClientId = process.env.CLIENT_ID;
Cashfree.XClientSecret = process.env.CLIENT_SECRET;
Cashfree.XEnvironment = Cashfree.Environment.PRODUCTION;

function generateOrderId() {
  const uniqueId = crypto.randomBytes(16).toString('hex');

  const hash = crypto.createHash('sha256');
  hash.update(uniqueId);

  const orderId = hash.digest('hex');

  return orderId.substring(0, 12);
}


const createOrderHandler = async (req, res) => {
  try {
    if (!req) {
      return res.json("Request was empty").status(401);
    }
    
    let request = {
      "order_amount": "250",
      "order_currency": "INR",
      "order_id": await generateOrderId(),
      customer_details: {
        "customer_id": req.body.customer_details.id,
        "customer_phone": req.body.customer_details.phone_number,
        "customer_name": req.body.customer_details.name,
        "customer_email": req.body.customer_details.email,
      },
      "order_meta": {
        "return_url": "https://aurora.istemanipal.com/api/workshop"
    }
    };

    Cashfree.PGCreateOrder("2022-09-01", request)
      .then((response) => {
        // console.log(response.data);
        res.json(response.data);
      })
      .catch((error) => {
        console.error(error.response.data.message + "here");
      });
  } catch (error) {
    console.log(error);
  }
};

const verifyPayment = async (req, res) => {
  try {
    // console.log({"req":req.body});

    Cashfree.PGFetchOrder("2022-09-01", req.body.orderId)
      .then((response) => {
        // console.log(response.data);
        res.json(response.data);
      })
      .catch((error) => {
        console.error(error.response);
      });
  } catch (error) {
    console.log(error);
  }
};

module.exports = { createOrderHandler, verifyPayment };
