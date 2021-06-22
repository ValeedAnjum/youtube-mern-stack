import React from "react";
import { withRouter } from "react-router-dom";

const PlayingVideo = (props) => {
  console.log(props.match.params.id);
  return <div>Here video will be played</div>;
};

export default withRouter(PlayingVideo);
