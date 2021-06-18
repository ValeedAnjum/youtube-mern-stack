import { Grid, IconButton } from "@material-ui/core";
import React from "react";
import { withRouter } from "react-router-dom";
import MenuIcon from "@material-ui/icons/Menu";

import YouTubeIcon from "../../youtubeIcon/YoutubeIcon";

const LogoAndMenu = (props) => {
  const { setSideDrawer, location } = props;

  const openSideDrawer = () => {
    const isOnHome = location.pathname.includes("/home");
    if (!isOnHome) setSideDrawer(true);
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

export default withRouter(LogoAndMenu);
