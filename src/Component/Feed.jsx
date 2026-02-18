import React from "react";
import { Box } from "@mui/material";
import ProfileCard from "./ProfileCard";

export default function Feed() {
  return (
    <>
      <Box flex={4} p={2}>
        <ProfileCard />
      </Box>
    </>
  );
}
