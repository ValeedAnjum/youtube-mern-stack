import React, { useState } from "react";
import { Grid, IconButton, makeStyles } from "@material-ui/core";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import { v4 as uuidv4 } from "uuid";

import MiniVideoCard from "../miniVideoCard/MiniVideoCard";
import { videoCardMoreOptions } from "./VideoCardMoreOptionData";
import { withRouter } from "react-router-dom";

const useStyles = makeStyles(() => {
  return {
    queue: {
      padding: "0px 10px",
      marginBottom: "10px",
    },
    queueCon: {
      border: "1px solid rgb(0 0 0 / 14%)",
    },
    queueHeadingCon: {
      backgroundColor: "white",
    },
    queueHeading: {
      fontWeight: "600",
      margin: "0",
    },

    queueTotalAndActiveVideoCon: {
      backgroundColor: "white",
    },
    expandIconCon: {
      backgroundColor: "white",
      textAlign: "right",
    },
    expandIcon: {
      transform: "rotate(0deg)",
      transition: "0.3s",
    },
    expandIconExpended: {
      transform: "rotate(-180deg)",
      transition: "0.3s",
    },
    clearBtnCon: {
      backgroundColor: "white",
      textAlign: "right",
    },
    optionCon: {
      padding: "10px",
      backgroundColor: "white",
    },
    clearBtn: {
      border: "none",
      padding: "0px 10px",
      backgroundColor: "transparent",
      cursor: "pointer",
      fontWeight: "600",
      color: "#0000008f",
    },
    queuesVideoCon: {
      height: "0",
      overflow: "hidden",
    },
    expanded: {
      height: "auto",
      marginTop: "5px",
    },
  };
});
const Queue = ({ VideosForMiniPlayer, history }) => {
  const classes = useStyles();
  const [expand, setExpand] = useState(true);
  const expandToggle = () => {
    setExpand(!expand);
  };
  const videoCardClickHan = (id, index) => {
    console.log(id);
    console.log(history);
    history.push(`/video/${id}`);
  };
  return (
    <Grid container className={classes.queue}>
      <Grid className={classes.queueCon} container direction="column">
        <Grid item className={classes.optionCon}>
          <Grid item className={classes.queueHeadingCon}>
            <p className={classes.queueHeading}>Queue</p>
          </Grid>
          <Grid item container className={classes.queueTotalAndActiveVideoCon}>
            <Grid item xs={6}>
              1/2
            </Grid>
            <Grid item xs={6} className={classes.expandIconCon}>
              <IconButton
                onClick={expandToggle}
                className={`${
                  expand ? classes.expandIcon : classes.expandIconExpended
                }`}
              >
                <ExpandLessIcon />
              </IconButton>
            </Grid>
          </Grid>
          <Grid item className={classes.clearBtnCon}>
            <button className={classes.clearBtn}>CLEAR</button>
          </Grid>
        </Grid>
        <Grid
          item
          className={`${expand ? classes.expanded : classes.queuesVideoCon}`}
        >
          {VideosForMiniPlayer.length >= 1 &&
            VideosForMiniPlayer.map((video, index) => (
              <MiniVideoCard
                videoCardClickHan={() => videoCardClickHan(video.id, index)}
                key={uuidv4()}
                video={video}
                videoCardMoreOptions={videoCardMoreOptions}
              />
            ))}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default withRouter(Queue);
