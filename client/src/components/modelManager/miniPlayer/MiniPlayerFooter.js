import { Grid, IconButton, makeStyles } from "@material-ui/core";
import React from "react";
import { Fragment } from "react";
import VideoListItem from "./VideosListItem";

const useStyles = makeStyles(() => {
  return {
    queue: {
      fontWeight: "400",
      color: "#767676de",
      margin: "0",
    },
    vidoeItemContainer: {
      padding: "0px 10px",
    },
  };
});
const MiniPlayerFooter = ({ VideoForMiniplayer, videoCardClickHan }) => {
  const classes = useStyles();
  return (
    <Fragment>
      <Grid
        item
        container
        direction="column"
        className={classes.vidoeItemContainer}
      >
        {/* <VideoListItem /> */}
        {VideoForMiniplayer &&
          VideoForMiniplayer.length >= 1 &&
          VideoForMiniplayer.map((video) => (
            <VideoListItem
              videoCardClickHan={videoCardClickHan}
              key={video.id}
              video={video}
            />
          ))}
      </Grid>
    </Fragment>
  );
};

export default MiniPlayerFooter;
