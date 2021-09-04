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
import { base } from "../../store/util/BASE_API_ADDRESS";
import VideoInfoAndOptions from "./VideoInfoAndOptions";

const useStyles = makeStyles((theme) => {
  return {
    videoplaying: {
      padding: "20px 100px 0px 100px",
      [theme.breakpoints.down("sm")]: {
        padding: "0px",
      },
    },
  };
});
const PlayingVideo = ({ match, VideosForMiniPlayer, ClearTheQueue }) => {
  // console.log(props.match.params.id);
  const [videoSrc, setVideoSrc] = useState(null);
  const [videoId, setVideoId] = useState(null);
  //for related videos
  const [relatedVideos, setRelatedVideos] = useState([]);
  const [loadingRelatedVideos, setLoadingRelatedVideos] = useState(false);
  const [isFetching, setIsFetching] = useState(false);
  const { id } = match.params;
  const classes = useStyles();
  useEffect(() => {
    const fetchVideoIframe = async () => {
      try {
        setVideoSrc(null);
        // const response = await axios.get(`/video/playvideo/${id}`);
        const response = await axios.get(`${base}/video/playvideo/${id}`);
        setVideoSrc(response.data.src);
        setVideoId(response.data._id);
        // console.log(response.data);
      } catch (error) {
        setVideoSrc(null);
        setVideoId(null);
      }
    };
    const fetchRelatedVideos = async () => {
      try {
        setLoadingRelatedVideos(true);
        // const result = await axios.get("/video/randomvideos/12");
        const result = await axios.get(`${base}/video/randomvideos/12`);
        const uniqueVids = result.data.filter((vid) => vid._id !== id);
        setLoadingRelatedVideos(false);
        setRelatedVideos(uniqueVids);
      } catch (error) {
        setLoadingRelatedVideos(false);
        console.log(error.message);
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
    const fetchRelatedVideosOnScrolling = async () => {
      try {
        // const result = await axios.get("/video/randomvideos/12");
        const result = await axios.get(`${base}/video/randomvideos/12`);
        const uniqueVids = result.data.filter((vid) => vid._id !== id);
        setIsFetching(false);
        setRelatedVideos((data) => [...data, ...uniqueVids]);
      } catch (error) {
        setLoadingRelatedVideos(false);
        console.log(error.message);
      }
    };
    fetchRelatedVideosOnScrolling();
  }, [isFetching, id]);

  useEffect(() => {
    return () => {
      document.getElementsByTagName("title")[0].innerText = "YouTube";
    };
  }, []);

  const onScrolling = async () => {
    const scrollHeight = document.documentElement.scrollHeight;
    const winInerHeight = window.innerHeight;
    const scroolIsAtBottom =
      scrollHeight - winInerHeight - 100 <= window.scrollY;
    if (scroolIsAtBottom) {
      setIsFetching(true);
    }
  };

  return (
    <Grid container className={classes.videoplaying}>
      <Grid item md={8} sm={12} xs={12}>
        {videoSrc ? <Video src={videoSrc} /> : <PlayingVideoSkeleton />}
        {videoId && <VideoInfoAndOptions videoId={videoId} />}
      </Grid>
      <Grid item md={4} sm={12} xs={12}>
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
