import React, { Fragment, useState } from "react";
import AppsIcon from "@material-ui/icons/Apps";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import TabWithMenuGen from "./TabWithMenuGen";
import {
  appsDropDownListData,
  createVideosDropDownListData,
  userDropDownListData,
} from "./NavTabsDropdownListDataColl";
import UserTab from "./UserTab";
import { connect } from "react-redux";

const AuthNavTabs = ({
  classes,

  profile: { name },
}) => {
  const [anchorElForApps, setAnchorElForApps] = useState(null);
  const [anchorElForCreateVideos, setAnchorElForCreateVideos] = useState(null);
  const [anchorElForUser, setAnchorElForUser] = useState(null);

  const appsBtnClickHnd = (event) => {
    setAnchorElForApps(event.currentTarget);
  };
  const createVideoBtnClickHnd = (event) => {
    setAnchorElForCreateVideos(event.currentTarget);
  };

  const userBtnClickHnd = (event) => {
    setAnchorElForUser(event.currentTarget);
  };
  const onMenuClose = () => {
    setAnchorElForApps(null);
    setAnchorElForCreateVideos(null);
    setAnchorElForUser(null);
  };
  return (
    <Fragment>
      {/* Create Videos tab */}
      <TabWithMenuGen
        classes={classes}
        TabIcon={<VideoCallIcon />}
        onTabClickHandler={createVideoBtnClickHnd}
        anchorEl={anchorElForCreateVideos}
        dropdownListData={createVideosDropDownListData}
        onMenuClose={onMenuClose}
      />
      {/* App tab */}
      <TabWithMenuGen
        classes={classes}
        TabIcon={<AppsIcon />}
        anchorEl={anchorElForApps}
        onMenuClose={onMenuClose}
        dropdownListData={appsDropDownListData}
        onTabClickHandler={appsBtnClickHnd}
      />
      {/* user tab */}
      {/* <UserTab /> */}
      <TabWithMenuGen
        classes={classes}
        TabIcon={<UserTab heading={name ? name[0] : "X"} />}
        onTabClickHandler={userBtnClickHnd}
        anchorEl={anchorElForUser}
        dropdownListData={userDropDownListData}
        onMenuClose={onMenuClose}
      />
    </Fragment>
  );
};

const mapState = (state) => {
  return {
    profile: state.auth.userProfile,
  };
};
export default connect(mapState)(AuthNavTabs);
