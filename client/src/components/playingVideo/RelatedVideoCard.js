import { Grid, Typography } from "@material-ui/core";
import React, { Fragment } from "react";
import { withRouter } from "react-router-dom";
import MoreVideoOptions from "./MoreVideoOptions";

const RelatedVideoCard = ({ classes, video, history, setVideoSrc }) => {
  const { thumbnail, title, _id, channelName } = video;
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
        <p className={classes.timeDuration}>8:22</p>
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
            Travel Diaries Pakistan
          </Typography>
        </Grid>
        <Grid item>
          <Typography className={classes.views}>
            200k view . 1 week ago
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
