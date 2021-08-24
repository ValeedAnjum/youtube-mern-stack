import React, { useState } from "react";
import { Grid, makeStyles, Paper, Fade, Slide } from "@material-ui/core";

import PlayingVideo from "./PlayingVideo";
import MiniPlayerFooter from "./MiniPlayerFooter";
import { withRouter } from "react-router-dom";
import VideoTitleAndMore from "./VideoTitleAndMore";

const useStyles = makeStyles((theme) => {
  return {
    miniPlayerMainContainer: {
      position: "fixed",
      bottom: "0",
      right: "42px",
      // height: "89%",
      width: "30%",
      zIndex: "1202",
      backgroundColor: "white",
      borderRadius: "0",
      [theme.breakpoints.down("md")]: {
        left: "0",
        // height: "50%",
        width: "100%",
      },
    },
    miniPlayerInnerCon: {
      height: "100%",
    },
    miniPlayerVideoCont: {
      height: "250px",
      [theme.breakpoints.down("md")]: {
        width: "100%",
      },
    },

    VideoTitleAndQueuePlaylistOptionCon: {
      // height: "15%",
    },
    miniPlayerVideoItemCon: {
      height: "0px",
      transition: "0.3s",
      overflowX: "hidden",
      "&::-webkit-scrollbar": {
        width: "0.7em",
      },
      "&::-webkit-scrollbar-thumb": {
        backgroundColor: "#d4d4d4",
        borderRadius: "10px",
      },
    },
    expand: {
      height: "200px",
      transition: "0.3s",
    },
  };
});
function MiniPlayer(props) {
  const [expand, setExpand] = useState(false);
  const classes = useStyles();
  const toggleExpand = () => {
    setExpand(!expand);
  };
  if (props.location.pathname.includes("/video/")) return null;
  return (
    <Slide direction="up" in={true} mountOnEnter unmountOnExit>
      <Paper className={classes.miniPlayerMainContainer} elevation={3}>
        <Grid container item xs={12} className={classes.miniPlayerInnerCon}>
          <Grid item xs={12} className={classes.miniPlayerVideoCont}>
            <PlayingVideo />
          </Grid>
          <Grid
            item
            xs={12}
            className={classes.VideoTitleAndQueuePlaylistOptionCon}
          >
            <VideoTitleAndMore toggleExpand={toggleExpand} />
          </Grid>
          <Grid
            item
            xs={12}
            className={`${classes.miniPlayerVideoItemCon} ${
              expand ? classes.expand : null
            }`}
          >
            <MiniPlayerFooter />
          </Grid>
        </Grid>
      </Paper>
    </Slide>
  );
}

export default withRouter(MiniPlayer);
