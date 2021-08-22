import { Grid, IconButton, makeStyles } from "@material-ui/core";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import React from "react";
import { Fragment } from "react";
import VideosList from "./VideosList";
const title =
  "Christian Sister Accept Islam After She Got Her 2 Answer - Dr. Zakir Naik";
const useStyles = makeStyles(() => {
  return {
    miniPlayertitleAndMore: {
      padding: "10px",
      overflow: "hidden",
    },
    moreVideoArrowIcon: {
      padding: "3px",
    },
    videoTitle: {
      textOverflow: "ellipsis",
      fontWeight: "600",
      //   whiteSpace: "nowrap",
      width: "100%",
      overflow: "hidden",
      margin: "0",
    },
    queue: {
      fontWeight: "400",
      color: "#767676de",
      margin: "0",
    },
    vidoeItemContainer: {
      padding: "0px 10px",
    },
  };
});
const MiniPlayerFooter = () => {
  const classes = useStyles();
  return (
    <Fragment>
      <Grid container className={classes.miniPlayertitleAndMore}>
        <Grid item container direction="column" sm={11}>
          <Grid item className={classes.videoTitle}>
            {/* <p className={classes.videoTitle}>{title}</p> */}
            {title}
          </Grid>
          <Grid item>
            <p className={classes.queue}>Queues. 2/9</p>
          </Grid>
        </Grid>
        <Grid item sm={1}>
          <IconButton className={classes.moreVideoArrowIcon}>
            <KeyboardArrowDownIcon />
          </IconButton>
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction="column"
        className={classes.vidoeItemContainer}
      >
        <VideosList />
        <VideosList />
        <VideosList />
        <VideosList />
        <VideosList />
        <VideosList />
        <VideosList />
        <VideosList />
        <VideosList />
        <VideosList />
      </Grid>
    </Fragment>
  );
};

export default MiniPlayerFooter;
