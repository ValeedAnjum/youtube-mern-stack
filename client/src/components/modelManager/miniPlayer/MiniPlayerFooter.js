import { Grid, IconButton, makeStyles } from "@material-ui/core";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import React from "react";
import VideosList from "./VideosList";
const title =
  "Christian Sister Accept Islam After She Got Her 2 Answer - Dr. Zakir Naik";
const useStyles = makeStyles(() => {
  return {
    miniPlayerFooter: {
      // padding: "10px",
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
  };
});
const MiniPlayerFooter = () => {
  const classes = useStyles();
  return (
    <Grid container className={classes.miniPlayerFooter}>
      <Grid item container direction="column" sm={11}>
        <Grid item>
          <p className={classes.videoTitle}>{title}</p>
        </Grid>
        <Grid item>
          <p className={classes.queue}>Queues. 2/9</p>
        </Grid>
      </Grid>
      <Grid item sm={1}>
        <IconButton>
          <KeyboardArrowDownIcon />
        </IconButton>
      </Grid>
      <Grid item container direction="column">
        <VideosList />
      </Grid>
    </Grid>
  );
};

export default MiniPlayerFooter;
