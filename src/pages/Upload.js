import React from "react";
import Head from "next/head";
import { Box, Container, Grid, Stack, Typography, TextField, Button } from "@mui/material";
import { Layout as DashboardLayout } from "src/layouts/dashboard/layout";
import { Icon } from "@iconify/react"; // Importing Iconify
import playCircleFilled from "@iconify-icons/mdi/play-circle-filled"; // Play button icon

const UploadPage = () => (
  <>
    <Head>
      <title>Upload | Your App Name</title>
    </Head>
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 8,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          {/* Upload Section */}
          <Grid item xs={12} md={6}>
            <Stack spacing={3}>
              <Typography variant="h4">Upload</Typography>
              <Box
                sx={{
                  border: "1px dashed #ccc",
                  borderRadius: "8px",
                  padding: "60px", // Increased vertical size of upload box
                  textAlign: "center",
                }}
              >
                <label htmlFor="file-upload" style={{ cursor: "pointer" }}>
                  <Typography variant="h5" component="div" gutterBottom>
                    Click here to upload your file
                  </Typography>
                  <input style={{ display: "none" }} id="file-upload" type="file" />
                </label>
              </Box>
              <TextField label="Uploaded By" variant="outlined" fullWidth />
              <TextField label="Upload Date" type="date" fullWidth />
              <TextField label="Title" variant="outlined" fullWidth />
              <TextField label="Description" variant="outlined" fullWidth />
              <TextField label="Time they want to show" variant="outlined" fullWidth />
              <TextField label="Expected time on cinema" variant="outlined" fullWidth />
              <TextField label="Genre" variant="outlined" fullWidth />
              <TextField label="Movie Length" variant="outlined" fullWidth />
              <Button variant="contained" color="primary">
                Upload
              </Button>
            </Stack>
          </Grid>

          {/* Recent Uploads Section */}
          <Grid item xs={12} md={6}>
            <Stack spacing={3}>
              <Typography variant="h4">Recent Uploads</Typography>
              {/* Placeholder for recent uploads */}
              {[...Array(5)].map((_, index) => (
                <Box
                  key={index}
                  sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
                >
                  <Box
                    sx={{
                      width: "400px",
                      height: "200px",
                      border: "1px solid #ccc",
                      borderRadius: "8px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      marginBottom: "10px",
                    }}
                  >
                    <Icon icon={playCircleFilled} style={{ fontSize: "48px" }} />
                  </Box>
                  <Typography variant="subtitle1">Random Title {index + 1}</Typography>
                </Box>
              ))}
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  </>
);

UploadPage.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default UploadPage;
