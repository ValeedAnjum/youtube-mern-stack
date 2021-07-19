import React from "react";
import { Grid, makeStyles } from "@material-ui/core";
import SignalCellularAltIcon from "@material-ui/icons/SignalCellularAlt";

const useStyles = makeStyles((theme) => {
  console.log(theme.mixins.toolbar);
  return {
    willWorkHeight: {
      border: "1px solid black",
      //   height: `calc(100vh - ${theme.mixins.toolbar.minHeight}px)`,
      //
      height: `calc(100vh - 64px)`,
    },
  };
});
const WillWork = () => {
  const classes = useStyles();
  return (
    <div container className={classes.willWorkHeight}>
      <SignalCellularAltIcon />
    </div>
  );
};

export default WillWork;
