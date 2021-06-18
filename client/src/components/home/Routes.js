import React, { Fragment } from "react";
import { Route } from "react-router-dom";
import { drawerListContentData } from "./listdataInArray";
const Routes = ({ path }) => {
  const paths = drawerListContentData
    .filter((data) => data.To)
    .map((filterdData) => filterdData.To);
  return (
    <Fragment>
      {/* <Route path="/home" exact render={() => <h1>I am Video container</h1>} /> */}
      {paths.map((path) => {
        return (
          <Route
            key={path}
            path={path}
            exact
            render={() => <h1>I am {path}</h1>}
          />
        );
      })}
    </Fragment>
  );
};

export default Routes;
