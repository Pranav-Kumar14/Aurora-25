import { useState, useEffect } from "react";
import { load } from "@cashfreepayments/cashfree-js";
import {getProfile} from "../services/auth"
import  {useAuth}  from "../context/AuthContext";
import BaseUrl from "../BaseUrl";

const PaymentButton = ({ orderAmount, onPaymentSuccess, userDataNew }) => {
  const { user, setUser } = useAuth();
  //const [orderId, setOrderId] = useState("");
  const [userData, setUserData] = useState(null);

  let cashfree; 
  let insitialzeSDK = async function () {
    cashfree = await load({
      mode: "sandbox",
    })
  }
  insitialzeSDK()

  // const getUserDetails = async () => {
  //   try {
  //     console.log('hi')
  //     const data = await updateProfile(user.email); 
  //     console.log(data);
  //     setUserData(data);
  //     console.log({"userdata":userData});
  //   } catch (error) {
  //     console.error("Error fetching user data:", error);
  //   }
  // };

  // useEffect(() => {
    

  //   getUserDetails();
  // }, []);

  const handleOrderSubmit = async () => {
    // getUserDetails();

    if (!userDataNew._id) {
      console.error("User ID is required");
      return;
    }

    console.log(userDataNew)

    const orderData = {
      customer_details:{
        id:userDataNew._id,
        name: userDataNew.name, // Replace with actual user name if available
        email: userDataNew.email, // Replace with actual user email if available
        phone_number: userDataNew.phone.toString()
      }
    }

    try {
      const response = await fetch(`${BaseUrl}/cashfree/create-order`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(orderData),
      });

      const data = await response.json();
      if (data.payment_session_id) {
        //setOrderId(data.order_id);
        handlePayment(data.payment_session_id, data.order_id);
      } else {
        console.error("Failed to create payment session");
      }
    } catch (error) {
      console.error("Error creating order:", error);
    }
  };

  const handlePayment = async (paymentSessionId, orderId) => {
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
        verifyPayment(orderId);
      });
    } catch (error) {
      console.error("Error initializing payment:", error);
    }
  };

  const verifyPayment = async (orderId) => {
    try {
      const response = await fetch(`${BaseUrl}/cashfree/verify-payment`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ orderId }),
      });

      const data = await response.json();
      if (data.order_status === "PAID") {
        alert("Payment verified successfully!");
        updateUserProfile();
        if (onPaymentSuccess) onPaymentSuccess(data); // Trigger callback if provided
      } else {
        alert("Payment verification failed!");
      }
    } catch (error) {
      console.error("Error verifying payment:", error);
    }
    finally{
      location.reload();
    }
  };

  const updateUserProfile = async () => {
    try { 
      const payload = {
        userId: userDataNew._id, 
      };
      const response = await fetch(`${BaseUrl}/user/updateProfile`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
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

  return <button className="bg-[#519984] w-full px-6 py-2 mt-4 rounded-full text-white font-heading font-semibold shadow-md transition duration-300 hover:shadow-[0_0_15px_#7DC5EE] hover:bg-[#ADD6EA]" onClick={handleOrderSubmit}>Pay ₹{orderAmount || "250"}</button>;
};

export default PaymentButton;
