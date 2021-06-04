import React, { Fragment, useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import MenuIcon from "@material-ui/icons/Menu";

import {
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
} from "@material-ui/core";

const draweList = (
  <List>
    {["Home", "Explore"].map((listItem) => (
      <ListItem button>
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
    drawerPaper: {
      width: "240px",
    },
  };
});
const Layout = () => {
  const [SideDrawer, setSideDrawer] = useState(true);
  const classes = useStyle();
  return (
    <Fragment>
      <AppBar position="static" color="primary">
        <Toolbar>
          <IconButton onClick={() => setSideDrawer(true)}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6">YouTube</Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        classes={{ paper: classes.drawerPaper }}
        anchor="left"
        open={SideDrawer}
        onClose={() => setSideDrawer(false)}
      >
        {draweList}
      </Drawer>
    </Fragment>
  );
};

export default Layout;
