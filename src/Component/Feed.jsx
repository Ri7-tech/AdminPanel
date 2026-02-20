import React from "react";
import { Box } from "@mui/material";
import ProfileCard from "./ProfileCard";
import { Stack } from "@mui/material";
import img1 from "../Images/hosting.png";
import img2 from "../Images/money-bag.png";
import img3 from "../Images/user.png";
export default function Feed() {
  return (
    <>
      <Box flex={5} p={0}>
        <Stack direction={"row"} spacing={2}>
          <ProfileCard
            bgColor="#21295c"
            h1="used space"
            h2="49/60 TB"
            pr="Get More space"
            img={img1}
          />
          <ProfileCard
            bgColor="#21295c"
            h1="Revenue"
            h2="$42,567"
            pr="Total Revanue"
            img={img2}
          />
          <ProfileCard
            bgColor="#21295c"
            h1="Users"
            h2="30.47K"
            pr="Total Users"
            img={img3}
          />
        </Stack>
      </Box>
    </>
  );
}
