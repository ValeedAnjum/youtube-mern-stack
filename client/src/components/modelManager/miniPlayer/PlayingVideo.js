import React from "react";
import CloseIcon from "@material-ui/icons/Close";
import FullscreenIcon from "@material-ui/icons/Fullscreen";
import { connect } from "react-redux";
import Video from "./Video";
import { Hidden, IconButton } from "@material-ui/core";

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
      <Hidden smUp>
        <IconButton
          onClick={clearTheQueue}
          className={classes.clearQueueIconForMobile}
        >
          <CloseIcon />
        </IconButton>
      </Hidden>
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
