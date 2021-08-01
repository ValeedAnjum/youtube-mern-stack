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
  const [isFetching, setIsFetching] = useState(false);
  const [videosLabel, setVideosLabel] = useState("Trending");
  const classes = useStyle();
  useEffect(() => {
    fetchVideos();
    window.addEventListener("scroll", onScrolling);
    return () => {
      window.removeEventListener("scroll", onScrolling);
    };
  }, []);
  useEffect(() => {
    if (!isFetching) return;
    fetchVideos();
  }, [isFetching]);
  const onScrolling = (event) => {
    const scrollHeight = document.documentElement.scrollHeight;
    const winInerHeight = window.innerHeight;
    const scroolIsAtBottom =
      scrollHeight - winInerHeight - 100 <= window.scrollY;
    if (scroolIsAtBottom) {
      setIsFetching(true);
    }
  };
  const fetchVideos = async () => {
    try {
      setLoadingVideos(true);
      const result = await axios.get("/video/randomvideos/12");
      setLoadingVideos(false);
      setIsFetching(false);
      setVideos((oldData) => [...oldData, ...result.data]);
    } catch (error) {
      setLoadingVideos(false);
      isFetching(false);
    }
  };
  const videoLabelHan = async (label) => {
    setVideosLabel(label);
    try {
      setLoadingVideos(true);
      setVideos([]);
      const result = await axios.get("/video/randomvideos/12");
      setLoadingVideos(false);
      setIsFetching(false);
      setVideos(result.data);
    } catch (error) {
      setLoadingVideos(false);
      setIsFetching(false);
    }
  };
  return (
    <div className={classes.mainContainer}>
      <Cards videoLabelHan={videoLabelHan} />
      <VideosContainer
        loadingVideos={loadingVideos}
        videos={videos}
        videosLabel={videosLabel}
      />
    </div>
  );
};

export default Explore;
