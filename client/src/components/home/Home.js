import React from "react";
import Drawer from "@material-ui/core/Drawer";
import {
  CssBaseline,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
  Toolbar,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { BrowserRouter, Switch, Route, useRouteMatch } from "react-router-dom";

const drawerList = () => (
  <List>
    {["Home", "Explore"].map((listItem, index) => (
      <ListItem button key={index}>
        <ListItemIcon>
          <MenuIcon />
        </ListItemIcon>
        <ListItemText>{listItem}</ListItemText>
      </ListItem>
    ))}
  </List>
);
const useStyle = makeStyles(() => {
  return {
    root: {
      display: "flex",
    },
    drawer: {
      width: "240px",
    },
    drawerPaper: {
      width: "240px",
    },
  };
});

const Home = () => {
  const classes = useStyle();
  const { path } = useRouteMatch();
  console.log(path);
  return (
    <div className={classes.root}>
      <CssBaseline />
      <Drawer
        className={classes.drawer}
        variant="permanent"
        anchor="left"
        classes={{ paper: classes.drawerPaper }}
      >
        <Toolbar />
        {drawerList()}
      </Drawer>
      <div>
        <BrowserRouter>
          <Switch>
            <Route
              path={path}
              exact
              render={() => <h1>I am Video container</h1>}
            />
            <Route
              path={`${path}/explore`}
              render={() => <h1>I am explore</h1>}
            />
          </Switch>
        </BrowserRouter>
      </div>
    </div>
  );
};

export default Home;
