import React, { Fragment, useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import SearchIcon from "@material-ui/icons/Search";
import MenuIcon from "@material-ui/icons/Menu";
import MicIcon from "@material-ui/icons/Mic";

import {
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
  Grid,
  Button,
} from "@material-ui/core";
import YouTubeIcon from "../youtubeIcon/YoutubeIcon";

const drawerList = () => (
  <List>
    {["Home", "Explore"].map((listItem, index) => (
      <ListItem button key={index}>
        <ListItemIcon>
          <MenuIcon />
        </ListItemIcon>
        <ListItemText>{listItem}</ListItemText>
      </ListItem>
    ))}
  </List>
);

const useStyle = makeStyles(() => {
  return {
    appbar: {
      backgroundColor: "transparent",
      borderBottom: "1px solid #00000026",
      boxShadow: "none",
    },
    drawerPaper: {
      width: "240px",
    },
  };
});
const Layout = () => {
  const [SideDrawer, setSideDrawer] = useState(false);
  const classes = useStyle();
  return (
    <Fragment>
      <AppBar position="static" color="primary" className={classes.appbar}>
        <Toolbar>
          <Grid container>
            <Grid item sm={3}>
              <Grid container>
                <IconButton onClick={() => setSideDrawer(true)}>
                  <MenuIcon />
                </IconButton>
                <div style={{ width: "80px" }}>
                  <YouTubeIcon />
                </div>
              </Grid>
            </Grid>
            {/* Search bar  */}
            <Grid item sm={6}>
              <Grid container justify="center" style={{ height: "100%" }}>
                <input type="text" placeholder="Search" />
                <button aria-label="search-video">
                  <SearchIcon />
                </button>
                <IconButton>
                  <MicIcon />
                </IconButton>
              </Grid>
            </Grid>
            {/* navtabs  */}
            <Grid item sm={3}>
              <Button>Login</Button>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <Drawer
        classes={{ paper: classes.drawerPaper }}
        anchor="left"
        open={SideDrawer}
        onClose={() => setSideDrawer(false)}
      >
        {drawerList()}
      </Drawer>
    </Fragment>
  );
};

export default Layout;
