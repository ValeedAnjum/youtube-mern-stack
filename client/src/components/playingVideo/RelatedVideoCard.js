import { Grid, Typography } from "@material-ui/core";
import moment from "moment";
import React, { Fragment } from "react";
import { withRouter } from "react-router-dom";
import MoreVideoOptions from "./MoreVideoOptions";

const RelatedVideoCard = ({ classes, video, history, setVideoSrc }) => {
  const {
    thumbnail,
    title,
    _id,
    channelName,
    videoDuration,
    views,
    createdAt,
  } = video;
  const playVideo = () => {
    setVideoSrc(null);
    history.push(`/video/${_id}`);
  };
  return (
    <Fragment>
      <Grid item sm={5} xs={5} className={classes.timeDurationcCon}>
        <img
          src={thumbnail}
          className={classes.img}
          alt="video_thumbnail"
          onClick={playVideo}
        />
        <p className={classes.timeDuration}>{videoDuration}</p>
      </Grid>
      <Grid
        item
        sm={6}
        xs={6}
        container
        direction="column"
        className={classes.videoInfoCon}
      >
        <Grid item>
          <Typography className={classes.videoTitle} onClick={playVideo}>
            {title.length > 43 ? title.slice(0, 40) + "..." : title}
          </Typography>
        </Grid>
        <Grid item>
          <Typography className={classes.channelName}>
            {channelName.toUpperCase()}
          </Typography>
        </Grid>
        <Grid item>
          <Typography className={classes.views}>
            {views > 1000 ? (views / 1000).toPrecision(2) + "k" : views} view .{" "}
            {moment(createdAt).fromNow()}
          </Typography>
        </Grid>
      </Grid>
      <Grid item sm={1} xs={1}>
        <MoreVideoOptions
          video={{ img: thumbnail, title, channelName, id: _id }}
          classes={classes}
        />
      </Grid>
    </Fragment>
  );
};

export default withRouter(RelatedVideoCard);
