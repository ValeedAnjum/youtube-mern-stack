import React from "react";
import { Typography } from "@material-ui/core";
import Videos from "./Videos";
const VideosContainer = () => {
  return (
    <div>
      <Typography>Trending videos</Typography>
      <Videos />
    </div>
  );
};

export default VideosContainer;
