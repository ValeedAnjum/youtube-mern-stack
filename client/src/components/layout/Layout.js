import React, { Fragment, useState } from "react";
import MenuIcon from "@material-ui/icons/Menu";

import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
} from "@material-ui/core";
import Navbar from "./navbar/Navbar";

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
      <Navbar setSideDrawer={setSideDrawer} />
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
