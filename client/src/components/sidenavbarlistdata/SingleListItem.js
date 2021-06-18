import React, { Fragment } from "react";
import {
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
  Divider,
} from "@material-ui/core";
import { NavLink, withRouter, Link } from "react-router-dom";
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
  const { Text, Icon, Heading, Dividr, To, history } = props;
  const classes = useStyle();
  const buttonBehav = () => (Heading ? false : true);
  const linkTo = () => {
    history.push(`/home/explore`);
  };
  return (
    <Fragment>
      <ListItem
        button={buttonBehav()}
        className={classes.listItem}
        // onClick={linkTo}
        component={Link}
        to={To ? To : "/home"}
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

export default withRouter(SingleListItem);
