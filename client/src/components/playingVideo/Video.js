import React from "react";

const Video = () => {
  return (
    <iframe
      width="100%"
      height="400px"
      src="https://www.youtube.com/embed/HfdIaumPj6o"
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
  );
};

export default Video;
