import React, { Fragment } from "react";

import {
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Menu,
} from "@material-ui/core";
import { videoCardMoreOptions } from "./VideoCardMoreOptionsData";

const MenuForMoreVideoCardOptions = ({
  classes,
  anchorElForMore,
  onMenuClose,
}) => {
  return (
    <Menu
      anchorOrigin={{
        vertical: "top",
        horizontal: "left",
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
      <List>
        {videoCardMoreOptions.map(({ text, icon, divider }, index) => {
          return (
            <Fragment key={index}>
              {divider ? (
                <Divider style={{ marginBottom: "8px", marginTop: "8px" }} />
              ) : null}
              {text ? (
                <ListItem button>
                  <ListItemIcon>{icon}</ListItemIcon>
                  <ListItemText>{text}</ListItemText>
                </ListItem>
              ) : null}
            </Fragment>
          );
        })}
      </List>
    </Menu>
  );
};

export default MenuForMoreVideoCardOptions;
