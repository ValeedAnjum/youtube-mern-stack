import React, { Fragment, useState } from "react";
import {
  Button,
  Divider,
  Grid,
  IconButton,
  List,
  Menu,
} from "@material-ui/core";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import AppsIcon from "@material-ui/icons/Apps";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import Brightness4Icon from "@material-ui/icons/Brightness4";
import TranslateIcon from "@material-ui/icons/Translate";
import LanguageIcon from "@material-ui/icons/Language";
import SettingsIcon from "@material-ui/icons/Settings";
import SecurityIcon from "@material-ui/icons/Security";
import HelpIcon from "@material-ui/icons/Help";
import FeedbackIcon from "@material-ui/icons/Feedback";
import KeyboardIcon from "@material-ui/icons/Keyboard";
import LiveTvIcon from "@material-ui/icons/LiveTv";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import FaceIcon from "@material-ui/icons/Face";
import ArtTrackIcon from "@material-ui/icons/ArtTrack";
import YouTubeIcon from "@material-ui/icons/YouTube";

import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import DropdownListContainer from "./DropdownListContainer";
import DropdownListItem from "./DropdownListItem";

const styleForArrowIcon = { width: "0.7rem", height: "0.7rem" };
const ArrowForwardIosIconWithStyle = () => (
  <ArrowForwardIosIcon style={styleForArrowIcon} />
);
const moreDropDownListData = [
  {
    text: "Appearnce: Light",
    Icon: <Brightness4Icon />,
    lastIcon: <ArrowForwardIosIconWithStyle />,
  },
  {
    text: "Language: British English",
    Icon: <TranslateIcon />,
    lastIcon: <ArrowForwardIosIconWithStyle />,
  },
  {
    text: "Location: Pakistan",
    Icon: <LanguageIcon />,
    lastIcon: <ArrowForwardIosIconWithStyle />,
  },
  { text: "Settings", Icon: <SettingsIcon /> },
  { text: "Your data in YouTube", Icon: <SecurityIcon /> },
  { text: "Help", Icon: <HelpIcon /> },
  { text: "Send feedback", Icon: <FeedbackIcon /> },
  { text: "Keyboard shortcuts", Icon: <KeyboardIcon />, divider: true },
  { text: "Restricted Mode: On" },
];

const styleForAppsIcons = { color: "#ff0000" };

const appsDropDownListData = [
  {
    text: "YouTube TV",
    Icon: <LiveTvIcon style={styleForAppsIcons} />,
    divider: true,
  },
  {
    text: "YouTube Music",
    Icon: <PlayCircleFilledIcon style={styleForAppsIcons} />,
  },
  {
    text: "YouTube Kids",
    Icon: <FaceIcon style={styleForAppsIcons} />,
    divider: true,
  },
  { text: "Creator Academy", Icon: <ArtTrackIcon style={styleForAppsIcons} /> },
  {
    text: "YouTube for Artists",
    Icon: <YouTubeIcon style={styleForAppsIcons} />,
  },
];

const appsDropDownList = (list) => (
  <List>
    {list.map(({ text, Icon, lastIcon, divider }, index) => {
      return (
        <Fragment key={index}>
          <DropdownListItem options={{ text, Icon, lastIcon }} />
          {divider ? (
            <Divider style={{ marginBottom: "8px", marginTop: "8px" }} />
          ) : null}
        </Fragment>
      );
    })}
  </List>
);
const NavTabs = ({
  classes,
  moreBtnClickHnd,
  onMenuClose,
  anchorElForMore,
  anchorElForApps,
  appsBtnClickHnd,
}) => {
  const [auth, setAuth] = useState(true);
  return (
    <Grid container justify="flex-end" alignItems="center">
      {!auth ? (
        <Fragment>
          <IconButton
            classes={{ root: classes.disableHoverBgClr }}
            onClick={appsBtnClickHnd}
          >
            <AppsIcon />
          </IconButton>
          {/* menu for app icon button  */}
          <Menu
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
            transitionDuration={0}
            anchorEl={anchorElForApps}
            keepMounted
            open={Boolean(anchorElForApps)}
            onClose={onMenuClose}
            PopoverClasses={{
              paper: classes.dropDownPopOver,
            }}
            getContentAnchorEl={null}
          >
            <DropdownListContainer>
              {appsDropDownList(appsDropDownListData)}
            </DropdownListContainer>
          </Menu>
          <IconButton
            classes={{ root: classes.disableHoverBgClr }}
            onClick={moreBtnClickHnd}
          >
            <MoreVertIcon />
          </IconButton>
          {/* dropdown menu for more icon button  */}
          <Menu
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "right",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            transitionDuration={0}
            anchorEl={anchorElForMore}
            keepMounted
            open={Boolean(anchorElForMore)}
            onClose={onMenuClose}
            PopoverClasses={{
              paper: classes.dropDownPopOver,
            }}
            getContentAnchorEl={null}
          >
            <DropdownListContainer>
              {appsDropDownList(moreDropDownListData)}
            </DropdownListContainer>
          </Menu>
          <Button
            disableRipple
            startIcon={<AccountCircleIcon />}
            className={classes.signinBtn}
          >
            sign in
          </Button>
        </Fragment>
      ) : null}
    </Grid>
  );
};

export default NavTabs;
