import { makeStyles } from "@material-ui/core";
import React from "react";

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

// const DropdownListContainer = (props) => {
//   const classes = useStyle();
//   return <div className={classes.more}>{props.children}</div>;
// };

const DropdownListContainer = React.forwardRef((props, ref) => {
  const classes = useStyle();
  return (
    <div ref={ref} className={classes.more}>
      {props.children}
    </div>
  );
});

export default DropdownListContainer;
