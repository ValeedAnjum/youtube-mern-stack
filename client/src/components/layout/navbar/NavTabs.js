import React, { Fragment, useState } from "react";
import { Grid } from "@material-ui/core";

import GuestNavTabs from "./GuestNavTabs";

const NavTabs = ({
  classes,
  moreBtnClickHnd,
  onMenuClose,
  anchorElForMore,
  anchorElForApps,
  appsBtnClickHnd,
}) => {
  const [auth, setAuth] = useState(false);
  return (
    <Grid container justify="flex-end" alignItems="center">
      {!auth ? (
        <Fragment>
          <GuestNavTabs
            classes={classes}
            moreBtnClickHnd={moreBtnClickHnd}
            onMenuClose={onMenuClose}
            anchorElForMore={anchorElForMore}
            anchorElForApps={anchorElForApps}
            appsBtnClickHnd={appsBtnClickHnd}
          />
        </Fragment>
      ) : null}
    </Grid>
  );
};

export default NavTabs;
