import React, { Fragment, useState } from "react";
import { AppBar, Grid, makeStyles, Toolbar } from "@material-ui/core";

import LogoAndMenu from "./LogoAndMenu";
import Searchbar from "./Searchbar";
import NavTabs from "./NavTabs";

const Navbar = ({ setSideDrawer }) => {
  const classes = useStyle();
  const [anchorEl, setAnchorEl] = useState(null);
  const moreBtnClickHnd = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const onMenuClose = () => {
    setAnchorEl(null);
  };
  return (
    <Fragment>
      <AppBar position="static" color="primary" className={classes.appbar}>
        <Toolbar>
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
                anchorEl={anchorEl}
              />
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </Fragment>
  );
};

export default Navbar;

const useStyle = makeStyles(() => {
  return {
    appbar: {
      backgroundColor: "transparent",
      borderBottom: "1px solid #00000026",
      boxShadow: "none",
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
    more: {
      width: "280px",
      "& .MuiListItemText-root": {
        margin: "0",
      },
      "& .MuiListItemIcon-root": {
        minWidth: "33px",
      },
      "& .MuiTypography-body1": {
        fontSize: "0.9rem",
      },
    },
    dropDownPopOver: {
      boxShadow: "none",
      borderRadius: "0",
      border: "1px solid #00000026",
    },
  };
});
