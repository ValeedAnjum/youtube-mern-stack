import React, { Fragment } from "react";
import {
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
  Divider,
} from "@material-ui/core";
import { NavLink } from "react-router-dom";
const useStyle = makeStyles(() => {
  return {
    listItem: {
      paddingTop: "4px",
      paddingBottom: "4px",
      color: "#606060",
      "& .MuiSvgIcon-root": {
        width: "0.8em",
        height: "0.8em",
      },
    },
    heading: {
      textTransform: "uppercase",

      "& .MuiTypography-body1": {
        fontSize: "0.8rem",
        fontWeight: "600",
        color: "#606060bd",
      },
    },
  };
});
const SingleListItem = (props) => {
  const { Text, Icon, Heading, Dividr, To } = props;
  const classes = useStyle();
  const buttonBehav = () => (Heading ? false : true);
  return (
    <Fragment>
      <ListItem
        button={buttonBehav()}
        className={classes.listItem}
        component={Heading ? null : NavLink}
        to={To ? To : "/"}
      >
        {Icon ? <ListItemIcon>{Icon}</ListItemIcon> : null}
        {Text ? <ListItemText>{Text}</ListItemText> : null}

        {Heading ? (
          <ListItemText className={classes.heading}>{Heading}</ListItemText>
        ) : null}
      </ListItem>

      {Dividr ? <Divider /> : null}
    </Fragment>
  );
};

export default SingleListItem;
