import { Grid } from "@material-ui/core";
import React from "react";
import { Fragment } from "react";
import Skeleton from "@material-ui/lab/Skeleton";

const RelatedVideoSkeleton = () => {
  return (
    <Fragment>
      <Grid container spacing={2}>
        {[1, 2, 4, 5, 6, 7, 8].map((num) => {
          return <RelatedVideoSkeletonCard key={num} />;
        })}
      </Grid>
    </Fragment>
  );
};

const RelatedVideoSkeletonCard = () => {
  return (
    <Fragment>
      <Grid item xs={12} sm={5}>
        <Skeleton variant="rect" height={130} />
      </Grid>
      <Grid item sm={5} xs={12} container direction="column" spacing={2}>
        <Grid item>
          <Skeleton variant="rect" />
        </Grid>
        <Grid item>
          <Skeleton variant="rect" />
        </Grid>
      </Grid>
    </Fragment>
  );
};
export default RelatedVideoSkeleton;
