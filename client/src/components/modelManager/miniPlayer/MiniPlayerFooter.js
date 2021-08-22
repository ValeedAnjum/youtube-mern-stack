import { Grid, IconButton, makeStyles } from "@material-ui/core";
import React from "react";
import { Fragment } from "react";
import VideosList from "./VideosListItem";

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
const MiniPlayerFooter = () => {
  const classes = useStyles();
  return (
    <Fragment>
      <Grid
        item
        container
        direction="column"
        className={classes.vidoeItemContainer}
      >
        <VideosList />
        <VideosList />
        <VideosList />
        <VideosList />
        <VideosList />
        <VideosList />
        <VideosList />
        <VideosList />
        <VideosList />
        <VideosList />
      </Grid>
    </Fragment>
  );
};

export default MiniPlayerFooter;
