import React, { useState, useEffect } from "react";
import { Grid, makeStyles, Paper, Slide } from "@material-ui/core";
import Skeleton from "@material-ui/lab/Skeleton";

import axios from "axios";
import PlayingVideo from "./PlayingVideo";
import MiniPlayerFooter from "./MiniPlayerFooter";
import { withRouter } from "react-router-dom";
import VideoTitleAndMore from "./VideoTitleAndMore";
import { base } from "../../../store/util/BASE_API_ADDRESS";

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
      userSelect: "none",
      [theme.breakpoints.down("md")]: {
        left: "0",
        // height: "50%",
        width: "100%",
      },
    },
    miniPlayerInnerCon: {
      height: "100%",
    },
    fullScreenVideoIcon: {
      position: "absolute",
      top: "50%",
      transform: "translate(0,-50%)",
      color: "white",
      opacity: "0",
      backgroundColor: "rgb(0 0 0 / 22%)",
      "&:hover": {
        backgroundColor: "rgb(0 0 0 / 22%)",
      },
    },
    clearQueueIcon: {
      position: "absolute",
      top: "50%",
      right: "0",
      transform: "translate(0,-50%)",
      color: "white",
      opacity: "0",
      backgroundColor: "rgb(0 0 0 / 22%)",
      "&:hover": {
        backgroundColor: "rgb(0 0 0 / 22%)",
      },
    },
    clearQueueIconForMobile: {
      position: "absolute",
      color: "white",
      left: "50%",
      top: "0",
      transform: "translate(-50%, -50%)",
      backgroundColor: "#00000078",
      "&:hover": {
        backgroundColor: "black",
      },
    },
    miniPlayerVideoCont: {
      height: "250px",
      position: "relative",
      [theme.breakpoints.down("md")]: {
        width: "100%",
      },
      "&:hover": {
        "& $fullScreenVideoIcon": {
          opacity: "1",
          transition: "0.3s",
        },
        "& $clearQueueIcon": {
          opacity: "1",
          transition: "0.3s",
        },
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
function MiniPlayer({ location, VideoForMiniplayer, history }) {
  const [expand, setExpand] = useState(false);
  const [videoSrc, setVideoSrc] = useState({
    src: null,
    title: null,
    id: null,
  });
  const [activeVideo, setActiveVideo] = useState(1);
  const classes = useStyles();

  useEffect(() => {
    const fetchAVideoSrc = async () => {
      const id = VideoForMiniplayer[0].id;
      setVideoSrc((prevState) => ({
        src: null,
        title: prevState.title,
        id: null,
      }));
      // const response = await axios.get(`/video/playvideo/${id}`);
      const response = await axios.get(`${base}/video/playvideo/${id}`);
      setVideoSrc({
        src: response.data.src,
        title: VideoForMiniplayer[0].title,
        id: id,
      });
    };
    fetchAVideoSrc();
  }, []);

  const toggleExpand = () => {
    setExpand(!expand);
  };

  const fetchActiveVideoSrc = async (videoData) => {
    const id = videoData ? videoData.id : VideoForMiniplayer[0].id;
    setVideoSrc((prevState) => ({
      src: null,
      title: prevState.title,
      id: null,
    }));
    // const response = await axios.get(`/video/playvideo/${id}`);
    const response = await axios.get(`${base}/video/playvideo/${id}`);
    setVideoSrc({
      src: response.data.src,
      title: `${videoData ? videoData.title : VideoForMiniplayer[0].title}`,
      id: id,
    });
  };

  const videoCardClickHan = (video, index) => {
    fetchActiveVideoSrc(video);
    setActiveVideo(index + 1);
  };
  const goToPlayingVideo = (id) => {
    history.push(`/video/${id}`);
  };
  if (location.pathname.includes("/video/")) return null;
  return (
    <Slide direction="up" in={true} mountOnEnter unmountOnExit>
      <Paper className={classes.miniPlayerMainContainer} elevation={3}>
        <Grid container item xs={12} className={classes.miniPlayerInnerCon}>
          <Grid item xs={12} className={classes.miniPlayerVideoCont}>
            {videoSrc.src ? (
              <PlayingVideo
                videoSrc={videoSrc.src}
                goToPlayingVideo={goToPlayingVideo}
                id={videoSrc.id}
                classes={classes}
                setVideoSrc={setVideoSrc}
              />
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
              totalVideos={VideoForMiniplayer.length}
              activeVideoIndex={activeVideo}
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
