import React from "react";
import {
  Button,
  Divider,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
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
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import DropdownListItem from "./DropdownListItem";

const moreDropDownListData = [
  {
    text: "Appearnce: Light",
    Icon: <Brightness4Icon />,
    lastIcon: <ArrowForwardIosIcon />,
  },
  {
    text: "Language: British English",
    Icon: <TranslateIcon />,
    lastIcon: <ArrowForwardIosIcon />,
  },
  {
    text: "Location: Pakistan",
    Icon: <LanguageIcon />,
    lastIcon: <ArrowForwardIosIcon />,
  },
  { text: "Settings", Icon: <SettingsIcon /> },
  { text: "Your data in YouTube", Icon: <SecurityIcon /> },
  { text: "Help", Icon: <HelpIcon /> },
  { text: "Send feedback", Icon: <FeedbackIcon /> },
  { text: "Keyboard shortcuts", Icon: <KeyboardIcon /> },
];

const moreDropDownList = moreDropDownListData.map(
  ({ text, Icon, lastIcon }, index) => {
    return <DropdownListItem pro={{ text, Icon, lastIcon }} />;
  }
);
// console.log(moreDropDownList);
const NavTabs = ({ classes, moreBtnClickHnd, onMenuClose, anchorEl }) => {
  return (
    <Grid container justify="flex-end" alignItems="center">
      <IconButton classes={{ root: classes.disableHoverBgClr }}>
        <AppsIcon />
      </IconButton>
      <IconButton
        classes={{ root: classes.disableHoverBgClr }}
        onClick={moreBtnClickHnd}
      >
        <MoreVertIcon />
      </IconButton>
      <Menu
        getContentAnchorEl={null}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        transitionDuration={0}
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={onMenuClose}
        PopoverClasses={{
          paper: classes.dropDownPopOver,
        }}
      >
        <div className={classes.more}>
          <List>
            {moreDropDownList}
            <Divider />
            <ListItem button style={{ marginTop: "8px" }}>
              <ListItemText primary="Restricted Mode: Off" />
            </ListItem>
          </List>
        </div>
      </Menu>
      <Button
        disableRipple
        startIcon={<AccountCircleIcon />}
        className={classes.signinBtn}
      >
        sign in
      </Button>
    </Grid>
  );
};

export default NavTabs;
