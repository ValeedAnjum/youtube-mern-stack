import React from "react";
import VideoCard from "../videoCard/VideoCard";

const Videos = () => {
  return [1, 2, 3, 4, 5, 6, 7, 8].map((key) => <VideoCard key={key} />);
};

export default Videos;
