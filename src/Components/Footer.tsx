import { Home, Email, Info, Language, LocalPhone } from "@mui/icons-material";
import { Box, Container, Typography } from "@mui/material";
import React from "react";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        px: 2,
        mt: "auto",
        backgroundColor: "lightgray",
        color: "black",
      }}
    >
      <Container maxWidth="sm">
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            paddingBottom: "10px",
          }}
        >
          <Home sx={{ px: 1 }} />
          <Email sx={{ px: 1 }} />
          <LocalPhone sx={{ px: 1 }} />
          <Language sx={{ px: 1 }} />
          <Info sx={{ px: 1 }} />
        </Box>
        <Typography
          variant="body1"
          sx={{ display: "flex", justifyContent: "center" }}
        >
          Copyright © 2023 University of Louisville | All Rights Reserved
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
