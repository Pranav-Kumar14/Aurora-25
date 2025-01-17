import { useState, useEffect } from 'react';
import axios from "axios";
import { load } from '@cashfreepayments/cashfree-js';

function PaymentPage() {
    let cashfree; 
    let insitialzeSDK = async function () {
      cashfree = await load({
        mode: "PRODUCTION",
      })
    }
    insitialzeSDK()
    const [orderId, setOrderId] = useState("")
    const getSessionId = async () => {
      try {
        let res = await axios.get("https://aurora.istemanipal.com/api/cashfree/payment")
        if (res.data && res.data.payment_session_id) {
          console.log(res.data)
          setOrderId(res.data.order_id)
          return res.data.payment_session_id
        }
      } catch (error) {
        console.log(error)
      }
    }
    const verifyPayment = async () => {
      try {
        let res = await axios.post("https://aurora.istemanipal.com/api/cashfree/verify", {
          orderId: orderId
        })
        if (res && res.data) {
          alert("payment verified")
        }
      } catch (error) {
        console.log(error)
      }
    }
    const handleClick = async (e) => {
      e.preventDefault()
      try {
        let sessionId = await getSessionId()
        let Options = {
          paymentSessionId: sessionId,
          redirectTarget: "_modal",
        }
        cashfree.checkout(Options).then((res) => {
          console.log("payment initialized")
          verifyPayment(orderId)
        })
      } catch (error) {
        console.log(error)
      }
    }
    return (
      <>
      <h1 className='text-cyan-50'>Cashfree payment getway</h1>
        <div className="card text-rose-50">
          <button onClick={handleClick}>
            Pay now
          </button></div>
        </>
    )
  } 
  

export default PaymentPage;