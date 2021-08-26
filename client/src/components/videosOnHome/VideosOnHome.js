import React, { useEffect, useState } from "react";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import axios from "axios";
import VideoCard from "./VideoCard";
import LoadingSkeleton from "./LoadingSkeleton";
const videosLocal = [
  {
    img: "https://i.ytimg.com/vi/PcHa6xPvlbg/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDBi0mZN-OTmcoxDmZIgO99T5xBoA",
    title:
      "Raqs-e-Bismil | Episode 25 | Presented by Master Paints, Powered by West Marina & Sandal",
    channelName: "HUM TV",
    views: "10K",
    timeStamp: "3 hours ago",
  },
];

const useStyle = makeStyles((theme) => {
  return {
    videosContainer: {
      padding: "10px",
    },
    videoContainer: {
      padding: "3px",
      userSelect: "none",
    },
    contentContainer: {
      cursor: "pointer",
    },
    img: {
      width: "100%",
    },
    timeDurition: {
      position: "absolute",
      padding: "0px 4px",
      bottom: "13px",
      right: "10px",
      color: "white",
      margin: "0",
      borderRadius: "5px",
      backgroundColor: "#000000ed",
    },
    timeDuritionCon: {
      position: "relative",
      overflow: "hidden",
    },
    channelLogoContainer: {
      width: "30px",
      height: "30px",
      borderRadius: "50%",
      [theme.breakpoints.down("xs")]: {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%,-50%)",
      },
    },
    channelLogoContainerCon: {
      [theme.breakpoints.down("xs")]: {
        position: "relative",
      },
    },
    channelLogoImg: {
      width: "100%",
      height: "inherit",
      borderRadius: "50%",
    },
    title: {
      margin: "0",
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis",
    },
    videoTitleCon: {
      margin: "auto",
    },
    moreVertiIcon: {
      padding: "6px",
      "&:hover": {
        backgroundColor: "transparent",
      },
    },
    channel: {
      margin: "0",
      fontSize: "0.8em",
      color: "#939191c9",
      textTransform: "uppercase",
    },
    viewsAndTime: {
      margin: "0",
      fontSize: "0.8em",
      color: "#939191c9",
    },
    logoAndHeadingCon: {
      flexWrap: "nowrap",
    },
    spinner: {
      width: "30px !important",
      height: "30px !important",
      color: "#939191",
    },
  };
});
const VideosOnHome = () => {
  const [videos, setVideos] = useState([]);
  const [loadingVideos, setLoadingVideos] = useState(false);
  const [isFetching, setIsFetching] = useState(false);
  const classes = useStyle();
  useEffect(() => {
    fetchVideos();
    window.addEventListener("scroll", onScrolling);
    return () => {
      window.removeEventListener("scroll", onScrolling);
    };
  }, []);
  useEffect(() => {
    if (!isFetching) return;
    fetchVideos();
  }, [isFetching]);
  const onScrolling = () => {
    const scrollHeight = document.documentElement.scrollHeight;
    const winInerHeight = window.innerHeight;
    const scroolIsAtBottom =
      scrollHeight - winInerHeight - 100 <= window.scrollY;
    if (scroolIsAtBottom) {
      setIsFetching(true);
    }
  };
  const fetchVideos = async () => {
    setLoadingVideos(true);
    const result = await axios.get("/video/randomvideos/12");
    console.log(result.data);
    setLoadingVideos(false);
    setIsFetching(false);
    setVideos((oldData) => [...oldData, ...result.data]);
  };

  return (
    <Grid container className={classes.videosContainer}>
      {videos &&
        videos.length > 0 &&
        videos.map((video, index) => {
          return <VideoCard key={index} classes={classes} video={video} />;
        })}
      {/* loading placeholder */}
      {loadingVideos ? <LoadingSkeleton classes={classes} /> : null}
    </Grid>
  );
};

export default VideosOnHome;
