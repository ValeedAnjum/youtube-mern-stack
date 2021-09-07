import React, { useEffect } from "react";
import { Grid, makeStyles } from "@material-ui/core";
import img from "./monkey.png";
const useStyles = makeStyles(() => {
  return {
    errorCon: {
      width: "100%",
      height: "100%",
      position: "fixed",
      top: "0",
      zIndex: "1206",
      backgroundColor: "#fafafa",
    },
    imgCon: {
      textAlign: "center",
    },
    errorMsg: {
      fontWeight: "400",
      fontSize: "1.5rem",
    },
  };
});
const Error = () => {
  const classes = useStyles();
  useEffect(() => {
    document.getElementsByTagName("title")[0].innerHTML = "404 Not Found";
    return () => {
      document.getElementsByTagName("title")[0].innerHTML = "YouTube";
    };
  }, []);
  return (
    <Grid
      className={classes.errorCon}
      container
      justifyContent="center"
      alignItems="center"
    >
      <Grid item container direction="column" alignContent="center">
        <Grid item className={classes.imgCon}>
          <img src={img} alt="monkey" />
        </Grid>
        <Grid item>
          <p className={classes.errorMsg}>
            This page isn't available. Sorry about that. Try something else.
          </p>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Error;
