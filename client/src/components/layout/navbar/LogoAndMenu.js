import {
  Grid,
  IconButton,
  List,
  ListItemIcon,
  ListItem,
  ListItemText,
} from "@material-ui/core";
import React from "react";
import MenuIcon from "@material-ui/icons/Menu";

import YouTubeIcon from "../../youtubeIcon/YoutubeIcon";

const LogoAndMenu = ({ setSideDrawer }) => {
  return (
    <Grid container>
      {/* <IconButton onClick={() => setSideDrawer(true)}>
        <MenuIcon />
      </IconButton>
      <div style={{ width: "80px" }}>
        <YouTubeIcon />
      </div> */}
      <div
      // className={classes.toolbar}
      // style={{ borderBottom: "1px solid #0000001a", display: "flex" }}
      >
        <List>
          <ListItem>
            <ListItemIcon onClick={() => setSideDrawer(true)}>
              <MenuIcon />
            </ListItemIcon>
            <ListItemText>
              <div style={{ width: "80px", cursor: "pointer" }}>
                <YouTubeIcon />
              </div>
            </ListItemText>
          </ListItem>
        </List>
      </div>
    </Grid>
  );
};

export default LogoAndMenu;
