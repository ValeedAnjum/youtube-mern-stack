import React, { Fragment, useState } from "react";
import { Grid, IconButton, Menu, List, makeStyles } from "@material-ui/core";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import PlaylistPlayIcon from "@material-ui/icons/PlaylistPlay";
import PlaylistAddIcon from "@material-ui/icons/PlaylistAdd";
// import DoNotDisturbIcon from "@material-ui/icons/DoNotDisturb";
// import DoNotDisturbOnIcon from "@material-ui/icons/DoNotDisturbOn";
import FlagIcon from "@material-ui/icons/Flag";
import MoreVideoOptionListItems from "../morevideooptionlist/MoreVideoOptionListItems";

const MoreListOptions = [
  { Text: "Add to queue", Icon: <PlaylistPlayIcon /> },
  {
    Text: "Save to Watch later",
    Icon: <PlaylistAddIcon />,
  },
  {
    Text: "Save To playlist",
    Icon: <FlagIcon />,
    divider: true,
  },
  {
    Text: "Not interested",
    Icon: <PlaylistPlayIcon />,
  },
  {
    Text: "Don't recommend channel",
    Icon: <PlaylistAddIcon />,
  },
  {
    Text: "Report",
    Icon: <FlagIcon />,
  },
];

const useStyle = makeStyles(() => {
  return {
    list: {
      width: "200px",
      padding: "0",
    },
    dropDownPopOver: {
      borderRadius: "2px",
      "& > .MuiList-root": {
        paddingTop: "4px",
        paddingBottom: "4px",
      },
    },
  };
});
const VideoTitleAndMore = ({ classes, title, playVideo }) => {
  const [anchorElForMore, setAnchorElForMore] = useState(null);
  const internelClasses = useStyle();
  const moreBtnClickHnd = (event) => {
    setAnchorElForMore(event.currentTarget);
  };
  const onMenuClose = () => {
    setAnchorElForMore(false);
  };
  return (
    <Fragment>
      <Grid item sm={10}>
        <p className={classes.title} onClick={playVideo}>
          {title.length > 53 ? title.slice(0, 50) + "..." : title}
        </p>
      </Grid>
      <Grid item sm={2}>
        <IconButton className={classes.moreVertiIcon} onClick={moreBtnClickHnd}>
          <MoreVertIcon />
        </IconButton>
        <Menu
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
          transitionDuration={0}
          anchorEl={anchorElForMore}
          keepMounted
          open={Boolean(anchorElForMore)}
          onClose={onMenuClose}
          PopoverClasses={{
            paper: internelClasses.dropDownPopOver,
          }}
          getContentAnchorEl={null}
        >
          <List className={internelClasses.list}>
            <MoreVideoOptionListItems data={MoreListOptions} />
          </List>
        </Menu>
      </Grid>
    </Fragment>
  );
};

export default VideoTitleAndMore;
