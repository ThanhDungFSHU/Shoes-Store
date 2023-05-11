// ---
// to: src/App.js
// ---

import React from "react";
import Typography from "@mui/material/Typography";
import { Box, Link } from "@mui/material";

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://www.google.com.vn">
        Thanh Dung
      </Link>{" "}
      3{new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

function App() {
  return (
    <>
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom align="center">
          Shoes Store
        </Typography>
        <Copyright />
      </Box>
    </>
  );
}

export default App;
