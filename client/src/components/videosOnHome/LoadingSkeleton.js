import { CircularProgress, Grid } from "@material-ui/core";
import React from "react";
import Skeleton from "@material-ui/lab/Skeleton";

const LoadingSkeleton = ({ classes }) => {
  return (
    <Grid container spacing={2} className={classes.videosContainer}>
      {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => {
        return (
          <Grid item sm={3} key={num} className={classes.videoContainer}>
            <Skeleton variant="rect" height={150} animation={false} />
          </Grid>
        );
      })}
      <Grid container justifyContent="center">
        <CircularProgress className={classes.spinner} disableShrink />
      </Grid>
    </Grid>
  );
};

export default LoadingSkeleton;
