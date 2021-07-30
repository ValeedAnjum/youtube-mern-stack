import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core";
import axios from "axios";
import VideoCard from "../videoCard/VideoCard";
import LoadingVideosSkeleton from "./LoadingVideosSkeleton";

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
