import { Button } from "@material-ui/core";
import React, { Fragment } from "react";
import { withRouter } from "react-router-dom";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import AppsIcon from "@material-ui/icons/Apps";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import TabWithMenuGen from "./TabWithMenuGen";
import {
  appsDropDownListData,
  moreDropDownListData,
} from "./NavTabsDropdownListDataColl";

const GuestNavTabs = ({
  classes,
  moreBtnClickHnd,
  onMenuClose,
  anchorElForMore,
  anchorElForApps,
  appsBtnClickHnd,
  history,
}) => {
  const goToSignIn = () => {
    history.push("/signin");
  };
  return (
    <Fragment>
      {/* App tab */}
      <TabWithMenuGen
        classes={classes}
        TabIcon={AppsIcon}
        anchorEl={anchorElForApps}
        onMenuClose={onMenuClose}
        dropdownListData={appsDropDownListData}
        onTabClickHandler={appsBtnClickHnd}
      />
      {/* More tab */}
      <TabWithMenuGen
        classes={classes}
        TabIcon={MoreVertIcon}
        anchorEl={anchorElForMore}
        onMenuClose={onMenuClose}
        dropdownListData={moreDropDownListData}
        onTabClickHandler={moreBtnClickHnd}
      />

      <Button
        disableRipple
        startIcon={<AccountCircleIcon />}
        className={classes.signinBtn}
        onClick={goToSignIn}
      >
        sign in
      </Button>
    </Fragment>
  );
};

export default withRouter(GuestNavTabs);
