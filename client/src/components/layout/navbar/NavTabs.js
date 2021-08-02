import React from "react";
import { Grid } from "@material-ui/core";

import GuestNavTabs from "./GuestNavTabs";
import AuthNavTabs from "./AuthNavTabs";

const NavTabs = ({
  classes,
  moreBtnClickHnd,
  onMenuClose,
  anchorElForMore,
  anchorElForApps,
  appsBtnClickHnd,
  createVideoBtnClickHnd,
  anchorElForCreateVideos,
  userBtnClickHnd,
  anchorElForUser,
}) => {
  // const [auth, setAuth] = useState(false);
  const auth = false;
  return (
    <Grid container justifyContent="flex-end" alignItems="center">
      {!auth ? (
        <GuestNavTabs
          classes={classes}
          moreBtnClickHnd={moreBtnClickHnd}
          onMenuClose={onMenuClose}
          anchorElForMore={anchorElForMore}
          anchorElForApps={anchorElForApps}
          appsBtnClickHnd={appsBtnClickHnd}
        />
      ) : (
        <AuthNavTabs
          classes={classes}
          onMenuClose={onMenuClose}
          appsBtnClickHnd={appsBtnClickHnd}
          anchorElForApps={anchorElForApps}
          createVideoBtnClickHnd={createVideoBtnClickHnd}
          anchorElForCreateVideos={anchorElForCreateVideos}
          userBtnClickHnd={userBtnClickHnd}
          anchorElForUser={anchorElForUser}
        />
      )}
    </Grid>
  );
};

export default NavTabs;
