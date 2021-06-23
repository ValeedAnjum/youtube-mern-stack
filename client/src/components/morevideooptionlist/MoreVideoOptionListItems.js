import React, { Fragment } from "react";
import MoreVideoOptionListItem from "./MoreVideoOptionListItem";

const MoreVideoOptionListItems = ({ data }) => {
  return (
    <Fragment>
      {data.map((item, index) => {
        return <MoreVideoOptionListItem key={index} item={item} />;
      })}
    </Fragment>
  );
};

export default MoreVideoOptionListItems;
