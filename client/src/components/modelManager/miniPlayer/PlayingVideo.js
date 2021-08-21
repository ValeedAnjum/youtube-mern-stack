import React from "react";
import Video from "./Video";
const video = {
  title:
    "Christian Sister Accept Islam After She Got Her 2 Answer - Dr. Zakir Naik",
  searchTitle: "Christian Sister Accept Islam - Dr. Zakir Naik",
  thumbnail:
    "https://i.ytimg.com/vi/T5ZlSSOhbzQ/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCE1GtvJ71DA7wgpdS9YMPDCNaloQ",
  src: `https://www.youtube.com/embed/T5ZlSSOhbzQ`,
};
const PlayingVideo = () => {
  return <Video src={video.src} />;
};

export default PlayingVideo;
