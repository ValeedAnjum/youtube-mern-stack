import React, { useState, useEffect } from "react";
import { Grid, makeStyles, Paper, Slide } from "@material-ui/core";
import Skeleton from "@material-ui/lab/Skeleton";

import axios from "axios";
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
function MiniPlayer({ location, VideoForMiniplayer }) {
  const [expand, setExpand] = useState(false);
  const [videoSrc, setVideoSrc] = useState({ src: null, title: null });
  const classes = useStyles();
  const toggleExpand = () => {
    setExpand(!expand);
  };
  useEffect(() => {
    const fetchActiveVideoSrc = async () => {
      const response = await axios.get(
        `/video/playvideo/${VideoForMiniplayer[0].id}`
      );
      setVideoSrc({
        src: response.data.src,
        title: VideoForMiniplayer[0].title,
      });
    };
    fetchActiveVideoSrc();
  }, []);

  const videoCardClickHan = (video) => {
    console.log(video);
  };
  if (location.pathname.includes("/video/")) return null;
  return (
    <Slide direction="up" in={true} mountOnEnter unmountOnExit>
      <Paper className={classes.miniPlayerMainContainer} elevation={3}>
        <Grid container item xs={12} className={classes.miniPlayerInnerCon}>
          <Grid item xs={12} className={classes.miniPlayerVideoCont}>
            {videoSrc.src ? (
              <PlayingVideo videoSrc={videoSrc.src} />
            ) : (
              <Skeleton variant="rect" height={250} />
            )}
          </Grid>
          <Grid
            item
            xs={12}
            className={classes.VideoTitleAndQueuePlaylistOptionCon}
          >
            <VideoTitleAndMore
              toggleExpand={toggleExpand}
              title={videoSrc.title}
            />
          </Grid>
          <Grid
            item
            xs={12}
            className={`${classes.miniPlayerVideoItemCon} ${
              expand ? classes.expand : null
            }`}
          >
            <MiniPlayerFooter
              videoCardClickHan={videoCardClickHan}
              VideoForMiniplayer={VideoForMiniplayer}
            />
          </Grid>
        </Grid>
      </Paper>
    </Slide>
  );
}

export default withRouter(MiniPlayer);
