import { Grid, Typography } from "@material-ui/core";
import React, { Fragment } from "react";
import GoogleIcon from "./GoogleIcon";

const IconAndHeadingCon = ({ classes, heading }) => {
  return (
    <Fragment>
      <Grid item>
        <GoogleIcon />
      </Grid>
      <Grid item>
        <Typography className={classes.signInHeading}>{heading}</Typography>
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
