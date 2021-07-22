import { Grid, Typography } from "@material-ui/core";
import React, { Fragment } from "react";
import MoreVideoOptions from "./MoreVideoOptions";

const imgSrc =
  "https://i.ytimg.com/vi/PcHa6xPvlbg/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDBi0mZN-OTmcoxDmZIgO99T5xBoA";

const RelatedVideoCard = ({ classes }) => {
  return (
    <Fragment>
      <Grid item sm={5} className={classes.timeDurationcCon}>
        <img src={imgSrc} className={classes.img} alt="video_thumbnail" />
        <p className={classes.timeDuration}>8:22</p>
      </Grid>
      <Grid
        item
        sm={6}
        container
        direction="column"
        className={classes.videoInfoCon}
      >
        <Grid item>
          <Typography className={classes.videoTitle}>
            EP-05 | Mahnoor Valley | Kaghan Series
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
      <Grid item sm={1}>
        <MoreVideoOptions classes={classes} />
      </Grid>
    </Fragment>
  );
};

export default RelatedVideoCard;
