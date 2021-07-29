import { Grid } from "@material-ui/core";
import React from "react";
import Skeleton from "@material-ui/lab/Skeleton";

const LoadingSkeleton = ({ classes }) => {
  return (
    <Grid container spacing={2} className={classes.videosContainer}>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((num) => {
        return (
          <Grid item sm={3} key={num} className={classes.videoContainer}>
            <Skeleton variant="rect" height={150} animation={false} />
          </Grid>
        );
      })}
    </Grid>
  );
};

export default LoadingSkeleton;
