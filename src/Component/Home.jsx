import React, { useState } from "react";

import { createTheme, ThemeProvider, Stack } from "@mui/material";
import Box from "@mui/material/Box";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { Feed } from "@mui/icons-material";
import RightBar from "./RightBar";

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
            <Stack
              direction={"row"}
              spacing={2}
              justifyContent={"space-between"}
            >
              <Sidebar setMode={setMode} mode={mode} />
              <Feed />
              <RightBar />
            </Stack>
          </Box>
        </ThemeProvider>
      </div>
    </>
  );
}
