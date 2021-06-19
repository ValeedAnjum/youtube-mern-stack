import React from "react";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import VideoContainer from "./VideoContainer";
const videos = [
  {
    img: "https://i.ytimg.com/vi/PcHa6xPvlbg/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDBi0mZN-OTmcoxDmZIgO99T5xBoA",
    title:
      "Raqs-e-Bismil | Episode 25 | Presented by Master Paints, Powered by West Marina & Sandal",
    channelName: "HUM TV",
    views: "10K",
    videoLength: "3 hours ago",
  },
];

const useStyle = makeStyles(() => {
  return {
    videosContainer: {
      padding: "10px",
    },
    videoContainer: {
      padding: "3px",
    },
    contentContainer: {
      cursor: "pointer",
    },
    img: {
      width: "100%",
    },
    channelLogoContainer: {
      border: "1px solid black",
      width: "30px",
      height: "30px",
      borderRadius: "50%",
    },
    channelLogoImg: {
      width: "100%",
      height: "inherit",
      borderRadius: "50%",
    },
    moreVertiIcon: {
      "&:hover": {
        backgroundColor: "transparent",
      },
    },
  };
});
const VideosOnHome = () => {
  const classes = useStyle();
  return (
    <Grid container className={classes.videosContainer}>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => {
        return (
          <VideoContainer
            key={item}
            classes={classes}
            title={videos[0].title}
            channelName={videos[0].channelName}
            views={videos[0].views}
            videoLength={videos[0].videoLength}
            img={videos[0].img}
          />
        );
      })}
    </Grid>
  );
};

export default VideosOnHome;
