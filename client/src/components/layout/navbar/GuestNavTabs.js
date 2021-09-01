import { Button, Hidden, IconButton } from "@material-ui/core";
import React, { Fragment, useState } from "react";
import { withRouter } from "react-router-dom";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import AppsIcon from "@material-ui/icons/Apps";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import TabWithMenuGen from "./TabWithMenuGen";
import {
  appsDropDownListData,
  moreDropDownListData,
} from "./NavTabsDropdownListDataColl";

const GuestNavTabs = ({ classes, history }) => {
  const [anchorElForMore, setAnchorElForMore] = useState(null);
  const [anchorElForApps, setAnchorElForApps] = useState(null);

  const moreBtnClickHnd = (event) => {
    setAnchorElForMore(event.currentTarget);
  };
  const appsBtnClickHnd = (event) => {
    setAnchorElForApps(event.currentTarget);
  };

  const onMenuClose = () => {
    setAnchorElForMore(null);
    setAnchorElForApps(null);
  };
  const goToSignIn = () => {
    history.push("/signin/email");
  };
  return (
    <Fragment>
      {/* App tab */}
      <TabWithMenuGen
        classes={classes}
        TabIcon={<AppsIcon />}
        anchorEl={anchorElForApps}
        onMenuClose={onMenuClose}
        dropdownListData={appsDropDownListData}
        onTabClickHandler={appsBtnClickHnd}
      />
      {/* More tab */}
      <TabWithMenuGen
        classes={classes}
        TabIcon={<MoreVertIcon />}
        anchorEl={anchorElForMore}
        onMenuClose={onMenuClose}
        dropdownListData={moreDropDownListData}
        onTabClickHandler={moreBtnClickHnd}
      />

      <Hidden xsDown>
        <Button
          disableRipple
          startIcon={<AccountCircleIcon />}
          className={classes.signinBtn}
          onClick={goToSignIn}
        >
          sign in
        </Button>
      </Hidden>
      <Hidden smUp>
        <IconButton onClick={goToSignIn}>
          <AccountCircleIcon />
        </IconButton>
      </Hidden>
    </Fragment>
  );
};

export default withRouter(GuestNavTabs);
