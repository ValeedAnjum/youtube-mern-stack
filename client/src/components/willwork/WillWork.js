import React from "react";
import { Grid, makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => {
  return {
    willWorkHeight: {
      //   height: `calc(100vh - ${theme.mixins.toolbar.minHeight}px)`,
      height: `calc(100vh - 64px)`,
    },
    icon: {
      fontSize: "6rem",
      color: "#00000073",
    },
    heading1: {
      fontSize: "1.5rem",
      color: "black",
    },
    heading2: {
      color: "black",
      fontSize: "1rem",
      fontWeight: "100",
    },
  };
});
const WillWork = ({ Icon, heading1, heading2 }) => {
  const classes = useStyles();
  return (
    <Grid
      container
      className={classes.willWorkHeight}
      justifyContent="center"
      alignItems="center"
      direction="column"
    >
      <Grid item>
        <Icon className={classes.icon} />
      </Grid>
      <Grid item>
        <Typography className={classes.heading1} variant="h3">
          {heading1}
        </Typography>
      </Grid>
      <Grid item>
        <Typography className={classes.heading2} variant="h6">
          {heading2}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default WillWork;
