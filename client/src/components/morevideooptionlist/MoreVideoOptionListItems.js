import React, { Fragment } from "react";
import MoreVideoOptionListItem from "./MoreVideoOptionListItem";

const MoreVideoOptionListItems = ({ data, video, onMenuClose }) => {
  return (
    <Fragment>
      {data.map((item, index) => {
        return (
          <MoreVideoOptionListItem
            key={index}
            item={item}
            video={video}
            onMenuClose={onMenuClose}
          />
        );
      })}
    </Fragment>
  );
};

export default MoreVideoOptionListItems;
