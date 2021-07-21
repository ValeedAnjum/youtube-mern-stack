import { Grid, makeStyles } from "@material-ui/core";
import React from "react";
import RelatedVideoCard from "./RelatedVideoCard";

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
    },
    videoTitle: {
      fontSize: "0.9rem",
      fontWeight: "600",
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
const RelatedVideos = () => {
  const classes = useStyles();
  return (
    <Grid container className={classes.relatedVideos}>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => {
        return <RelatedVideoCard key={num} classes={classes} />;
      })}
    </Grid>
  );
};

export default RelatedVideos;
