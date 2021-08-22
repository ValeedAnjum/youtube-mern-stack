import React, { useState } from "react";
import { Grid, IconButton, makeStyles } from "@material-ui/core";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
const title =
  "Christian Sister Accept Islam After She Got Her 2 Answer - Dr. Zakir Naik";

const useStyles = makeStyles(() => {
  return {
    miniPlayertitleAndMore: {
      padding: "10px",
      overflow: "hidden",
    },
    videoTitle: {
      textOverflow: "ellipsis",
      fontWeight: "600",
      //   whiteSpace: "nowrap",
      width: "100%",
      overflow: "hidden",
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
const VideoTitleAndMore = () => {
  const [expand, setExpand] = useState(false);
  const classes = useStyles();
  const toggleExpand = () => {
    setExpand(!expand);
  };
  return (
    <Grid container className={classes.miniPlayertitleAndMore}>
      <Grid item container direction="column" sm={11}>
        <Grid item>
          <p className={classes.videoTitle}>{title}</p>
          {/* {title} */}
        </Grid>
        <Grid item>
          <p className={classes.queueAndNumebrOfVideosInQueue}>Queues. 2/9</p>
        </Grid>
      </Grid>
      <Grid item sm={1}>
        <IconButton
          onClick={toggleExpand}
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
