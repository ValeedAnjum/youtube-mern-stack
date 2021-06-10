import React, { Fragment } from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
  Divider,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import HomeIcon from "@material-ui/icons/Home";
import ExploreIcon from "@material-ui/icons/Explore";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";

import YouTubeIcon from "../../youtubeIcon/YoutubeIcon";

const drawerListContentData = [
  {
    text: "Home",
    Icon: <HomeIcon />,
    Heading: "more from youtube",
  },
  {
    text: "Explore",
    Icon: <ExploreIcon />,
  },
  {
    text: "Subscritions",
    Icon: <SubscriptionsIcon />,
  },
];

const SingleListItem = ({ text, Icon, Heading, Divider }) => (
  <ListItem button>
    {Icon ? <ListItemIcon>{Icon}</ListItemIcon> : null}
    {text ? <ListItemText>{text}</ListItemText> : null}
  </ListItem>
);
const drawerListContent = (listItems) => (
  <Fragment>
    {listItems.map((item, index) => {
      return <SingleListItem key={index} {...item} />;
    })}
  </Fragment>
);

const useStyle = makeStyles((theme) => {
  return {
    drawerPaper: {
      width: "230px",
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
        <List className={classes.list}>
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
          {drawerListContent(drawerListContentData)}
        </List>
      </Drawer>
    </Fragment>
  );
};

export default MDrawer;
