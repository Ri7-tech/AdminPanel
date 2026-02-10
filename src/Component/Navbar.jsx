import styled from "@emotion/styled";
import { Pets } from "@mui/icons-material";
import { AppBar, InputBase, Toolbar, Typography } from "@mui/material";
import React from "react";

export default function Navbar() {
  const StyleToolbar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between",
  });
  const Search = styled("div")({
    backgroundColor: "white",
    padding: "0px 10px",
    borderRadius: "5px",
    width: "40%",
  });
  return (
    <>
      <AppBar
        position="sticky"
        sx={{ backgroundColor: "#2129c", color: "#ffe3a3" }}
      >
        <StyleToolbar>
          <Typography
            variant="h6"
            sx={{ display: { xs: "none", sm: "block" } }}
          >
            Dashboard
          </Typography>
          <Pets sx={{ display: { xs: "block", sm: "none" } }} />
          <Search>
            <InputBase placeholder="Search Here" />
          </Search>
        </StyleToolbar>
      </AppBar>
    </>
  );
}
