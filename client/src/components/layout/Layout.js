import React, { Fragment, useState } from "react";

import Navbar from "./navbar/Navbar";
import MDrawer from "./drawer/MDrawer";

const Layout = () => {
  const [SideDrawer, setSideDrawer] = useState(false);
  return (
    <Fragment>
      <Navbar setSideDrawer={setSideDrawer} />
      <MDrawer setSideDrawer={setSideDrawer} SideDrawer={SideDrawer} />
    </Fragment>
  );
};

export default Layout;
