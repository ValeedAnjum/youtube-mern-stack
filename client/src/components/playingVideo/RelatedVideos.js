import { Grid, makeStyles } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { connect } from "react-redux";
import RelatedVideoCard from "./RelatedVideoCard";
import RelatedVideoSkeleton from "./RelatedVideoSkeleton";
import { compose } from "redux";
import { fetchRelatedVideos } from "../../store/actions/videosActions";

const useStyles = makeStyles(() => {
  return {
    relatedVideos: {
      padding: "0px 10px",
    },
    videoInfoCon: {
      paddingLeft: "5px",
    },
    img: {
      width: "100%",
      cursor: "pointer",
    },
    videoTitle: {
      fontSize: "0.9rem",
      fontWeight: "600",
      cursor: "pointer",
    },
    channelName: {
      fontSize: "0.8rem",
      color: "#0000008a",
    },
    views: {
      fontSize: "0.8rem",
      color: "#0000008a",
    },
    moreIcon: {
      padding: "3px",
    },
    timeDurationcCon: {
      position: "relative",
    },
    timeDuration: {
      position: "absolute",
      padding: "0px 4px",
      bottom: "8px",
      right: "5px",
      color: "white",
      margin: "0",
      borderRadius: "5px",
      backgroundColor: "#000000ed",
    },
  };
});
const RelatedVideos = ({ setVideoSrc, videos, loading, fetchVideos }) => {
  // const [videos, setVideos] = useState([]);
  // const [loadingVideos, setLoadingVideos] = useState(false);

  const classes = useStyles();
  useEffect(() => {
    console.log("RV");
    fetchVideos();
    window.addEventListener("scroll", onScrolling);
    return () => {
      window.removeEventListener("scroll", onScrolling);
    };
  }, []);
  const onScrolling = (event) => {
    const scrollHeight = document.documentElement.scrollHeight;
    const winInerHeight = window.innerHeight;
    const scroolIsAtBottom =
      scrollHeight - winInerHeight - 100 <= window.scrollY;
    if (scroolIsAtBottom) {
      fetchVideos();
    }
  };
  return (
    <Grid container className={classes.relatedVideos}>
      {videos &&
        videos.length > 0 &&
        videos.map((video, index) => {
          return (
            <RelatedVideoCard
              key={index}
              video={video}
              setVideoSrc={setVideoSrc}
              classes={classes}
            />
          );
        })}
      {loading ? <RelatedVideoSkeleton /> : null}
    </Grid>
  );
};

const mapState = (state) => {
  // console.log(state.videos.relatedVideos);
  return {
    videos: state.videos.relatedVideos,
    loading: state.videos.loadingRelatedVideos,
  };
};

const mapDispatch = (dispatch) => {
  return {
    fetchVideos: () => dispatch(fetchRelatedVideos()),
  };
};
// export default compose(connect(mapState))(RelatedVideos);
export default connect(mapState, mapDispatch)(RelatedVideos);
