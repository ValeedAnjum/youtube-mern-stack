import React, { Fragment, useState } from "react";

import Navbar from "./navbar/Navbar";
import MDrawer from "./drawer/MDrawer";
import { Redirect, withRouter } from "react-router-dom";

const Layout = (props) => {
  const [SideDrawer, setSideDrawerState] = useState(false);
  if (props.location.pathname === "/") {
    return <Redirect to="/home" />;
  }
  const setSideDrawer = (state) => {
    const { pathname } = props.location;
    pathname.includes("/video/") && setSideDrawerState(state);
    pathname.includes("/home") &&
      window.innerWidth < 600 &&
      setSideDrawerState(state);
  };
  return (
    <Fragment>
      <Navbar setSideDrawer={setSideDrawer} />
      <MDrawer setSideDrawer={setSideDrawer} SideDrawer={SideDrawer} />
    </Fragment>
  );
};

export default withRouter(Layout);
