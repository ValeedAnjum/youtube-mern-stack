import { Grid } from "@material-ui/core";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { base } from "../../store/util/BASE_API_ADDRESS";
import VideoOptions from "./VideoOptions";
import VideoTitleAndTags from "./VideoTitleAndTags";

const VideoInfoAndOptions = ({ videoId }) => {
  const [title, setTitle] = useState(null);
  const [tags, setTags] = useState([]);
  useEffect(() => {
    const fetchVideoTitle = async (id) => {
      setTitle(null);
      // const res = await axios.get(`/video/videotitle/${id}`);
      const res = await axios.get(`${base}/video/videotitle/${id}`);
      document.getElementsByTagName("title")[0].innerText = res.data.title;

      setTitle(res.data.title);
      setTags(tagGenerator(res.data.title));
    };
    fetchVideoTitle(videoId);
  }, [videoId]);

  const tagGenerator = (str) => {
    let strWords = str
      .split(" ")
      .filter((word) => word.length > 4)
      .filter((pureWord) => Math.random() > 0.5);
    strWords = [...new Set(strWords)];
    return strWords.splice(0, 3);
  };
  return (
    <Grid container>
      <VideoTitleAndTags title={title} tags={tags} />
      <VideoOptions videoId={videoId} />
    </Grid>
  );
};

export default VideoInfoAndOptions;

// export default React.memo(VideoInfoAndOptions);
