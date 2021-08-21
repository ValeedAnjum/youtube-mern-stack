import React from "react";
import { Grid, makeStyles, Paper } from "@material-ui/core";
import PlayingVideo from "./PlayingVideo";
import MiniPlayerFooter from "./MiniPlayerFooter";
import { withRouter } from "react-router-dom";

const useStyles = makeStyles(() => {
  return {
    miniPlayerMainContainer: {
      position: "fixed",
      bottom: "0",
      right: "42px",
      height: "89%",
      width: "35%",
      zIndex: "1202",
      backgroundColor: "white",
      borderRadius: "0",
    },
  };
});
function MiniPlayer(props) {
  const classes = useStyles();
  if (props.location.pathname.includes("/video/")) return null;
  return (
    <Paper className={classes.miniPlayerMainContainer} elevation={3}>
      <Grid container direction="column">
        <Grid item>
          <PlayingVideo />
        </Grid>
        <Grid item>
          <MiniPlayerFooter />
        </Grid>
      </Grid>
    </Paper>
  );
}

export default withRouter(MiniPlayer);
