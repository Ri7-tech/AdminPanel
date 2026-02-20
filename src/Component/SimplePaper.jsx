import React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
export default function SimplePaper({ img }) {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          "& > :not(style)": {
            m: 1,
            width: 70,
            height: 70,
            marginLeft: 4,
          },
        }}
      >
        <Paper
          elevation={3}
          sx={{
            backgroundColor: "#ffe3a3",
            textAlign: "center",
            height: 80,
            width: 80,
          }}
        >
          <img
            src={img}
            alt="image"
            style={{
              height: "100%",
              width: "100%",
              padding: 10,
            }}
          />
        </Paper>
      </Box>
    </>
  );
}
