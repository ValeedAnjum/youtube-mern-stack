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
  const classes = useStyle();
  useEffect(() => {
    console.log("UE");
    fetchVideos();
    window.addEventListener("scroll", onScrolling);
    return () => {
      console.log("Cleaner");
    };
  }, []);
  const onScrolling = (event) => {
    // console.log(document.documentElement.scrollHeight);
    // console.log(window.innerHeight);
    // console.log(window.scrollY);
    const scroolIsAtBottom =
      document.documentElement.scrollHeight - window.innerHeight - 100 <=
      window.scrollY;
    if (scroolIsAtBottom) {
      fetchVideos();
    }
  };
  const fetchVideos = async () => {
    setLoadingVideos(true);
    const result = await axios.get("/video/randomvideos/12");
    setLoadingVideos(false);

    console.log(result.data);
    setVideos((oldData) => {
      console.log(oldData);
      return [...oldData, ...result.data];
    });
  };
  return (
    <Grid container className={classes.videosContainer}>
      {/* {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((item) => {
        return (
          <VideoCard
            key={item}
            classes={classes}
            title={videosLocal[0].title}
            channelName={videosLocal[0].channelName}
            views={videosLocal[0].views}
            timeStamp={videosLocal[0].timeStamp}
            img={videosLocal[0].img}
          />
        );
      })} */}
      {videos &&
        videos.length > 0 &&
        videos.map((video, index) => {
          return (
            <VideoCard
              key={index}
              classes={classes}
              title={video.title}
              channelName={videosLocal[0].channelName}
              views={videosLocal[0].views}
              timeStamp={videosLocal[0].timeStamp}
              img={video.thumbnail}
            />
          );
        })}
      {/* loading placeholder */}
      {loadingVideos ? <LoadingSkeleton classes={classes} /> : null}
    </Grid>
  );
};

export default VideosOnHome;
