import React from "react";
import { Typography } from "@material-ui/core";
import Videos from "./Videos";
import LoadingVideosSkeleton from "./LoadingVideosSkeleton";
const VideosContainer = ({ videos, videosLabel, loadingVideos }) => {
  return (
    <div>
      <Typography>{videosLabel} Videos</Typography>
      <Videos videos={videos} />

      {loadingVideos ? <LoadingVideosSkeleton /> : null}
    </div>
  );
};

export default VideosContainer;
