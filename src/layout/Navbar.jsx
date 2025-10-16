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
          component={RouterLink}
          to="/"
          color="inherit"
          sx={{ color: "black", marginRight: 2 }}
        >
          Home
        </Button>
        <Button
          component={RouterLink}
          to="/calculator"
          color="inherit"
          sx={{ color: "black" }}
        >
          Calculator
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
