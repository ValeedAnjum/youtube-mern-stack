import React from "react";
import { Grid, IconButton } from "@material-ui/core";
import DragHandleIcon from "@material-ui/icons/DragHandle";
const title = "Christian Sister Accept Islam After She ...";
const image =
  "https://i.ytimg.com/vi/T5ZlSSOhbzQ/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCE1GtvJ71DA7wgpdS9YMPDCNaloQ";
const VideosList = () => {
  return (
    <Grid item container wrap="nowrap">
      <Grid item>
        <IconButton>
          <DragHandleIcon />
        </IconButton>
      </Grid>
      <Grid item container>
        <Grid item sm={3}>
          <img src={image} width="100%" />
        </Grid>
        <Grid
          item
          sm={8}
          container
          direction="column"
          justifyContent="space-between"
        >
          <Grid item>{title}</Grid>
          <Grid item>Channel Name</Grid>
        </Grid>
        <Grid item sm={1}>
          <IconButton>
            <DragHandleIcon />
          </IconButton>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default VideosList;
