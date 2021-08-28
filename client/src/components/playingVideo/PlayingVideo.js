import React, { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import { Grid, makeStyles } from "@material-ui/core";
import Video from "./Video";
import RelatedVideos from "./RelatedVideos";
import axios from "axios";
import PlayingVideoSkeleton from "./PlayingVideoSkeleton";
import Queue from "./Queue";
import { compose } from "redux";
import { connect } from "react-redux";

const useStyles = makeStyles((theme) => {
  return {
    videoplaying: {
      padding: "20px 100px 0px 100px",
      [theme.breakpoints.down("xs")]: {
        padding: "0px",
      },
    },
  };
});
const PlayingVideo = ({ match, VideosForMiniPlayer, ClearTheQueue }) => {
  // console.log(props.match.params.id);
  const [videoSrc, setVideoSrc] = useState(null);
  const [loadingVideo, setLoadingVideo] = useState(false);
  //for related videos
  const [relatedVideos, setRelatedVideos] = useState([]);
  const [loadingRelatedVideos, setLoadingRelatedVideos] = useState(false);
  const [isFetching, setIsFetching] = useState(false);
  const { id } = match.params;
  const classes = useStyles();
  useEffect(() => {
    const fetchVideoIframe = async () => {
      try {
        // setLoadingVideo(true);
        setVideoSrc(null);
        const response = await axios.get(`/video/playvideo/${id}`);
        setVideoSrc(response.data.src);
        setLoadingVideo(false);
        // console.log(response.data);
      } catch (error) {
        setLoadingVideo(false);
      }
    };
    fetchVideoIframe();
    fetchRelatedVideos();
    window.addEventListener("scroll", onScrolling);
    return () => {
      window.removeEventListener("scroll", onScrolling);
    };
  }, [id]);
  useEffect(() => {
    if (!isFetching) return;
    fetchRelatedVideosOnScrolling();
  }, [isFetching]);

  const fetchRelatedVideos = async () => {
    try {
      setLoadingRelatedVideos(true);
      const result = await axios.get("/video/randomvideos/12");
      setLoadingRelatedVideos(false);
      setRelatedVideos(result.data);
    } catch (error) {
      setLoadingRelatedVideos(false);
      console.log(error.message);
    }
  };
  const onScrolling = async () => {
    const scrollHeight = document.documentElement.scrollHeight;
    const winInerHeight = window.innerHeight;
    const scroolIsAtBottom =
      scrollHeight - winInerHeight - 100 <= window.scrollY;
    if (scroolIsAtBottom) {
      setIsFetching(true);
    }
  };
  const fetchRelatedVideosOnScrolling = async () => {
    try {
      const result = await axios.get("/video/randomvideos/12");
      setIsFetching(false);
      setRelatedVideos((data) => [...data, ...result.data]);
    } catch (error) {
      setLoadingRelatedVideos(false);
      console.log(error.message);
    }
  };
  return (
    <Grid container className={classes.videoplaying}>
      <Grid item sm={8} xs={12}>
        {videoSrc ? <Video src={videoSrc} /> : <PlayingVideoSkeleton />}
      </Grid>
      <Grid item sm={4} xs={12}>
        {VideosForMiniPlayer.length >= 1 && (
          <Queue
            VideosForMiniPlayer={VideosForMiniPlayer}
            ClearTheQueue={ClearTheQueue}
          />
        )}
        <RelatedVideos
          videos={relatedVideos}
          loadingVideos={loadingRelatedVideos}
          setVideoSrc={setVideoSrc}
        />
      </Grid>
    </Grid>
  );
};

const mapState = (state) => {
  return {
    VideosForMiniPlayer: state.videos.videosForMiniPlayer,
  };
};

const mapDispatch = (dispatch) => {
  return {
    ClearTheQueue: () => dispatch({ type: "CLEAR_THE_QUEUE" }),
  };
};
export default compose(
  connect(mapState, mapDispatch),
  withRouter
)(PlayingVideo);
