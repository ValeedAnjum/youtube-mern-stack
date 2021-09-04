import React from "react";
import { connect } from "react-redux";
import MiniPlayer from "./miniPlayer/MiniPlayer";

const ModelManager = ({ ModelName, Payload }) => {
  switch (ModelName) {
    case "MINI_PLAYER_OPEN": {
      return Payload.length === 0 ? null : (
        <MiniPlayer VideoForMiniplayer={Payload} />
      );
    }

    default:
      return null;
  }
};

const mapState = (state) => {
  return {
    Payload: state.videos.videosForMiniPlayer,
    ModelName: state.videos.modelName,
  };
};

export default connect(mapState)(ModelManager);
