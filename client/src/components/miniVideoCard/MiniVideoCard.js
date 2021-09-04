import React, { useState } from "react";
import { Grid, IconButton, makeStyles } from "@material-ui/core";
import MoreVertIcon from "@material-ui/icons/MoreVert";

import DragHandleIcon from "@material-ui/icons/DragHandle";
import MenuForMoreVideoCardOptions from "./MenuForMoreVideoCardOptions";

const useStyles = makeStyles((theme) => {
  return {
    videoItem: {
      padding: "0px 10px 5px 0px",
      "&:hover": {
        backgroundColor: "rgb(242 242 242)",
      },
    },
    imgCon: {
      cursor: "pointer",
    },
    titleAndChannelName: {
      paddingLeft: "5px",
      cursor: "pointer",
    },
    title: {
      fontWeight: "600",
    },
    channel: {
      color: "#767676de",
    },
    dropDownPopOver: {
      boxShadow: "none",
      borderRadius: "0",
      border: "1px solid #00000026",
      "&::-webkit-scrollbar": {
        width: "0.5em",
      },
      "&::-webkit-scrollbar-thumb": {
        backgroundColor: "#d4d4d4",
      },
    },
    moreVerticIcon: {
      "&:hover": {
        backgroundColor: "transparent",
      },
    },
    dragHandleIcon: {
      "&:hover": {
        backgroundColor: "transparent",
      },
    },
    dragHandleIconCon: {
      cursor: "pointer",
    },
  };
});
const MiniVideoCard = ({
  video: { img, title, channelName, id },
  videoCardClickHan,
  videoCardMoreOptions,
}) => {
  const [anchorElForMore, setAnchorElForMore] = useState(null);
  const moreVideoBtnClickHan = (event) => {
    setAnchorElForMore(event.currentTarget);
  };
  const onMenuClose = () => {
    setAnchorElForMore(null);
  };
  const classes = useStyles();
  return (
    <Grid
      item
      container
      wrap="nowrap"
      alignItems="center"
      className={classes.videoItem}
    >
      <Grid
        item
        className={classes.dragHandleIconCon}
        onClick={() => videoCardClickHan({ title, id })}
      >
        <IconButton className={classes.dragHandleIcon}>
          <DragHandleIcon />
        </IconButton>
      </Grid>
      <Grid item container>
        <Grid
          item
          xs={3}
          className={classes.imgCon}
          onClick={() => videoCardClickHan({ title, id })}
        >
          <img src={img} width="100%" height="100%" alt={title} />
        </Grid>
        <Grid
          item
          xs={8}
          container
          direction="column"
          onClick={() => videoCardClickHan({ title, id })}
          className={classes.titleAndChannelName}
        >
          <Grid item className={classes.title}>
            {title.length > 53 ? title.slice(0, 50) + "..." : title}
          </Grid>
          <Grid item className={classes.channel}>
            {channelName.toUpperCase()}
          </Grid>
        </Grid>
        <Grid item xs={1}>
          <IconButton
            onClick={moreVideoBtnClickHan}
            className={classes.moreVerticIcon}
          >
            <MoreVertIcon />
          </IconButton>
          <MenuForMoreVideoCardOptions
            classes={classes}
            anchorElForMore={anchorElForMore}
            onMenuClose={onMenuClose}
            videoCardMoreOptions={videoCardMoreOptions}
            videoId={id}
          />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default MiniVideoCard;
