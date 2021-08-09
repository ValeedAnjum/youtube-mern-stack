import { Grid, Typography } from "@material-ui/core";
import React, { Fragment } from "react";
import GoogleIcon from "./GoogleIcon";

const IconAndHeadingCon = ({ classes }) => {
  return (
    <Fragment>
      <Grid item>
        <GoogleIcon />
      </Grid>
      <Grid item>
        <Typography className={classes.signInHeading}>Sign in</Typography>
      </Grid>
      <Grid item>
        <Typography className={classes.continueHeading}>
          to continue to YouTube
        </Typography>
      </Grid>
    </Fragment>
  );
};

export default IconAndHeadingCon;
