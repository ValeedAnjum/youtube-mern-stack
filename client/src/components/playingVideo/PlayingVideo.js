import React, { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import { Grid, makeStyles } from "@material-ui/core";
import Video from "./Video";
import RelatedVideos from "./RelatedVideos";
import axios from "axios";
import PlayingVideoSkeleton from "./PlayingVideoSkeleton";

const useStyles = makeStyles((theme) => {
  return {
    videoplaying: {
      padding: "20px 100px 0px 100px",
      [theme.breakpoints.down("xs")]: {
        padding: "0px",
      },
    },
  };
});
const PlayingVideo = (props) => {
  // console.log(props.match.params.id);
  const [videoSrc, setVideoSrc] = useState(null);
  const [loadingVideo, setLoadingVideo] = useState(false);
  const { id } = props.match.params;
  const classes = useStyles();
  useEffect(() => {
    fetchVideoIframe();
  }, [id]);
  const fetchVideoIframe = async () => {
    try {
      setLoadingVideo(true);
      const response = await axios.get(`/video/playvideo/${id}`);
      setVideoSrc(response.data.src);
      setLoadingVideo(false);
      // console.log(response.data);
    } catch (error) {
      setLoadingVideo(false);
    }
  };
  return (
    <Grid container className={classes.videoplaying}>
      <Grid item sm={8} xs={12}>
        {videoSrc ? <Video src={videoSrc} /> : <PlayingVideoSkeleton />}
      </Grid>
      <Grid item sm={4} xs={12}>
        <RelatedVideos setVideoSrc={setVideoSrc} />
      </Grid>
    </Grid>
  );
};

export default withRouter(PlayingVideo);
