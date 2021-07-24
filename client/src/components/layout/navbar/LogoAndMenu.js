import { Grid, IconButton } from "@material-ui/core";
import React from "react";
import MenuIcon from "@material-ui/icons/Menu";

import YouTubeIcon from "../../youtubeIcon/YoutubeIcon";

const LogoAndMenu = (props) => {
  const { setSideDrawer } = props;

  const openSideDrawer = () => {
    setSideDrawer(true);
  };
  return (
    <Grid container>
      <IconButton onClick={openSideDrawer}>
        <MenuIcon />
      </IconButton>
      <div style={{ width: "80px" }}>
        <YouTubeIcon />
      </div>
    </Grid>
  );
};

export default LogoAndMenu;
