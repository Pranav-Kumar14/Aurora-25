import React from "react";

const PaymentButton = ({ amount, onPaymentSuccess, returnUrl = "/" }) => {
  const fetchUserDetails = async () => {
    try {
      const response = await fetch("http://localhost:5001/api/get-user-details");
      // {
      //   method: "GET",
      //   headers: {
      //     "Content-Type": "application/json",
      //     Authorization: `Bearer ${localStorage.getItem("jwt")}`, // Assuming JWT is stored in localStorage
      //   },
      // });
      // const data = await response.json();
      // if (!response.success) throw new Error(response.message);
      const data = await response.json();
      console.log(data);
      console.log(data.name);
      
      return data; // Return user details
    } catch (error) {
      console.error("Error fetching user details:", error);
      alert("Failed to fetch user details. Please login again.");
      return null;
    }
  };

  const createOrder = async () => {
    try {
      const response = await fetch("http://localhost:5001/api/createorder", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount }), // Pass registration fee
      });
      const data = await response.json();
      if (!data.success) throw new Error(data.message);
      return data.order;
    } catch (error) {
      console.error("Error creating order:", error);
      alert("Failed to create order. Please try again.");
      return null;
    }
  };

  const handlePayment = async () => {
    try {
      const user = await fetchUserDetails();
      if (!user) return;

      const order = await createOrder();
      if (!order) return;

      if (!window.Razorpay) {
        alert("Razorpay SDK failed to load. Are you online?");
        return;
      }

      const options = {
        key: "rzp_test_JxkUxiAr4SKhw6" || "YOUR_RAZORPAY_KEY_ID",
        amount: order.amount,
        currency: "INR",
        name: "Hackathon Registration",
        description: "Register for the hackathon",
        image: "https://your-logo-url.com/logo.png",
        order_id: order.id,
        handler: async function (response) {
          try {
            const verifyResponse = await fetch(
              "http://localhost:5001/api/verifypayment",
              {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                  order_id: response.razorpay_order_id,
                  payment_id: response.razorpay_payment_id,
                  signature: response.razorpay_signature,
                }),
              }
            );

            const result = await verifyResponse.json();
            if (result.success) {
              alert("Payment successful and verified!");
              onPaymentSuccess && onPaymentSuccess();
              window.location.href = returnUrl;
            } else {
              alert("Payment verification failed.");
            }
          } catch (error) {
            console.error("Error verifying payment:", error);
            alert("Failed to verify payment.");
          }
        },
        prefill: {
          name: user.name,
          email: user.email,
          contact: user.contact,
        },
        notes: {
          team_id: user.team_id, // Include team ID if applicable
        },
        theme: {
          color: "#3399cc",
        },
      };

      const rzp = new window.Razorpay(options);

      rzp.on("payment.failed", function (response) {
        alert(`Payment failed! Error: ${response.error.description}`);
      });

      rzp.open();
    } catch (error) {
      console.error("Error handling payment:", error);
      alert("Payment initiation failed.");
    }
  };

  return (
    <button
      className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      onClick={handlePayment}
    >
      Pay Now
    </button>
  );
};

export default PaymentButton;
