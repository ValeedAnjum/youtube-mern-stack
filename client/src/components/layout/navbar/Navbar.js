import React, { Fragment, useState } from "react";
import {
  AppBar,
  Button,
  Grid,
  IconButton,
  makeStyles,
  Toolbar,
  Menu,
  MenuItem,
  MenuList,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import MicIcon from "@material-ui/icons/Mic";
import YouTubeIcon from "../../youtubeIcon/YoutubeIcon";
import SearchIcon from "@material-ui/icons/Search";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import AppsIcon from "@material-ui/icons/Apps";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

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
  };
});

const Navbar = ({ setSideDrawer }) => {
  const classes = useStyle();
  const [anchorEl, setAnchorEl] = useState(null);
  const moreBtnClickHnd = (event) => {
    // console.log(event.currentTarget);
    setAnchorEl(event.currentTarget);
  };
  const onMenuClose = () => {
    console.log("onMenuClose");
    setAnchorEl(null);
  };
  return (
    <Fragment>
      <AppBar position="static" color="primary" className={classes.appbar}>
        <Toolbar>
          <Grid container>
            <Grid item sm={3}>
              <Grid container>
                <IconButton onClick={() => setSideDrawer(true)}>
                  <MenuIcon />
                </IconButton>
                <div style={{ width: "80px" }}>
                  <YouTubeIcon />
                </div>
              </Grid>
            </Grid>
            {/* Search bar  */}
            <Grid item sm={6}>
              <Grid container>
                <Grid container justify="center" alignItems="center">
                  <div
                    style={{
                      display: "flex",
                      width: "70%",
                      height: "60%",
                    }}
                  >
                    <input
                      type="text"
                      placeholder="Search"
                      className={classes.searchTextBox}
                    />
                    <button
                      aria-label="search-video"
                      className={classes.searchTextBoxButton}
                    >
                      <SearchIcon />
                    </button>
                  </div>
                  <IconButton classes={{ root: classes.disableHoverBgClr }}>
                    <MicIcon />
                  </IconButton>
                </Grid>
              </Grid>
            </Grid>
            {/* navtabs  */}
            <Grid item sm={3}>
              <Grid container justify="flex-end" alignItems="center">
                <IconButton classes={{ root: classes.disableHoverBgClr }}>
                  <AppsIcon />
                </IconButton>
                <IconButton
                  classes={{ root: classes.disableHoverBgClr }}
                  onClick={moreBtnClickHnd}
                >
                  <MoreVertIcon />
                </IconButton>
                <Menu
                  getContentAnchorEl={null}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "center",
                  }}
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "center",
                  }}
                  transitionDuration={0}
                  anchorEl={anchorEl}
                  keepMounted
                  open={Boolean(anchorEl)}
                  onClose={onMenuClose}
                >
                  <div>
                    <h1>Menu</h1>
                  </div>
                </Menu>
                <Button
                  disableRipple
                  startIcon={<AccountCircleIcon />}
                  className={classes.signinBtn}
                >
                  sign in
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </Fragment>
  );
};

export default Navbar;
