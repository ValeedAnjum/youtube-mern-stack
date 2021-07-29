import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core";
import axios from "axios";
import Cards from "./Cards";
import VideosContainer from "./VideosContainer";
const useStyle = makeStyles(() => {
  return {
    mainContainer: {
      padding: "10px 10px 10px 40px",
    },
  };
});
const Explore = () => {
  const [videos, setVideos] = useState([]);
  const [loadingVideos, setLoadingVideos] = useState(false);
  const [videosLabel, setVideosLabel] = useState("Trending");
  const classes = useStyle();
  useEffect(() => {
    console.log("UE");
    fetchVideos();
    window.addEventListener("scroll", onScrolling);
    return () => {
      window.removeEventListener("scroll", onScrolling);
    };
  }, []);
  const onScrolling = (event) => {
    const scrollHeight = document.documentElement.scrollHeight;
    const winInerHeight = window.innerHeight;
    const scroolIsAtBottom =
      scrollHeight - winInerHeight - 100 <= window.scrollY;
    if (scroolIsAtBottom) {
      fetchVideos();
    }
  };
  const fetchVideos = async () => {
    setLoadingVideos(true);
    const result = await axios.get("/video/randomvideos/12");
    setLoadingVideos(false);

    console.log(result.data);
    setVideos((oldData) => [...oldData, ...result.data]);
  };
  const videoLabelHan = async (label) => {
    setVideosLabel(label);
    setLoadingVideos(true);
    const result = await axios.get("/video/randomvideos/12");
    setLoadingVideos(false);
    setVideos(result.data);
  };
  return (
    <div className={classes.mainContainer}>
      <Cards videoLabelHan={videoLabelHan} />
      <VideosContainer videos={videos} videosLabel={videosLabel} />
    </div>
  );
};

export default Explore;
