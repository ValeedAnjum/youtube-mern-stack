import React from "react";
import { Grid, IconButton, makeStyles } from "@material-ui/core";
import MoreVertIcon from "@material-ui/icons/MoreVert";

import DragHandleIcon from "@material-ui/icons/DragHandle";
const title = "Christian Sister Accept Islam After She ...";
const image =
  "https://i.ytimg.com/vi/T5ZlSSOhbzQ/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCE1GtvJ71DA7wgpdS9YMPDCNaloQ";
const useStyles = makeStyles(() => {
  return {
    videoItem: {
      paddingRight: "10px",
    },
    titleAndChannelName: {
      paddingLeft: "5px",
    },
    title: {
      fontWeight: "600",
    },
    channel: {
      color: "#767676de",
    },
  };
});
const VideosList = () => {
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
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default VideosList;
