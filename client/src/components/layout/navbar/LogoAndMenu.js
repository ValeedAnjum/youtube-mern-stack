import { Grid, IconButton } from "@material-ui/core";
import React from "react";
import MenuIcon from "@material-ui/icons/Menu";

import YouTubeIcon from "../../youtubeIcon/YoutubeIcon";

const LogoAndMenu = ({ setSideDrawer }) => {
  return (
    <Grid container>
      <IconButton onClick={() => setSideDrawer(true)}>
        <MenuIcon />
      </IconButton>
      <div style={{ width: "80px" }}>
        <YouTubeIcon />
      </div>
    </Grid>
  );
};

export default LogoAndMenu;
