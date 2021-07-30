import React from "react";
import { CircularProgress, Grid, makeStyles } from "@material-ui/core";
import Skeleton from "@material-ui/lab/Skeleton";

const useStyles = makeStyles(() => {
  return {
    titleDesSkeletonCon: {
      padding: "8px",
    },
    spinner: {
      width: "30px !important",
      height: "30px !important",
      color: "#939191",
    },
  };
});
const LoadingVideosSkeleton = () => {
  const classes = useStyles();
  return (
    <Grid container direction="column" spacing={2}>
      {[1, 2, 3].map((num) => (
        <LoaddingVideoSkeletonCard key={num} />
      ))}
      <Grid container justifyContent="center">
        <CircularProgress className={classes.spinner} disableShrink />
      </Grid>
    </Grid>
  );
};

const LoaddingVideoSkeletonCard = () => {
  const classes = useStyles();
  return (
    <Grid item container>
      <Grid item xs={3}>
        <Skeleton variant="rect" height={150} />
      </Grid>
      <Grid item xs={9} className={classes.titleDesSkeletonCon}>
        <Grid container direction="column" spacing={2}>
          <Grid container item>
            <Grid item sm={11}>
              <Skeleton variant="rect" height={20} />
            </Grid>
          </Grid>
          <Grid item xs={3}>
            <Skeleton variant="rect" height={20} />
          </Grid>
          <Grid item xs={11}>
            <Skeleton variant="rect" height={30} />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};
export default LoadingVideosSkeleton;
