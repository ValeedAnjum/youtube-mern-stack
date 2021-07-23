import React, { Fragment } from "react";
import AppsIcon from "@material-ui/icons/Apps";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import TabWithMenuGen from "./TabWithMenuGen";
import {
  appsDropDownListData,
  createVideosDropDownListData,
  userDropDownListData,
} from "./NavTabsDropdownListDataColl";
import UserTab from "./UserTab";

const AuthNavTabs = ({
  classes,
  onMenuClose,
  appsBtnClickHnd,
  anchorElForApps,
  createVideoBtnClickHnd,
  anchorElForCreateVideos,
  userBtnClickHnd,
  anchorElForUser,
}) => {
  return (
    <Fragment>
      {/* Create Videos tab */}
      <TabWithMenuGen
        classes={classes}
        TabIcon={VideoCallIcon}
        onTabClickHandler={createVideoBtnClickHnd}
        anchorEl={anchorElForCreateVideos}
        dropdownListData={createVideosDropDownListData}
        onMenuClose={onMenuClose}
      />
      {/* App tab */}
      <TabWithMenuGen
        classes={classes}
        TabIcon={AppsIcon}
        anchorEl={anchorElForApps}
        onMenuClose={onMenuClose}
        dropdownListData={appsDropDownListData}
        onTabClickHandler={appsBtnClickHnd}
      />
      {/* user tab */}
      {/* <UserTab /> */}
      <TabWithMenuGen
        classes={classes}
        TabIcon={UserTab}
        onTabClickHandler={userBtnClickHnd}
        anchorEl={anchorElForUser}
        dropdownListData={userDropDownListData}
        onMenuClose={onMenuClose}
      />
    </Fragment>
  );
};

export default AuthNavTabs;
