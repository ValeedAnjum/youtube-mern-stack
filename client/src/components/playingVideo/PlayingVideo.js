import React from "react";
import { withRouter } from "react-router-dom";
import { Grid, makeStyles } from "@material-ui/core";
import Video from "./Video";
import RelatedVideos from "./RelatedVideos";

const useStyles = makeStyles(() => {
  return {
    videoplaying: {
      padding: "20px 100px 0px 100px",
    },
  };
});
const PlayingVideo = (props) => {
  console.log(props.match.params.id);
  const classes = useStyles();
  return (
    <Grid container className={classes.videoplaying}>
      <Grid item sm={8}>
        <Video />
      </Grid>
      <Grid item sm={4}>
        <RelatedVideos />
      </Grid>
    </Grid>
  );
};

export default withRouter(PlayingVideo);
