import React, { Fragment } from "react";
import { Route } from "react-router-dom";
import { drawerListContentData } from "./listdataInArray";
import { RoutesComponentsArray } from "./routesComponentsArray";
const Routes = () => {
  const paths = drawerListContentData
    .filter((data) => data.To)
    .map((filterdData) => filterdData.To);
  const RoutesComponents = new Array(paths.length).fill(null, 0, paths.length);
  RoutesComponentsArray.forEach(
    (item, index) => (RoutesComponents[index] = item)
  );
  return (
    <Fragment>
      {paths.map((path, index) => {
        return (
          <Route
            key={path}
            path={path}
            exact
            // render={() => <h1>I am {path}</h1>}
            component={() => RoutesComponents[index]}
          />
        );
      })}
    </Fragment>
  );
};

export default Routes;
