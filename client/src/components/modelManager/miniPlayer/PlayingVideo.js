import React from "react";
import CloseIcon from "@material-ui/icons/Close";
import FullscreenIcon from "@material-ui/icons/Fullscreen";
import Video from "./Video";
import { Grid, IconButton, makeStyles } from "@material-ui/core";
const video = {
  title:
    "Christian Sister Accept Islam After She Got Her 2 Answer - Dr. Zakir Naik",
  searchTitle: "Christian Sister Accept Islam - Dr. Zakir Naik",
  thumbnail:
    "https://i.ytimg.com/vi/T5ZlSSOhbzQ/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCE1GtvJ71DA7wgpdS9YMPDCNaloQ",
  src: `https://www.youtube.com/embed/T5ZlSSOhbzQ`,
};

const PlayingVideo = ({ videoSrc, classes }) => {
  return (
    <>
      <Grid
        className={classes.optionsOnVideoCon}
        item
        xs={12}
        container
        justifyContent="space-between"
      >
        <Grid item>
          <IconButton className={classes.videoOptionsIcons}>
            <FullscreenIcon />
          </IconButton>
        </Grid>
        <Grid item>
          <IconButton className={classes.videoOptionsIcons}>
            <CloseIcon />
          </IconButton>
        </Grid>
      </Grid>
      <Video src={videoSrc} />
    </>
  );
};

export default PlayingVideo;
