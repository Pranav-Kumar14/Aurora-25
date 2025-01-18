import { useState, useEffect } from "react";
import { load } from "@cashfreepayments/cashfree-js";
import {getProfile} from "../services/auth"

const PaymentButton = ({ userId, orderAmount, onPaymentSuccess }) => {
  const [orderId, setOrderId] = useState("");
  const [userData, setUserData] = useState(null);

  let cashfree; 
  let insitialzeSDK = async function () {
    cashfree = await load({
      mode: "sandbox",
    })
  }
  insitialzeSDK()

  useEffect(() => {
    const getUserDetails = async () => {
      try {
        const data = await getProfile(); 
        console.log(data);
        setUserData(data);
        console.log({"userdata":userData});
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    getUserDetails();
  }, []);

  const handleOrderSubmit = async () => {
    if (!userId) {
      console.error("User ID is required");
      return;
    }

    const orderData = {
      customer_details:{
        id:userData.data.id,
        name: userData.data.name, // Replace with actual user name if available
        email: userData.data.email, // Replace with actual user email if available
        contact: "8809795734"
      }
    }

    try {
      const response = await fetch("http://localhost:8000/api/create-order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(orderData),
      });

      const data = await response.json();
      if (data.payment_session_id) {
        setOrderId(data.order_id);
        handlePayment(data.payment_session_id);
      } else {
        console.error("Failed to create payment session");
      }
    } catch (error) {
      console.error("Error creating order:", error);
    }
  };

  const handlePayment = async (paymentSessionId) => {
    if (!cashfree) {
      console.error("Cashfree SDK is not initialized");
      return;
    }

    if(!paymentSessionId){
      console.log("Payment Session id not recieved");
      return;
    }

    const checkoutOptions = {
      paymentSessionId,
      redirectTarget: "_modal",
    };

    try {
      cashfree.checkout(checkoutOptions).then((result) => {
        verifyPayment();
      });
    } catch (error) {
      console.error("Error initializing payment:", error);
    }
  };

  const verifyPayment = async () => {
    try {
      const response = await fetch("http://localhost:8000/api/verify-payment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ orderId }),
      });

      const data = await response.json();
      if (data.order_status === "PAID" || data.order_status === "ACTIVE") {
        alert("Payment verified successfully!");
        updateUserProfile();
        if (onPaymentSuccess) onPaymentSuccess(data); // Trigger callback if provided
      } else {
        alert("Payment verification failed!");
      }
    } catch (error) {
      console.error("Error verifying payment:", error);
    }
  };

  const updateUserProfile = async () => {
    try {
      const response = await fetch("http://localhost:8000/user/updateProfile", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userId }),
      });

      const data = await response.json();
      if (data.success) {
        console.log("User profile updated successfully!");
      } else {
        console.error("Failed to update user profile");
      }
    } catch (error) {
      console.error("Error updating user profile:", error);
    }
  };

  return <button  onClick={handleOrderSubmit}>Pay ₹{orderAmount || "225"}</button>;
};

export default PaymentButton;
