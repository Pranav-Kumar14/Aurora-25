import { useState, useEffect } from 'react';
import axios from "axios";
import { load } from '@cashfreepayments/cashfree-js';
import '../../styles/Payment.css'

function PaymentPage() {
    const [orderId, setOrderId] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [paymentStatus, setPaymentStatus] = useState(null);
    let cashfree;

    useEffect(() => {
        const initializeSDK = async () => {
            try {
                cashfree = await load({
                    mode: "PRODUCTION"
                });
            } catch (err) {
                setError("Failed to initialize payment SDK");
            }
        };
        initializeSDK();
    }, []);

    const getSessionId = async () => {
        try {
            let res = await axios.get("https://aurora.istemanipal.com/cashfree/api/payment");
            if (res.data?.payment_session_id) {
                setOrderId(res.data.order_id);
                return res.data.payment_session_id;
            }
        } catch (err) {
            setError("Failed to create payment session");
            throw err;
        }
    };

    const verifyPayment = async () => {
        try {
            let res = await axios.post("https://aurora.istemanipal.com/cashfree/api/verify", {
                orderId
            });
            if (res?.data) {
                setPaymentStatus("success");
            }
        } catch (err) {
            setError("Payment verification failed");
            setPaymentStatus("failed");
        }
    };

    const handlePayment = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        try {
            const sessionId = await getSessionId();
            const checkoutOptions = {
                paymentSessionId: sessionId,
                redirectTarget: "_modal",
            };

            await cashfree.checkout(checkoutOptions);
            console.log("Payment initialized");
            await verifyPayment();
        } catch (err) {
            setError("Payment failed");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="payment-page">
            <div className="payment-container">
                <h1>Cashfree Payment Gateway</h1>
                {error && (
                    <div className="error-message">
                        {error}
                    </div>
                )}
                {paymentStatus && (
                    <div className={`status-message ${paymentStatus}`}>
                        Payment Status: {paymentStatus}
                    </div>
                )}
                <button 
                    className="payment-button"
                    onClick={handlePayment}
                    disabled={loading}
                >
                    {loading ? "Processing..." : "Pay Now"}
                </button>
            </div>
        </div>
    );
}

export default PaymentPage;