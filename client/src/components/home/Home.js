import React from "react";
import Drawer from "@material-ui/core/Drawer";
import { makeStyles, Toolbar } from "@material-ui/core";
import { BrowserRouter, Switch, Route, useRouteMatch } from "react-router-dom";
import Sidenavbar from "./Sidenavbar";

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
  const { path } = useRouteMatch();
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
            <Route
              path={path}
              exact
              render={() => <h1>I am Video container</h1>}
            />
            <Route
              exact
              path={`${path}/explore`}
              render={() => <h1>I am explore</h1>}
            />
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default Home;
