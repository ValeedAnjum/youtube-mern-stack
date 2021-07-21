import React, { useState, Fragment } from "react";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { IconButton, List, makeStyles, Menu } from "@material-ui/core";
import PlaylistPlayIcon from "@material-ui/icons/PlaylistPlay";
import WatchLaterIcon from "@material-ui/icons/WatchLater";
import PlaylistAddIcon from "@material-ui/icons/PlaylistAdd";
import NotInterestedIcon from "@material-ui/icons/NotInterested";
import FlagIcon from "@material-ui/icons/Flag";
import MoreVideoOptionListItems from "../morevideooptionlist/MoreVideoOptionListItems";

const MoreListOptions = [
  { Text: "Add to queue", Icon: <PlaylistPlayIcon /> },
  {
    Text: "Save to Watch later",
    Icon: <WatchLaterIcon />,
  },
  {
    Text: "Save To playlist",
    Icon: <PlaylistAddIcon />,
    divider: true,
  },
  { Text: "Not interested", Icon: <NotInterestedIcon /> },
  { Text: "Report", Icon: <FlagIcon /> },
];
const useStyle = makeStyles(() => {
  return {
    "@global": {
      body: {
        scrollBehavior: "smooth",
        paddingRight: "0px !important",
        overflow: "auto !important",
        "&::-webkit-scrollbar": {
          width: "0.5em",
        },
        "&::-webkit-scrollbar-thumb": {
          backgroundColor: "#d4d4d4",
        },
      },
    },
    list: {
      width: "200px",
      padding: "0",
    },
    dropDownPopOver: {
      borderRadius: "2px",
      "& > .MuiList-root": {
        paddingTop: "4px",
        paddingBottom: "4px",
      },
    },
  };
});

const MoreVideoOptions = () => {
  const [anchorElForMore, setAnchorElForMore] = useState(null);
  const internelClasses = useStyle();

  const moreBtnClickHnd = (event) => {
    setAnchorElForMore(event.currentTarget);
  };
  const onMenuClose = () => {
    setAnchorElForMore(false);
  };

  return (
    <Fragment>
      <IconButton onClick={moreBtnClickHnd}>
        <MoreVertIcon />
      </IconButton>
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
          paper: internelClasses.dropDownPopOver,
        }}
        getContentAnchorEl={null}
      >
        <List className={internelClasses.list}>
          <MoreVideoOptionListItems data={MoreListOptions} />
        </List>
      </Menu>
    </Fragment>
  );
};

export default MoreVideoOptions;
