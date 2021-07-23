import { Grid, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import UserTab from "./UserTab";

const useStyles = makeStyles(() => {
  return {
    header: {
      padding: "0px 8px",
      marginBottom: "8px",
    },
    userNameHead: {
      fontWeight: "600",
    },
    manageHaed: {
      fontWeight: "500",
      color: "#036af1",
    },
  };
});
const UserNavTabDropDownListHeader = () => {
  const classes = useStyles();
  return (
    <Grid container className={classes.header}>
      <Grid item xs={2}>
        <UserTab />
      </Grid>
      <Grid item container direction="column" xs={10}>
        <Grid item>
          <Typography className={classes.userNameHead}>Valeed Anjum</Typography>
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

export default UserNavTabDropDownListHeader;
