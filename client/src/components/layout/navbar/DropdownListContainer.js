import { makeStyles } from "@material-ui/core";
import React, { Fragment } from "react";

const useStyle = makeStyles(() => {
  return {
    more: {
      "& .MuiListItemText-root": {
        margin: "0",
      },
      "& .MuiListItemIcon-root": {
        minWidth: "33px",
      },
      "& .MuiTypography-body1": {
        fontSize: "0.9rem",
      },
    },
  };
});

const DropdownListContainer = React.forwardRef((props, ref) => {
  const classes = useStyle();

  return (
    <Fragment>
      <div ref={ref} className={classes.more}>
        {props.children}
      </div>
    </Fragment>
  );
});

export default DropdownListContainer;
