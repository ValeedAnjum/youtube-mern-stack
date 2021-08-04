import React from "react";
import {
  Button,
  Grid,
  makeStyles,
  TextField,
  Typography,
} from "@material-ui/core";
import GoogleIcon from "./GoogleIcon";
const useStyles = makeStyles(() => {
  return {
    signin: {
      width: "100%",
      height: "100vh",
      position: "absolute",
      top: "0",
      backgroundColor: "white",
      zIndex: "1202",
    },
    ContentContainer: {
      border: "1px solid #0000002b",
      height: "80vh",
      borderRadius: "10px",
    },
    mainContainer: {
      height: "100vh",
    },
    signInHeading: {
      fontFamily: "'Google Sans','Noto Sans Myanmar UI',arial,sans-serif",
      color: "#202124",
      fontSize: "24px",
      fontWeight: "400",
    },
    continueHeading: {
      color: "#202124",
      fontSize: "16px",
      fontWeight: "400",
    },
  };
});
const SignIn = () => {
  const classes = useStyles();
  return (
    <div className={classes.signin}>
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        className={classes.mainContainer}
      >
        <Grid
          className={classes.ContentContainer}
          item
          md={4}
          container
          direction="column"
          spacing={2}
        >
          <Grid
            item
            container
            alignItems="center"
            direction="column"
            spacing={1}
          >
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
          </Grid>
          <Grid item>
            <Grid
              item
              container
              direction="column"
              alignItems="center"
              spacing={2}
            >
              <Grid item sm={12}>
                <TextField label="Email or phone" variant="outlined" />
              </Grid>
              <Grid item sm={12}>
                <TextField label="Password" variant="outlined" />
                <Typography>Forgot password?</Typography>
                <Button>Create account</Button>
                <Button>Next</Button>
              </Grid>
            </Grid>
          </Grid>
          <Grid item></Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default SignIn;
