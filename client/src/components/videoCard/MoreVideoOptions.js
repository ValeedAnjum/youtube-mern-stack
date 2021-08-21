import React, { useState, Fragment } from "react";
import { connect } from "react-redux";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { IconButton, List, makeStyles, Menu } from "@material-ui/core";
import PlaylistPlayIcon from "@material-ui/icons/PlaylistPlay";
import WatchLaterIcon from "@material-ui/icons/WatchLater";
import PlaylistAddIcon from "@material-ui/icons/PlaylistAdd";
import MoreVideoOptionListItems from "../morevideooptionlist/MoreVideoOptionListItems";
import {
  MoreListOptionsForAuth,
  MoreListOptionsForGuest,
} from "./MoreVideoOptionsListData";

const MoreListOptions = [
  { Text: "Add to queue", Icon: <PlaylistPlayIcon /> },
  {
    Text: "Save to Watch later",
    Icon: <WatchLaterIcon />,
  },
  {
    Text: "Save To playlist",
    Icon: <PlaylistAddIcon />,
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

const MoreVideoOptions = ({ auth }) => {
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
      <IconButton onClick={moreBtnClickHnd}>
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
            data={auth ? MoreListOptionsForAuth : MoreListOptionsForGuest}
          />
        </List>
      </Menu>
    </Fragment>
  );
};

const mapState = (state) => {
  return {
    auth: state.auth.authenticated,
  };
};
export default connect(mapState)(MoreVideoOptions);
