import React from "react";
import { Card, CardContent, makeStyles, Typography } from "@material-ui/core";
import SlowMotionVideoIcon from "@material-ui/icons/SlowMotionVideo";
import Cards from "./Cards";

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
    </div>
  );
};

export default Explore;
