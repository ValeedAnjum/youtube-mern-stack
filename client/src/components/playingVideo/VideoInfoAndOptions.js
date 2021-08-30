import React from "react";
import { Component } from "react";
import { PureComponent } from "react";

// const VideoInfoAndOptions = () => {
//   const tagGenerator = (str) => {
//     const strWords = str.split(" ");
//     console.log(strWords);
//   };
//   tagGenerator("Ertugrul Ghazi Urdu | Episode 60| Season 4");
//   return <div>Ertugrul Ghazi Urdu | Episode 60| Season 4</div>;
// };

class VideoInfoAndOptions extends PureComponent {
  constructor(props) {
    super(props);
  }
  render() {
    console.log("a");
    return <div>Ertugrul Ghazi Urdu | Episode 60| Season 4</div>;
  }
}

export default VideoInfoAndOptions;
