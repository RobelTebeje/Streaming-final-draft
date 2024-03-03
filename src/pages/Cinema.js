import React, { useState } from "react";
import Head from "next/head";
import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import { Layout as DashboardLayout } from "src/layouts/dashboard/layout";
import { Icon } from "@iconify/react"; // Importing Iconify
import playCircleFilled from "@iconify-icons/mdi/play-circle-filled";

const CinemaPage = () => {
  const [currentVideo, setCurrentVideo] = useState("https://www.youtube.com/embed/HWjCStB6k4o");

  const handleVideoChange = (videoUrl) => {
    setCurrentVideo(videoUrl);
  };

  return (
    <>
      <Head>
        <title>Cinema | Geez Streaming</title>
      </Head>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8,
        }}
      >
        <Container maxWidth="lg">
          <Typography align="center" fontSize={30}>
            Cinema
          </Typography>
          <br></br>
          <Grid container spacing={3}>
            {/* Play Area */}

            <Grid item xs={12} md={8}>
              <Box
                sx={{
                  border: "3px solid #ccc",
                  borderRadius: "8px",
                  height: "400px",
                }}
              >
                {/* Embedding YouTube video player */}
                <iframe
                  width="100%"
                  height="100%"
                  src={currentVideo}
                  title="YouTube video player"
                  allowFullScreen
                />
              </Box>
              <Box>
                <Typography variant="outlined" fullWidth>
                  Title
                </Typography>
                <Typography>Description</Typography>
                <Typography>Genre</Typography>
                <Typography>uploaded By</Typography>
                <Typography>Upload Date</Typography>
                <Typography>Movie length</Typography>
                <Typography>Uploaded Poster</Typography>
              </Box>
            </Grid>

            {/* Other Videos Section */}
            <Grid item xs={12} md={4}>
              <Stack spacing={3}>
                <Typography variant="h4">Other Videos</Typography>
                {/* List of other videos */}
                <Box
                  sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
                  variant="subtitle1"
                  style={{ cursor: "pointer" }}
                  onClick={() => handleVideoChange("https://www.youtube.com/embed/HWjCStB6k4o")}
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
                  <Typography>Happy Nation</Typography>
                </Box>
                <Box
                  sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
                  variant="subtitle1"
                  style={{ cursor: "pointer" }}
                  onClick={() => handleVideoChange("https://www.youtube.com/embed/CW7gfrTlr0Y")}
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
                  <Typography>Stromae Santé</Typography>
                </Box>
                <Box
                  sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
                  variant="subtitle1"
                  style={{ cursor: "pointer" }}
                  onClick={() => handleVideoChange("https://www.youtube.com/embed/7aekxC_monc")}
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
                  <Typography>Girl I Like You</Typography>
                </Box>
              </Stack>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

CinemaPage.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default CinemaPage;
