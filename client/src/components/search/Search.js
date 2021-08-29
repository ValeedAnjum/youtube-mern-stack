import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core";
import axios from "axios";
import VideoCard from "../videoCard/VideoCard";
import LoadingVideosSkeleton from "./LoadingVideosSkeleton";
import { base } from "../../store/util/BASE_API_ADDRESS";

const useStyle = makeStyles(() => {
  return {
    mainContainer: {
      padding: "10px 10px 10px 40px",
    },
  };
});

const Search = () => {
  const [videos, setVideos] = useState([]);
  const [loadingVideos, setLoadingVideos] = useState(false);
  const [isFetching, setIsFetching] = useState(false);
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
      console.log("bottom");
      setIsFetching(true);
    }
  };

  const fetchVideos = async () => {
    try {
      setLoadingVideos(true);
      // const result = await axios.get("/video/randomvideos/12");
      const result = await axios.get(`${base}/video/randomvideos/12`);
      setIsFetching(false);
      setLoadingVideos(false);
      setVideos((oldData) => [...oldData, ...result.data]);
    } catch (error) {
      setIsFetching(false);
      setLoadingVideos(false);
    }
  };
  return (
    <div className={classes.mainContainer}>
      {videos &&
        videos.length > 0 &&
        videos.map((video, index) => <VideoCard key={index} video={video} />)}
      {loadingVideos ? <LoadingVideosSkeleton /> : null}
    </div>
  );
};

export default Search;
