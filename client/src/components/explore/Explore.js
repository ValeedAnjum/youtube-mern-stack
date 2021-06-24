import React from "react";
import { makeStyles } from "@material-ui/core";
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
  const classes = useStyle();
  return (
    <div className={classes.mainContainer}>
      <Cards />
      <VideosContainer />
    </div>
  );
};

export default Explore;
