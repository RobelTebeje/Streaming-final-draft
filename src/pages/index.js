import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { Layout as DashboardLayout } from "src/layouts/dashboard/layout";

const HomePage = () => (
  <div
    style={{
      backgroundImage: `url(${require("../Assets/cinema_home.jpg").default})`, // Embedding the background image directly
      backgroundSize: "cover",
      backgroundPosition: "center",
      minHeight: "100vh",
    }}
  >
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        padding: "0 20px",
        color: "red",
        textAlign: "center",
      }}
    >
      <Typography variant="h2" gutterBottom>
        Welcome to Geez Streaming Site
      </Typography>
      <Typography variant="h5" gutterBottom>
        Your destination for all things Ethiopian cinema and entertainment
      </Typography>
      <Button variant="contained" color="primary">
        Explore Now
      </Button>
    </Box>
  </div>
);

HomePage.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default HomePage;
