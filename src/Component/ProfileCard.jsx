import { Card, Stack } from "@mui/material";
import React from "react";
import SimplePaper from "./SimplePaper";

export default function ProfileCard() {
  return (
    <>
      <Card sx={{ height: 150, width: 310, position: "relative" }}>
        <Stack>
          <Stack direction={"row"}>
            <SimplePaper elevation={3} />
          </Stack>
        </Stack>
      </Card>
    </>
  );
}
