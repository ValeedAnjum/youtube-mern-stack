import { Grid, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import { connect } from "react-redux";
import UserTab from "./UserTab";

const useStyles = makeStyles(() => {
  return {
    header: {
      padding: "0px 8px",
      marginBottom: "8px",
    },
    userNameHead: {
      fontWeight: "600",
      textTransform: "capitalize",
    },
    manageHaed: {
      fontWeight: "500",
      color: "#036af1",
    },
  };
});

const UserNavTabDropDownListHeader = ({ profile: { name } }) => {
  const classes = useStyles();
  return (
    <Grid container className={classes.header}>
      <Grid item xs={2}>
        <UserTab heading={name ? name[0] : "X"} />
      </Grid>
      <Grid item container direction="column" xs={10}>
        <Grid item>
          <Typography className={classes.userNameHead}>
            {name ? name : "X"}
          </Typography>
        </Grid>
        <Grid item>
          <Typography className={classes.manageHaed}>
            Manage your Google Account
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

const mapState = (state) => {
  return {
    profile: state.auth.userProfile,
  };
};

export default connect(mapState)(UserNavTabDropDownListHeader);
