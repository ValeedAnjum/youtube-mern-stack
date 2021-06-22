import React from "react";
import { Grid, IconButton } from "@material-ui/core";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { withRouter } from "react-router-dom";

const VideoContainer = (props) => {
  const { classes, img, title, channelName, views, timeStamp, history } = props;
  const playVideo = () => {
    history.push("/video/Iamid");
  };
  return (
    <Grid item sm={3} className={classes.videoContainer}>
      <Grid container direction="column" className={classes.contentContainer}>
        <Grid item onClick={playVideo}>
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
          <Grid container item sm={10}>
            <Grid item sm={10}>
              <p className={classes.title}>
                {title.length > 53 ? title.slice(0, 50) + "..." : title}
              </p>
            </Grid>
            <Grid item sm={2}>
              <IconButton className={classes.moreVertiIcon}>
                <MoreVertIcon />
              </IconButton>
            </Grid>
            <Grid item sm={12}>
              <p className={classes.channel}>{channelName}</p>
            </Grid>
            <Grid item>
              <p className={classes.viewsAndTime}>
                {views} views . {timeStamp}
              </p>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default withRouter(VideoContainer);
