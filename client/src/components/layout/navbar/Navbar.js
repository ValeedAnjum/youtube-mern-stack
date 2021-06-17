import React, { Fragment, useState } from "react";
import {
  AppBar,
  Grid,
  makeStyles,
  Toolbar,
  CssBaseline,
} from "@material-ui/core";

import LogoAndMenu from "./LogoAndMenu";
import Searchbar from "./Searchbar";
import NavTabs from "./NavTabs";

const Navbar = ({ setSideDrawer }) => {
  const classes = useStyle();
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
  return (
    <Fragment>
      <CssBaseline />
      <AppBar position="static" color="primary" className={classes.appbar}>
        <Toolbar className={classes.toolbar}>
          <Grid container>
            <Grid item sm={3}>
              <LogoAndMenu setSideDrawer={setSideDrawer} />
            </Grid>
            {/* Search bar  */}
            <Grid item sm={6}>
              <Searchbar classes={classes} />
            </Grid>
            {/* navtabs  */}
            <Grid item sm={3}>
              <NavTabs
                classes={classes}
                moreBtnClickHnd={moreBtnClickHnd}
                onMenuClose={onMenuClose}
                anchorElForMore={anchorElForMore}
                appsBtnClickHnd={appsBtnClickHnd}
                anchorElForApps={anchorElForApps}
              />
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </Fragment>
  );
};

export default Navbar;

const useStyle = makeStyles((theme) => {
  return {
    appbar: {
      backgroundColor: "white",
      borderBottom: "1px solid #00000026",
      boxShadow: "none",
    },
    toolbar: {
      zIndex: theme.zIndex.drawer + 1,
    },
    searchTextBox: {
      border: "1px solid #00000026",
      outline: "none",
      width: "90%",
    },
    searchTextBoxButton: {
      border: "1px solid #00000026",
      borderLeft: "0",
      cursor: "pointer",
    },
    disableHoverBgClr: {
      "&:hover": {
        backgroundColor: "transparent",
      },
    },
    signinBtn: {
      color: "blue",
      borderRadius: "0",
      border: "1px solid blue",
      "&:hover": {
        backgroundColor: "transparent",
      },
    },

    dropDownPopOver: {
      boxShadow: "none",
      borderRadius: "0",
      border: "1px solid #00000026",
      "&::-webkit-scrollbar": {
        width: "0.5em",
      },
      "&::-webkit-scrollbar-thumb": {
        backgroundColor: "#d4d4d4",
      },
    },
  };
});
