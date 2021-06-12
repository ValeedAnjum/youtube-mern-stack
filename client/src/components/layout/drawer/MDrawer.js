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
import HomeIcon from "@material-ui/icons/Home";
import ExploreIcon from "@material-ui/icons/Explore";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import HistoryIcon from "@material-ui/icons/History";
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic";
import SportsIcon from "@material-ui/icons/Sports";
import SportsEsportsIcon from "@material-ui/icons/SportsEsports";
import AnnouncementIcon from "@material-ui/icons/Announcement";
import SignalCellularAltIcon from "@material-ui/icons/SignalCellularAlt";
import SlowMotionVideoIcon from "@material-ui/icons/SlowMotionVideo";
import AddIcon from "@material-ui/icons/Add";
import SignalWifi4BarIcon from "@material-ui/icons/SignalWifi4Bar";
import SettingsIcon from "@material-ui/icons/Settings";
import FlagIcon from "@material-ui/icons/Flag";
import HelpIcon from "@material-ui/icons/Help";

import YouTubeIcon from "../../youtubeIcon/YoutubeIcon";
import SidenavBarListData from "../../sidenavbarlistdata/SidenavBarListData";

const drawerListContentData = [
  {
    Text: "Home",
    Icon: <HomeIcon />,
  },
  {
    Text: "Explore",
    Icon: <ExploreIcon />,
  },
  {
    Text: "Subscritions",
    Icon: <SubscriptionsIcon />,
    Dividr: true,
  },
  {
    Text: "Library",
    Icon: <VideoLibraryIcon />,
  },
  {
    Text: "History",
    Icon: <HistoryIcon />,
    Dividr: true,
  },
  {
    Heading: "best of youtube",
  },
  {
    Text: "Music",
    Icon: <LibraryMusicIcon />,
  },
  {
    Text: "Sports",
    Icon: <SportsIcon />,
  },
  {
    Text: "Gaming",
    Icon: <SportsEsportsIcon />,
  },
  {
    Text: "News",
    Icon: <AnnouncementIcon />,
  },
  {
    Text: "Live",
    Icon: <SignalCellularAltIcon />,
  },
  {
    Text: "360 videos",
    Icon: <SlowMotionVideoIcon />,
    Dividr: true,
  },
  {
    Text: "Browse channels",
    Icon: <AddIcon />,
    Dividr: true,
  },
  {
    Heading: "more from youtube",
  },
  {
    Text: "Live",
    Icon: <SignalWifi4BarIcon />,
    Dividr: true,
  },
  {
    Text: "Settings",
    Icon: <SettingsIcon />,
  },
  {
    Text: "Report history",
    Icon: <FlagIcon />,
  },
  {
    Text: "Help",
    Icon: <HelpIcon />,
  },
  {
    Text: "Send feedback",
    Icon: <AnnouncementIcon />,
    Dividr: true,
  },
];

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
          {/* {drawerListContent(drawerListContentData)} */}
          {/* list data container  */}
          <SidenavBarListData listItems={drawerListContentData} />
        </List>
      </Drawer>
    </Fragment>
  );
};

export default MDrawer;
