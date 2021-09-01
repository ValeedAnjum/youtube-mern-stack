import { Grid, makeStyles } from "@material-ui/core";
import React from "react";
import RelatedVideoCard from "./RelatedVideoCard";
import RelatedVideoSkeleton from "./RelatedVideoSkeleton";

const useStyles = makeStyles(() => {
  return {
    relatedVideos: {
      padding: "0px 19px 0px 6px",
      overflow: "hidden",
      marginTop: "5px",
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
const RelatedVideos = ({ setVideoSrc, videos, loadingVideos }) => {
  const classes = useStyles();
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
      {loadingVideos ? <RelatedVideoSkeleton /> : null}
    </Grid>
  );
};

export default React.memo(RelatedVideos);
