import React, { Fragment } from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

import YouTubeIcon from "../../youtubeIcon/YoutubeIcon";
import SidenavBarListData from "../../sidenavbarlistdata/SidenavBarListData";
import { drawerListContentData } from "./listdataInArray";

const useStyle = makeStyles((theme) => {
  return {
    drawerPaper: {
      width: "230px",
      "&::-webkit-scrollbar": {
        width: "0.5em",
      },
      "&::-webkit-scrollbar-thumb": {
        backgroundColor: "#d4d4d4",
      },
    },
    toolbar: theme.mixins.toolbar,
    list: {
      padding: 0,
    },
  };
});

const MDrawer = ({ setSideDrawer, SideDrawer }) => {
  const classes = useStyle();

  return (
    <Fragment>
      <Drawer
        classes={{ paper: classes.drawerPaper }}
        anchor="left"
        open={SideDrawer}
        onClose={() => setSideDrawer(false)}
      >
        <List className={classes.list} onClick={() => setSideDrawer(false)}>
          <div
            className={classes.toolbar}
            style={{ borderBottom: "1px solid #0000001a", display: "flex" }}
          >
            <ListItem>
              <ListItemIcon onClick={() => setSideDrawer(false)}>
                <MenuIcon />
              </ListItemIcon>
              <ListItemText>
                <div style={{ width: "80px", cursor: "pointer" }}>
                  <YouTubeIcon />
                </div>
              </ListItemText>
            </ListItem>
          </div>
          <SidenavBarListData listItems={drawerListContentData} />
        </List>
      </Drawer>
    </Fragment>
  );
};

export default MDrawer;
