import React from "react";
import { Grid } from "@material-ui/core";
import Skeleton from "@material-ui/lab/Skeleton";

const LoadingVideosSkeleton = () => {
  return (
    <Grid container direction="column">
      <Grid item container>
        <Grid item xs={3}>
          <Skeleton variant="rect" height={150} />
        </Grid>
        <Grid item xs={9} style={{ padding: "8px" }}>
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
    </Grid>
  );
};

export default LoadingVideosSkeleton;
