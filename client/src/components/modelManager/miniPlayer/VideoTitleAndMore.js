import React, { useState } from "react";
import { Grid, IconButton, makeStyles } from "@material-ui/core";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";

const useStyles = makeStyles(() => {
  return {
    miniPlayertitleAndMore: {
      padding: "10px",
      overflow: "hidden",
    },
    videoTitle: {
      fontWeight: "600",
      width: "100%",
      margin: "0",
    },
    queueAndNumebrOfVideosInQueue: {
      margin: "0",
    },
    moreVideoArrowIcon: {
      padding: "3px",
      transition: "0.4s",
    },
    moreVideoArrowIconExpand: {
      transform: "rotate(-180deg)",
      transition: "0.4s",
    },
  };
});
const VideoTitleAndMore = ({
  toggleExpand,
  title,
  totalVideos,
  activeVideoIndex,
}) => {
  const [expand, setExpand] = useState(false);
  const classes = useStyles();
  const toggleExpandLocal = () => {
    setExpand(!expand);
    toggleExpand();
  };
  return (
    <Grid container className={classes.miniPlayertitleAndMore}>
      <Grid item container direction="column" xs={11}>
        <Grid item>
          <p className={classes.videoTitle}>{title}</p>
          {/* {title} */}
        </Grid>
        <Grid item>
          <p className={classes.queueAndNumebrOfVideosInQueue}>
            Queues. {activeVideoIndex}/{totalVideos}
          </p>
        </Grid>
      </Grid>
      <Grid item xs={1}>
        <IconButton
          onClick={toggleExpandLocal}
          className={`${classes.moreVideoArrowIcon} ${
            expand ? classes.moreVideoArrowIconExpand : null
          }`}
        >
          <ExpandLessIcon />
        </IconButton>
      </Grid>
    </Grid>
  );
};

export default VideoTitleAndMore;
