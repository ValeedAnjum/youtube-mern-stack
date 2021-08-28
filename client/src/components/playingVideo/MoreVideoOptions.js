import React, { useState, Fragment } from "react";
import { connect } from "react-redux";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { IconButton, List, makeStyles, Menu } from "@material-ui/core";
import MoreVideoOptionListItems from "../morevideooptionlist/MoreVideoOptionListItems";
import {
  MoreListOptionsForAuth,
  MoreListOptionsForGuest,
} from "./MoreOptionsListData";

const useStyle = makeStyles(() => {
  return {
    "@global": {
      body: {
        scrollBehavior: "smooth",
        paddingRight: "0px !important",
        overflow: "auto !important",
        "&::-webkit-scrollbar": {
          width: "0.5em",
        },
        "&::-webkit-scrollbar-thumb": {
          backgroundColor: "#d4d4d4",
        },
      },
    },
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

const MoreVideoOptions = ({ auth, video }) => {
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
            onMenuClose={onMenuClose}
            video={video}
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
