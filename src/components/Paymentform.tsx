import React from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  Divider,
  Grid,
} from "@mui/material";

const PaymentForm = () => {
  return (
    <Box
      sx={{
        display: "flex",
        // flexDirection: { xs: "column", md: "row" },
     
        width:"936px",
        margin:"0 auto",
        height:"567.50px",
        border:"1px",
        borderRadius:"10px",
        alignItems: "center",
        justifyContent: "center",
        gap: "36px",
        padding: "26px",
        background: 'linear-gradient(180deg, rgba(34, 34, 34, 0.45) 0%, rgba(17, 17, 17, 0.45) 100%)'
 // Background for container
      }}
    >
      {/* Left Section */}
      <Box
        sx={{
          width:"475px",
          height: "495.59px",
          backgroundColor: "#222",
          border:"1px",
          color: "#fff",
          padding: "42px",
          // gap:"16px",
          borderRadius: "10px",
        }}
      >
        <img src="/Union.svg" width={"64px"} height={"31.59px"}/>

        <Typography width={"391px"} height={"73px"}>
        <Typography  fontSize={"2rem"}>
          Welcome to Memvy
          </Typography>
          <Typography fontSize={"1.5rem"} color={"#CCCCCC"} lineHeight={"20px"}>
          The Future of Enjoying the Past
          </Typography>
        </Typography>

        <Typography width={"391px"} height={"88px"} fontSize={"1.125rem"} lineHeight={"21.6px"} marginTop={"10px"}>
          We’ve partnered with the SEC to make the Championship Game truly
          unforgettable. Gain exclusive access to a curated Memvy story for
          only $5.
        </Typography>

        <Typography width={"391px"} height={"164px"} gap={"16px"} marginTop={"10px"}>
  <Typography variant="body2" display={"flex"} alignItems={"flex-start"} width={"391px"} height={"24px"}>
    <img src="/iconamoon_check-bold.svg" width={"24px"} height={"24px"} style={{ marginRight: "8px"}} />
    Exclusive content from name, name, name and many more
  </Typography>

  <Typography variant="body2" display={"flex"} alignItems={"flex-start"} width={"391px"} height={"24px"} marginTop={"20px"}>
    <img src="/iconamoon_check-bold.svg" width={"24px"} height={"24px"} style={{ marginRight: "8px" }} />
    Immerse yourself in stories, video, photo, and audio collections
  </Typography>

  <Typography variant="body2" display={"flex"} alignItems={"flex-start"} width={"391px"} height={"24px"} marginTop={"20px"}>
    <img src="/iconamoon_check-bold.svg" width={"24px"} height={"24px"} style={{ marginRight: "8px" }} />
    Experience the excitement of gameday again and again
  </Typography>
</Typography>

        <Typography variant="h4" width={"391px"}>
        <hr style={{ border: "1px solid grey", marginBottom: "35px" }} />

          $5.00
        </Typography>
      </Box>

      {/* Right Section */}
      <Box
        sx={{
          width: "453px",
          
          height: "auto",
          padding: 4,
          
          
        }}
      >
        <Typography
          variant="h6"
          sx={{
            textAlign: "center",
            marginBottom: 2,
          }}
        >
          Create Account
        </Typography>

        <TextField
          label="Email Address"
          variant="outlined"
          fullWidth
          sx={{
            marginBottom: 2,
            backgroundColor: "white",
            borderRadius: "10px",
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                border: "none", // Remove border
              },
            },
            "& .MuiInputLabel-root": {
              color: "black", // Default label color
            },
            "& .MuiInputLabel-root.Mui-focused": {
              color: "black", // Label color when focused
            },
            "& .MuiOutlinedInput-root.Mui-focused": {
              "& fieldset": {
                border: "none", // Ensure no border on focus
              },
            },
          }}
          
        />
        <TextField
          label="Password"
          type="password"
          fullWidth
          sx={{ marginBottom: 2, backgroundColor:"white",borderRadius:"10px", "& .MuiOutlinedInput-root": {
            "& fieldset": {
              border: "none", // Remove the border
            },
          }, }}
        />
        <TextField
          label="Confirm Password"
          type="password"
          fullWidth
          sx={{ marginBottom: 2, backgroundColor:"white",borderRadius:"10px", "& .MuiOutlinedInput-root": {
            "& fieldset": {
              border: "none", // Remove the border
            },
          }, }}
        />

        <Divider sx={{ marginY: 2 }}>OR</Divider>

        <Button
          variant="contained"
          fullWidth
          sx={{
            backgroundColor: "#4285F4",
            color: "#fff",
            marginBottom: 2,
            "&:hover": { backgroundColor: "#357ae8" },
          }}
        >
          Continue with Google
        </Button>

        <Button
          variant="contained"
          fullWidth
          sx={{
            backgroundColor: "#3b5998",
            color: "#fff",
            "&:hover": { backgroundColor: "#2d4373" },
          }}
        >
          Continue with Facebook
        </Button>
      </Box>
    </Box>
  );
};

export default PaymentForm;
