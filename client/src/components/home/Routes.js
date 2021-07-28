import React, { Fragment } from "react";
import { Route } from "react-router-dom";
import Search from "../search/Search";
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
            component={() => RoutesComponents[index]}
          />
        );
      })}
      <Route path="/home/search/q=:query" exact component={() => <Search />} />
    </Fragment>
  );
};

export default Routes;
