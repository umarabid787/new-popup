"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
// import EmbeddedPaymentForm from "../../../../components/StripeFields/EmbeddedPaymentForm";
import { Elements } from "@stripe/react-stripe-js";
import stripePromise from '../utils/stipe';
// Import your existing components
import CreateAccount from "./CreateAccount";
import Thankyou from "./Thankyou";
import EmbeddedPaymentForm from "./EmbeddedPaymentForm";
// import { Elements } from "@stripe/react-stripe-js";
// import stripePromise from "@/utils/stipe";

const steps = [
  { label: "Create Account", icon: "1" },
  { label: "One-time payment", icon: "2" },
  { label: "Access the Story", icon: "3" },
];

export default function IconBasedStepper() {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleStepClick = (stepIndex: number) => {
    setActiveStep(stepIndex);
  };

  return (
    <Box sx={{ width: "100%" }}>
      {/* Custom Stepper */}
      <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
        {steps.map((step, index) => (
          <Box
            key={step.label}
            onClick={() => handleStepClick(index)}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              cursor: "pointer",
              mx: 2,
              opacity: activeStep === index ? 1 : 0.5,
            }}
          >
            <Box
              sx={{
                width: 40,
                height: 40,
                borderRadius: "50%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: activeStep === index ? "#BA0C2F" : "black",
                color: "white",
                fontWeight: "bold",
              }}
            >
              {step.icon}
            </Box>
            <Typography variant="caption" sx={{ mt: 1 }}>
              {step.label}
            </Typography>
          </Box>
        ))}
      </Box>

      {/* Render the component based on the current step */}
      <Box sx={{ mt: 1, mb: 1 }}>
        {activeStep === 0 && (
          <CreateAccount open={false} onClose={function (): void {
                      throw new Error("Function not implemented.");
                  } } />
        )}
        {activeStep === 1 && (
          <Elements stripe={stripePromise}>
            <Box>
              <h1>Stripe Payment Integration</h1>
              <EmbeddedPaymentForm />
            </Box>
          </Elements>
        )}
             {/* {activeStep === 1 && (
          <Thankyou open={false} onClose={function (): void {
                      throw new Error("Function not implemented.");
                  } } />
        )} */}
        {activeStep === 2 && (
          <Thankyou open={false} onClose={function (): void {
                      throw new Error("Function not implemented.");
                  } } />
        )}
      </Box>
    </Box>
  );
}
