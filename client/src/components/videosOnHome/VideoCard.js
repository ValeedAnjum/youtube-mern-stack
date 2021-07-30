import React from "react";
import { Grid } from "@material-ui/core";
import { withRouter } from "react-router-dom";
import ChannelLogo from "./ChannelLogo";
import VideoTitleAndMore from "./VideoTitleAndMore";

const VideoCard = (props) => {
  const { classes, img, title, channelName, views, timeStamp, history, id } =
    props;
  const playVideo = () => {
    history.push(`/video/${id}`);
  };
  return (
    <Grid item sm={3} xs={12} className={classes.videoContainer}>
      <Grid container direction="column" className={classes.contentContainer}>
        {/* video thumbnail  */}
        <Grid item onClick={playVideo} className={classes.timeDuritionCon}>
          <img className={classes.img} src={img} alt="video_thumbnail" />
          <p className={classes.timeDurition}>8:44</p>
        </Grid>
        {/* logo title more views and timestamp  */}
        <Grid container className={classes.logoAndHeadingCon}>
          <Grid item sm={2} xs={2} className={classes.channelLogoContainerCon}>
            <ChannelLogo img={img} classes={classes} />
          </Grid>
          <Grid container item sm={10} xs={10}>
            <VideoTitleAndMore
              playVideo={playVideo}
              classes={classes}
              title={title}
            />
            <Grid item sm={12} xs={12}>
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

export default withRouter(VideoCard);
