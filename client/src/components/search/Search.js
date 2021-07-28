import React from "react";
import { makeStyles } from "@material-ui/core";
import VideoCard from "../videoCard/VideoCard";

const useStyle = makeStyles(() => {
  return {
    mainContainer: {
      padding: "10px 10px 10px 40px",
    },
  };
});
const Search = () => {
  const classes = useStyle();
  return (
    <div className={classes.mainContainer}>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => {
        return <VideoCard key={num} />;
      })}
    </div>
  );
};

export default Search;
