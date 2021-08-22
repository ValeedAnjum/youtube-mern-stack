import React from "react";

const Video = ({ src }) => {
  return (
    <iframe
      width="100%"
      height="100%"
      src={src}
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay=1; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    ></iframe>
  );
};

export default Video;
