import React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";

export default function SimplePaper() {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          "& > :not(style)": {
            m: 1,
            width: 128,
            height: 128,
          },
        }}
      >
        <Paper
          elevation={0}
          sx={{ backgroundColor: "#ffe3a3", textAlign: "center" }}
        >
          <img
            src="https://mui.com/static/images/cards/contemplative-reptile.jpg"
            alt="image"
            style={{ height: 40, width: 40, marginTop: 20 }}
          />
        </Paper>
      </Box>
    </>
  );
}
