import React, { useState } from "react";
import { Grid, IconButton, makeStyles } from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { v4 as uuidv4 } from "uuid";

import MiniVideoCard from "../miniVideoCard/MiniVideoCard";
import { videoCardMoreOptions } from "./VideoCardMoreOptionData";
import { withRouter } from "react-router-dom";

const useStyles = makeStyles((theme) => {
  return {
    queue: {
      padding: "0px 10px",
      marginBottom: "10px",
      [theme.breakpoints.down("xs")]: {
        padding: "0px",
      },
    },
    queueCon: {
      border: "1px solid rgb(0 0 0 / 14%)",
      [theme.breakpoints.down("xs")]: {
        border: "none",
      },
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
      // transform: "rotate(0deg)",
      transition: "0.3s",
    },
    expandIconExpended: {
      transform: "rotate(180deg)",
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
const Queue = ({ VideosForMiniPlayer, history, ClearTheQueue }) => {
  const classes = useStyles();
  const [activeVideo, setActiveVideo] = useState(1);
  const [expand, setExpand] = useState(true);
  const expandToggle = () => {
    setExpand(!expand);
  };
  const videoCardClickHan = (id, index) => {
    setActiveVideo(index + 1);
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
              {activeVideo}/{VideosForMiniPlayer.length}
            </Grid>
            <Grid item xs={6} className={classes.expandIconCon}>
              <IconButton
                onClick={expandToggle}
                className={`${
                  expand ? classes.expandIcon : classes.expandIconExpended
                }`}
              >
                <ExpandMoreIcon />
              </IconButton>
            </Grid>
          </Grid>
          <Grid item className={classes.clearBtnCon}>
            <button className={classes.clearBtn} onClick={ClearTheQueue}>
              CLEAR
            </button>
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

export default withRouter(React.memo(Queue));
