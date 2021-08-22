import React, { useState } from "react";
import {
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
  Menu,
} from "@material-ui/core";
import MoreVertIcon from "@material-ui/icons/MoreVert";

import DragHandleIcon from "@material-ui/icons/DragHandle";
import MenuForMoreVideoCardOptions from "./MenuForMoreVideoCardOptions";
const title = "Christian Sister Accept Islam After She ...";
const image =
  "https://i.ytimg.com/vi/T5ZlSSOhbzQ/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCE1GtvJ71DA7wgpdS9YMPDCNaloQ";
const useStyles = makeStyles(() => {
  return {
    videoItem: {
      padding: "0px 10px 5px 0px",
    },
    titleAndChannelName: {
      paddingLeft: "5px",
    },
    title: {
      fontWeight: "600",
      whiteSpace: "nowrap",
      overflow: "hidden",
      width: "100%",
      textOverflow: "ellipsis",
    },
    channel: {
      color: "#767676de",
    },
    dropDownPopOver: {
      boxShadow: "none",
      borderRadius: "0",
      border: "1px solid #00000026",
      "&::-webkit-scrollbar": {
        width: "0.5em",
      },
      "&::-webkit-scrollbar-thumb": {
        backgroundColor: "#d4d4d4",
      },
    },
  };
});
const VideosListItem = () => {
  const [anchorElForMore, setAnchorElForMore] = useState(null);
  const moreVideoBtnClickHan = (event) => {
    setAnchorElForMore(event.currentTarget);
  };
  const onMenuClose = () => {
    setAnchorElForMore(null);
  };
  const classes = useStyles();
  return (
    <Grid item container wrap="nowrap" className={classes.videoItem}>
      <Grid item>
        <IconButton>
          <DragHandleIcon />
        </IconButton>
      </Grid>
      <Grid item container>
        <Grid item sm={3}>
          <img src={image} width="100%" height="100%" />
        </Grid>
        <Grid
          item
          sm={8}
          container
          direction="column"
          justifyContent="space-between"
          className={classes.titleAndChannelName}
        >
          <Grid item className={classes.title}>
            {title}
          </Grid>
          <Grid item className={classes.channel}>
            Dr.Zakir
          </Grid>
        </Grid>
        <Grid item sm={1}>
          <IconButton onClick={moreVideoBtnClickHan}>
            <MoreVertIcon />
          </IconButton>
          <MenuForMoreVideoCardOptions
            classes={classes}
            anchorElForMore={anchorElForMore}
            onMenuClose={onMenuClose}
          />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default VideosListItem;
