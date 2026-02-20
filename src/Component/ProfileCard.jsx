import { Card, Stack, Typography } from "@mui/material";
import React from "react";
import SimplePaper from "./SimplePaper";
import Divider from "@mui/material/Divider";

export default function ProfileCard({ bgColor, h1, h2, pr, img }) {
  return (
    <>
      <Card
        sx={{
          height: 150,
          width: 300,
          top: 10,
          position: "relative",
          backgroundColor: bgColor,
        }}
      >
        <Stack sx={{ position: "relative" }}>
          <Stack direction={"row"}>
            <SimplePaper elevation={3} img={img} />
            <Stack>
              <Typography
                varient="subtitle1"
                color="White"
                component="div"
                sx={{ position: "absolute", top: 10, left: 170 }}
              >
                {h1}
              </Typography>
              <Typography
                varient="h5"
                color="white"
                component="div"
                sx={{ position: "absolute", top: 40, left: 170 }}
              >
                {h2}
              </Typography>
            </Stack>
          </Stack>
          <Divider
            variant="middle"
            sx={{
              position: "absolute",
              top: 100,
              bgcolor: "white",
              width: "90%",
            }}
          />
          <p
            style={{
              position: "absolute",
              top: 110,
              left: 100,
              color: "white",
            }}
          >
            {pr}
          </p>
        </Stack>
      </Card>
    </>
  );
}
