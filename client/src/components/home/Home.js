import React from "react";
import Drawer from "@material-ui/core/Drawer";
import { Hidden, makeStyles, Toolbar } from "@material-ui/core";
import { Switch } from "react-router-dom";
import Sidenavbar from "./Sidenavbar";
import Routes from "./Routes";

const useStyle = makeStyles((theme) => {
  // console.log(theme.zIndex.appBar);
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
    root: {
      display: "flex",
    },
    drawer: {
      width: "230px",
    },
    drawerPaper: {
      width: "230px",
      overflow: "hidden",
    },
    routesContainer: {
      width: "100%",
    },
  };
});

const Home = () => {
  const classes = useStyle();
  return (
    <div className={classes.root}>
      <Hidden smDown>
        <Drawer
          className={classes.drawer}
          variant="permanent"
          anchor="left"
          classes={{ paper: classes.drawerPaper }}
        >
          <Toolbar />
          <Sidenavbar />
        </Drawer>
      </Hidden>
      <div className={classes.routesContainer}>
        <Switch>
          <Routes />
        </Switch>
      </div>
    </div>
  );
};

export default Home;
