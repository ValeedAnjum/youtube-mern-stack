import React from "react";
import { Grid, makeStyles, Paper } from "@material-ui/core";

import PlayingVideo from "./PlayingVideo";
import MiniPlayerFooter from "./MiniPlayerFooter";
import { withRouter } from "react-router-dom";
import VideoTitleAndMore from "./VideoTitleAndMore";

const useStyles = makeStyles(() => {
  return {
    miniPlayerMainContainer: {
      position: "fixed",
      bottom: "0",
      right: "42px",
      height: "89%",
      width: "35%",
      zIndex: "1202",
      backgroundColor: "white",
      borderRadius: "0",
    },
    miniPlayerInnerCon: {
      height: "100%",
    },
    miniPlayerVideoCont: {
      height: "45%",
    },
    VideoTitleAndQueuePlaylistOptionCon: {
      height: "15%",
    },
    miniPlayerVideoItemCon: {
      height: "40%",
      overflowX: "hidden",
      "&::-webkit-scrollbar": {
        width: "0.7em",
      },
      "&::-webkit-scrollbar-thumb": {
        backgroundColor: "#d4d4d4",
        borderRadius: "10px",
      },
    },
  };
});
function MiniPlayer(props) {
  const classes = useStyles();
  if (props.location.pathname.includes("/video/")) return null;
  return (
    <Paper className={classes.miniPlayerMainContainer} elevation={3}>
      <Grid container direction="column" className={classes.miniPlayerInnerCon}>
        <Grid item className={classes.miniPlayerVideoCont}>
          <PlayingVideo />
        </Grid>
        <Grid item className={classes.VideoTitleAndQueuePlaylistOptionCon}>
          <VideoTitleAndMore />
        </Grid>
        <Grid item className={classes.miniPlayerVideoItemCon}>
          <MiniPlayerFooter />
        </Grid>
      </Grid>
    </Paper>
  );
}

export default withRouter(MiniPlayer);
