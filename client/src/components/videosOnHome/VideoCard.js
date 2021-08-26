import React from "react";
import { Grid } from "@material-ui/core";
import { withRouter } from "react-router-dom";
import moment from "moment";
import ChannelLogo from "./ChannelLogo";
import VideoTitleAndMore from "./VideoTitleAndMore";

const VideoCard = (props) => {
  // const { classes, img, title, channelName, views, timeStamp, history, id } =
  //   props;
  const {
    classes,
    history,
    video: {
      title,
      channelName,
      views,
      createdAt,
      thumbnail,
      _id,
      videoDuration,
    },
  } = props;

  const playVideo = () => {
    history.push(`/video/${_id}`);
  };
  return (
    <Grid item sm={3} xs={12} className={classes.videoContainer}>
      <Grid container direction="column" className={classes.contentContainer}>
        {/* video thumbnail  */}
        <Grid item onClick={playVideo} className={classes.timeDuritionCon}>
          <img className={classes.img} src={thumbnail} alt="video_thumbnail" />
          <p className={classes.timeDurition}>{videoDuration}</p>
        </Grid>
        {/* logo title more views and timestamp  */}
        <Grid container className={classes.logoAndHeadingCon}>
          <Grid item sm={2} xs={2} className={classes.channelLogoContainerCon}>
            <ChannelLogo img={thumbnail} classes={classes} />
          </Grid>
          <Grid container item sm={10} xs={10}>
            <VideoTitleAndMore
              playVideo={playVideo}
              classes={classes}
              title={title}
              video={{ img: thumbnail, title, channelName, id: _id }}
            />
            <Grid item sm={12} xs={12}>
              <p className={classes.channel}>{channelName}</p>
            </Grid>
            <Grid item>
              <p className={classes.viewsAndTime}>
                {/* {views} views . {createdAt} */}
                {`${Number(views / 1000).toPrecision(2)}k . views ${moment(
                  createdAt
                ).fromNow()}`}
              </p>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default withRouter(VideoCard);
