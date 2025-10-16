import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link as RouterLink } from "react-router-dom";
import Link from "@mui/material/Link";

const Navbar = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: "#ddd" }}>
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1, color: "black" }}>
          Matrix Calculator
        </Typography>

        <Button
          variant="contained"
          color="success"
          component={RouterLink}
          to="/"
          sx={{ color: "black", marginRight: 2 }}
        >
          Home
        </Button>
        <Button
          variant="contained"
          color="success"
          component={RouterLink}
          to="/calculator"
          sx={{ color: "black" }}
        >
          Calculator
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
