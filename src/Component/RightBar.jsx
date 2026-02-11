import { Box, Paper, Stack } from "@mui/material";
import React from "react";

export default function RightBar() {
  return (
    <>
      <Box flex={1} p={2}>
        <Stack direction={"row"} position={"relative"}>
          <Paper sx={{ height: 40, width: 200 }}>
            <img src="" alt="" style={{ height: 40, width: 40 }} />
          </Paper>
          <h4 style={{ position: "absolute" }}>John Deo</h4>
        </Stack>
      </Box>
    </>
  );
}
