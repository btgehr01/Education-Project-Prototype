import React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import "./CircularLoader.scss";

const CircularLoader = () => {
  return (
    <div className="loading-container">
      <Box sx={{ display: "flex" }}>
        <CircularProgress />
      </Box>
    </div>
  );
};

export default CircularLoader;
