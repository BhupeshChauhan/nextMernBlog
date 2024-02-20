"use client";
import Logo from "@/layouts/full/shared/logo/Logo";
import Login from "@/ui/Login";
import { Grid, Box, Card, Typography } from "@mui/material";

// components

const login = () => {
  return (
    <AnimationWapper>
    <Box
      sx={{
        position: "relative",
        "&:before": {
          content: '""',
          background: "radial-gradient(#d2f1df, #d3d7fa, #bad8f4)",
          backgroundSize: "400% 400%",
          animation: "gradient 15s ease infinite",
          position: "absolute",
          height: "100vh",
          width: "100%",
          opacity: "0.3",
        },
      }}
    >
      <Grid
        container
        spacing={0}
        justifyContent="center"
        sx={{ height: "100vh" }}
      >
        <Grid
          item
          xs={12}
          sm={12}
          lg={4}
          xl={3}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Card
            elevation={9}
            sx={{ p: 4, zIndex: 1, width: "100%", maxWidth: "500px" }}
          >
            <Box display="flex" alignItems="center" justifyContent="center">
              <Logo />
            </Box>
            <Login
              subtext={
                <Typography
                  variant="subtitle1"
                  textAlign="center"
                  color="textSecondary"
                  mb={1}
                >
                  Your Social Campaigns
                </Typography>
              }
            />
          </Card>
        </Grid>
      </Grid>
    </Box>
    </AnimationWapper>
  );
};
export default login;
