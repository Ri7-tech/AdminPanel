import React, { useState } from "react";

import { createTheme, ThemeProvider, styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Navbar from "./Navbar";

export default function Home() {
  const [mode, setMode] = useState("light");

  const darkmode = createTheme({
    palette: {
      mode: mode,
    },
  });
  return (
    <>
      <div>
        <ThemeProvider theme={darkmode}>
          <Box bgcolor={"background.default"} color="text-primary">
            <Navbar />
          </Box>
        </ThemeProvider>
      </div>
    </>
  );
}
