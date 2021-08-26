import React, { Fragment, useState } from "react";
import { Grid, IconButton, Menu, List, makeStyles } from "@material-ui/core";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { connect } from "react-redux";
import MoreVideoOptionListItems from "../morevideooptionlist/MoreVideoOptionListItems";
import {
  MoreListOptionsForGuest,
  MoreListOptionsForAuth,
} from "./MoreListOptions";

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

const VideoTitleAndMore = ({ classes, title, playVideo, auth, video }) => {
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
      <Grid item sm={10} xs={11} className={classes.videoTitleCon}>
        <p className={classes.title} onClick={playVideo}>
          {/* {title.length > 53 ? title.slice(0, 50) + "..." : title} */}
          {title}
        </p>
      </Grid>
      <Grid item sm={2} xs={1}>
        <IconButton className={classes.moreVertiIcon} onClick={moreBtnClickHnd}>
          <MoreVertIcon />
        </IconButton>
        <Menu
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "right",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
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
            <MoreVideoOptionListItems
              video={video}
              onMenuClose={onMenuClose}
              data={auth ? MoreListOptionsForAuth : MoreListOptionsForGuest}
            />
          </List>
        </Menu>
      </Grid>
    </Fragment>
  );
};
const mapState = (state) => {
  return {
    auth: state.auth.authenticated,
  };
};

export default connect(mapState)(VideoTitleAndMore);
