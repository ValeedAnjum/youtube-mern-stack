import { Avatar } from "@material-ui/core";
import React from "react";
const UserTab = ({ heading }) => {
  return <Avatar>{heading.toUpperCase()}</Avatar>;
};

export default UserTab;
