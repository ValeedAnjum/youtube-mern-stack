import React from "react";
import { Grid } from "@material-ui/core";
import { withRouter } from "react-router-dom";
import ChannelLogo from "./ChannelLogo";
import VideoTitleAndMore from "./VideoTitleAndMore";

const VideoCard = (props) => {
  const { classes, img, title, channelName, views, timeStamp, history } = props;
  const playVideo = () => {
    history.push("/video/Iamid");
  };
  return (
    <Grid item sm={3} className={classes.videoContainer}>
      <Grid container direction="column" className={classes.contentContainer}>
        {/* video thumbnail  */}
        <Grid item onClick={playVideo} className={classes.timeDuritionCon}>
          <img className={classes.img} src={img} alt="video_thumbnail" />
          <p className={classes.timeDurition}>8:44</p>
        </Grid>
        {/* logo title more views and timestamp  */}
        <Grid container>
          <Grid item sm={2}>
            <ChannelLogo img={img} classes={classes} />
          </Grid>
          <Grid container item sm={10}>
            <VideoTitleAndMore
              playVideo={playVideo}
              classes={classes}
              title={title}
            />
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

export default withRouter(VideoCard);
