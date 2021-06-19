import React from "react";
import { Grid, IconButton } from "@material-ui/core";
import MoreVertIcon from "@material-ui/icons/MoreVert";

const VideoContainer = ({
  classes,
  img,
  title,
  channelName,
  views,
  videoLength,
}) => {
  return (
    <Grid item sm={3} className={classes.videoContainer}>
      <Grid container direction="column" className={classes.contentContainer}>
        <Grid item>
          <img className={classes.img} src={img} alt="video_thumbnail" />
        </Grid>
        <Grid container>
          <Grid item sm={2}>
            <div className={classes.channelLogoContainer}>
              <img
                src={img}
                alt="channel_logo"
                className={classes.channelLogoImg}
              />
            </div>
          </Grid>
          <Grid item sm={8}>
            <p>{title}</p>
          </Grid>
          <Grid item sm={1}>
            <IconButton className={classes.moreVertiIcon}>
              <MoreVertIcon />
            </IconButton>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default VideoContainer;
