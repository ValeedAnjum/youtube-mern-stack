import React, { useState } from "react";
import { Grid, IconButton, makeStyles } from "@material-ui/core";
import MoreVertIcon from "@material-ui/icons/MoreVert";

import DragHandleIcon from "@material-ui/icons/DragHandle";
import MenuForMoreVideoCardOptions from "./MenuForMoreVideoCardOptions";
// const title =
//   "Christian Sister Accept Islam After She Got Her 2 Answer - Dr. Zakir Naik";
// const image =
//   "https://i.ytimg.com/vi/T5ZlSSOhbzQ/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCE1GtvJ71DA7wgpdS9YMPDCNaloQ";
const useStyles = makeStyles((theme) => {
  return {
    videoItem: {
      padding: "0px 10px 5px 0px",
      "&:hover": {
        backgroundColor: "rgb(242 242 242)",
      },
    },
    imgCon: {
      cursor: "pointer",
    },
    titleAndChannelName: {
      paddingLeft: "5px",
      cursor: "pointer",
    },
    title: {
      fontWeight: "600",
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
    moreVerticIcon: {
      "&:hover": {
        backgroundColor: "transparent",
      },
    },
    dragHandleIcon: {
      "&:hover": {
        backgroundColor: "transparent",
      },
    },
    dragHandleIconCon: {
      cursor: "pointer",
    },
  };
});
const VideosListItem = ({
  video: { img, title, channelName, id },
  videoCardClickHan,
}) => {
  const [anchorElForMore, setAnchorElForMore] = useState(null);
  const moreVideoBtnClickHan = (event) => {
    setAnchorElForMore(event.currentTarget);
  };
  const onMenuClose = () => {
    setAnchorElForMore(null);
  };
  const classes = useStyles();
  return (
    <Grid
      item
      container
      wrap="nowrap"
      alignItems="center"
      className={classes.videoItem}
    >
      <Grid
        item
        className={classes.dragHandleIconCon}
        onClick={() => videoCardClickHan({ title, id })}
      >
        <IconButton className={classes.dragHandleIcon}>
          <DragHandleIcon />
        </IconButton>
      </Grid>
      <Grid item container>
        <Grid
          item
          xs={3}
          className={classes.imgCon}
          onClick={() => videoCardClickHan({ title, id })}
        >
          <img src={img} width="100%" height="100%" />
        </Grid>
        <Grid
          item
          xs={8}
          container
          direction="column"
          // justifyContent="space-between"
          onClick={() => videoCardClickHan({ title, id })}
          className={classes.titleAndChannelName}
        >
          <Grid item className={classes.title}>
            {title}
          </Grid>
          <Grid item className={classes.channel}>
            {channelName}
          </Grid>
        </Grid>
        <Grid item xs={1}>
          <IconButton
            onClick={moreVideoBtnClickHan}
            className={classes.moreVerticIcon}
          >
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
