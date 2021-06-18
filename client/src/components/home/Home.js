import React from "react";
import Drawer from "@material-ui/core/Drawer";
import { makeStyles, Toolbar } from "@material-ui/core";
import { BrowserRouter, Switch } from "react-router-dom";
import Sidenavbar from "./Sidenavbar";
import Routes from "./Routes";

const useStyle = makeStyles((theme) => {
  // console.log(theme.zIndex.appBar);
  return {
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
  };
});

const Home = () => {
  const classes = useStyle();
  return (
    <div className={classes.root}>
      <BrowserRouter>
        <Drawer
          className={classes.drawer}
          variant="permanent"
          anchor="left"
          classes={{ paper: classes.drawerPaper }}
        >
          <Toolbar />
          <Sidenavbar />
        </Drawer>
        <div>
          <Switch>
            <Routes />
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default Home;
