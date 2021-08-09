import { makeStyles, TextField } from "@material-ui/core";
import React, { Fragment } from "react";

const useStyles = makeStyles(() => {
  return {
    textField: {
      width: "100%",
    },
  };
});
const InputField = ({ label }) => {
  const classes = useStyles();
  return (
    <Fragment>
      <TextField
        className={classes.textField}
        label={label}
        variant="outlined"
      />
    </Fragment>
  );
};

export default InputField;
