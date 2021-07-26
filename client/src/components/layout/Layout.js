import React, { Fragment, useState } from "react";

import Navbar from "./navbar/Navbar";
import MDrawer from "./drawer/MDrawer";
import { Redirect, withRouter } from "react-router-dom";

const Layout = (props) => {
  const [SideDrawer, setSideDrawer] = useState(false);
  if (props.location.pathname === "/") {
    return <Redirect to="/home" />;
  }
  return (
    <Fragment>
      <Navbar setSideDrawer={setSideDrawer} />
      <MDrawer setSideDrawer={setSideDrawer} SideDrawer={SideDrawer} />
    </Fragment>
  );
};

export default withRouter(Layout);
