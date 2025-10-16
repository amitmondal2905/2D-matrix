import React from "react";
import { Box, Container, Typography, Link } from "@mui/material";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: (theme) =>
          theme.palette.mode === "light"
            ? theme.palette.grey[200]
            : theme.palette.grey[800],
        py: 3,
        mt: "auto",
      }}
    >
      <Container maxWidth="sm">
        <Typography variant="body2" color="text.secondary" align="center">
          © 2025{" "}
          <Link color="inherit" href="#">
            Matrix Calculator
          </Link>
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
