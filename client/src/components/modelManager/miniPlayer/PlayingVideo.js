import React from "react";
import CloseIcon from "@material-ui/icons/Close";
import FullscreenIcon from "@material-ui/icons/Fullscreen";
import { connect } from "react-redux";
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

const PlayingVideo = ({
  videoSrc,
  classes,
  goToPlayingVideo,
  id,
  ClearTheQueue,
  setVideoSrc,
}) => {
  const clearTheQueue = () => {
    ClearTheQueue();
    setVideoSrc({
      src: null,
      title: null,
      id: null,
    });
  };
  return (
    <>
      <IconButton
        className={classes.fullScreenVideoIcon}
        onClick={() => goToPlayingVideo(id)}
      >
        <FullscreenIcon />
      </IconButton>
      <IconButton onClick={clearTheQueue} className={classes.clearQueueIcon}>
        <CloseIcon />
      </IconButton>

      <Video src={videoSrc} />
    </>
  );
};

const mapDispatch = (dispatch) => {
  return {
    ClearTheQueue: () => dispatch({ type: "CLEAR_THE_QUEUE" }),
  };
};

export default connect(null, mapDispatch)(PlayingVideo);
