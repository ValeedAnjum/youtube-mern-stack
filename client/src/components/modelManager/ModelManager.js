import React from "react";
import MiniPlayer from "./miniPlayer/MiniPlayer";

const ModelManager = ({ ModelName }) => {
  switch (ModelName) {
    case "MINI_PLAYER":
      return <h1>I AM MINI PLAYER</h1>;
    default:
      return <MiniPlayer />;
  }
};

export default ModelManager;
