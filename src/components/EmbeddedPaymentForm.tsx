"use client";

import React, { useState, useEffect } from "react";
import {
  useStripe,
  useElements,
  CardElement,
  PaymentRequestButtonElement,
} from "@stripe/react-stripe-js";
import {  PaymentRequest } from '@stripe/stripe-js';


const EmbeddedPaymentForm: React.FC = () => {
  const stripe = useStripe();
  const elements = useElements();

  const [paymentRequest, setPaymentRequest] = useState<PaymentRequest | null>(null); // State to hold paymentRequest
  const [canMakePayment, setCanMakePayment] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);

  // Setting up Payment Request for Google Pay
  useEffect(() => {
    if (stripe) {
      const pr = stripe.paymentRequest({
        country: "US",
        currency: "usd",
        total: {
          label: "Total",
          amount: 8800, // $88.00 in cents
        },
        requestPayerName: true,
        requestPayerEmail: true,
      });

      // Check if Google Pay or other methods are available
      pr.canMakePayment().then((result) => {
        if (result) {
          setPaymentRequest(pr); // Set the paymentRequest if available
          setCanMakePayment(true);
        }
      });

      pr.on("paymentmethod", async (event) => {
        setIsProcessing(true);
        try {
          // Handle the payment method server-side (simulated)
          event.complete("success");
          alert("Google Pay Payment Successful!");
        } catch (error) {
          console.error(error);
          event.complete("fail");
          setErrorMessage("Google Pay Payment failed. Please try again.");
        } finally {
          setIsProcessing(false);
        }
      });
    }
  }, [stripe]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!stripe || !elements) {
      console.error("Stripe has not loaded yet.");
      return;
    }

    setIsProcessing(true);

    try {
      const cardElement = elements.getElement(CardElement);
      if (!cardElement) {
        setErrorMessage("Card element not found.");
        return;
      }

      // Create a payment method using the CardElement
      const { token, error } = await stripe.createToken(cardElement);

      if (error) {
        setErrorMessage(error.message!);
      } else if (token) {
        alert(`Payment Successful! Token: ${token.id}`);
        // Send the token to your server for processing
      }
    } catch (error) {
      console.error(error);
      setErrorMessage("Payment failed. Please try again.");
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div
      style={{
        maxWidth: "400px",
        margin: "auto",
        padding: "20px",
        background: "transparent",
        borderRadius: "8px",
      }}
    >
      {canMakePayment && paymentRequest && (
        <div style={{ marginBottom: "20px" }}>
          <h4>Pay with Google Pay:</h4>
          {/* Pass the paymentRequest object directly */}
          <PaymentRequestButtonElement options={{ paymentRequest }} />
        </div>
      )}

      {/* Embedded Card Payment Form */}
      <form onSubmit={handleSubmit}>
        <label style={{ display: "block", marginBottom: "10px" }}>
          Card Details:
        </label>
        <CardElement
          options={{
            style: {
              
            
              base: {
                fontSize: "16px",
                
                color: "white",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "red",
              },
            },
          }}
        />
        {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
        <button
          type="submit"
          disabled={isProcessing || !stripe}
          style={{
            padding: "10px",
            width: "100%",
            backgroundColor: "#5469d4",
            color: "#fff",
            border: "none",
            borderRadius: "4px",
            fontSize: "16px",
            marginTop:"25px"
          }}
        >
          {isProcessing ? "Processing..." : "Pay $88"}
        </button>
      </form>
    </div>
  );
};

export default EmbeddedPaymentForm;
