import React, { Fragment } from "react";
import { Button, Grid, makeStyles, Slide, Typography } from "@material-ui/core";
import IconAndHeadingCon from "./IconAndHeadingCon";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import "./style.css";
import InputField from "../../form/InputField";
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
    contentContainer: {
      border: "1px solid #0000002b",
      height: "80vh",
      borderRadius: "10px",
      flexWrap: "nowrap",
      overflow: "hidden",
    },
    iconHeadingContainer: {
      paddingTop: "50px !important",
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
    forgotHeading: {
      color: "#1a73e8",
      fontWeight: "500",
      cursor: "pointer",
      display: "inline-block",
      padding: "10px 0px",
    },
    textFieldCon: {
      width: "90%",
    },
    createAccBtn: {
      color: "#1a73e8",
      textTransform: "initial",
      marginLeft: "-8px",
    },
    nextBtn: {
      textTransform: "initial",
      backgroundColor: "#1a73e8eb",
      color: "white",
      "&:hover": {
        backgroundColor: "#1a73e8",
      },
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
          className={classes.contentContainer}
          item
          md={4}
          container
          direction="column"
          spacing={2}
        >
          <Slide direction="left" in={true} mountOnEnter unmountOnExit>
            <div>
              <Grid
                item
                container
                alignItems="center"
                direction="column"
                spacing={1}
                className={classes.iconHeadingContainer}
              >
                <IconAndHeadingCon classes={classes} />
              </Grid>
              <Grid item>
                <Grid
                  item
                  container
                  direction="column"
                  alignItems="center"
                  spacing={2}
                >
                  <Grid item sm={12} className={classes.textFieldCon}>
                    <InputField label="Email or phone" />
                  </Grid>
                  <Grid item xs={12} className={classes.textFieldCon}>
                    <InputField label="Password" />
                    <div>
                      <Typography className={classes.forgotHeading}>
                        Forgot password?
                      </Typography>
                    </div>
                    <Grid container justifyContent="space-between">
                      <Button className={classes.createAccBtn}>
                        Create account
                      </Button>
                      <Button className={classes.nextBtn}>Next</Button>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </div>
          </Slide>
        </Grid>
      </Grid>
    </div>
  );
};

export default SignIn;
