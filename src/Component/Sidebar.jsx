import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Switch,
} from "@mui/material";
import InboxIcon from "@mui/icons-material/Inbox";
import HomeIcon from "@mui/icons-material/Home";

import React from "react";
import { Luggage, Man, ModeNightRounded, Settings } from "@mui/icons-material";

export default function Sidebar({ setMode, mode }) {
  return (
    <>
      <Box flex={1} p={2}>
        <Box sx={{ position: "fixed", width: "5%" }}>
          <List>
            <ListItem disablePadding>
              <ListItemButton component="a" href="#inbox">
                <ListItemIcon>
                  <InboxIcon />
                </ListItemIcon>
                <ListItemText primary="Inbox" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton component="" href="#inbox">
                <ListItemIcon>
                  <HomeIcon />
                </ListItemIcon>
                <ListItemText primary="Home" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton component="" href="#inbox">
                <ListItemIcon>
                  <Luggage />
                </ListItemIcon>
                <ListItemText primary="Luggage" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton component="" href="#inbox">
                <ListItemIcon>
                  <Man />
                </ListItemIcon>
                <ListItemText primary="Men" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton component="" href="#inbox">
                <ListItemIcon>
                  <Settings />
                </ListItemIcon>
                <ListItemText primary="Settings " />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton component="" href="#inbox">
                <ListItemIcon>
                  <ModeNightRounded />
                  <Switch
                    onChange={() => setMode(mode == "dark" ? "light" : "dark")}
                  />
                </ListItemIcon>
                <ListItemText primary=" " />
              </ListItemButton>
            </ListItem>
          </List>
        </Box>
      </Box>
    </>
  );
}
