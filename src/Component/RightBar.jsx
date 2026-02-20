import { Box, Paper, Stack } from "@mui/material";
import React from "react";
import img2 from "../Images/img4.jpg";

export default function RightBar() {
  return (
    <>
      <Box flex={1} p={2}>
        <Paper elevation={3} sx={{ padding: 0.5 }}>
          <Stack direction={"row"} position={"relative"}>
            <Paper elevation={3} sx={{ height: 60, width: 60 }}>
              <img
                src={img2}
                alt=""
                style={{ height: "100%", width: "100%" }}
              />
            </Paper>
            <h5 style={{ position: "absolute", left: 70, top: 10 }}>
              John Deo
            </h5>
          </Stack>
        </Paper>
      </Box>
    </>
  );
}
