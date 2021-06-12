import React, { Fragment } from "react";
import SingleListItem from "./SingleListItem";

const SidenavBarListData = ({ listItems }) => {
  return (
    <Fragment>
      {listItems.map((item, index) => {
        return <SingleListItem key={index} {...item} />;
      })}
    </Fragment>
  );
};

export default SidenavBarListData;
