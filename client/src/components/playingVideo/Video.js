import React from "react";

const Video = ({ src }) => {
  return (
    <iframe
      width="100%"
      height="400px"
      src={src}
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
  );
};

export default React.memo(Video);
