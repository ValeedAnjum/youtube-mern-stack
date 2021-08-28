import { Grid, IconButton, makeStyles } from "@material-ui/core";
import React from "react";
import MenuIcon from "@material-ui/icons/Menu";

import YouTubeIcon from "../../youtubeIcon/YoutubeIcon";
import { withRouter } from "react-router-dom";

const useStyles = makeStyles(() => {
  return {
    youTubeLogoContainer: {
      width: "80px",
      cursor: "pointer",
    },
    menuIconBtn: {
      "&:hover": {
        backgroundColor: "transparent",
      },
    },
  };
});
const LogoAndMenu = (props) => {
  const classes = useStyles({ l: true });
  const { setSideDrawer } = props;

  const openSideDrawer = () => {
    setSideDrawer(true);
  };
  const goToHomePage = () => {
    props.history.push("/home");
  };
  return (
    <Grid container>
      <IconButton onClick={openSideDrawer} className={classes.menuIconBtn}>
        <MenuIcon />
      </IconButton>
      <div className={classes.youTubeLogoContainer} onClick={goToHomePage}>
        <YouTubeIcon />
      </div>
    </Grid>
  );
};

export default withRouter(LogoAndMenu);
