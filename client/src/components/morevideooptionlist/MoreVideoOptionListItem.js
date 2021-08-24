import React, { Fragment } from "react";
import {
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
  Divider,
} from "@material-ui/core";

const useStyle = makeStyles(() => {
  return {
    listItem: {
      paddingTop: "0",
      paddingBottom: "0",
    },
    listIcon: {
      minWidth: "30px",
      color: "#909090",
    },
    listItemText: {
      "& > .MuiTypography-root": {
        fontSize: "smaller",
        color: "#3c3c3c",
      },
    },
  };
});
const MoreVideoOptionListItem = ({
  item: { Text, Icon, divider, OnClick },
  video,
  onMenuClose,
}) => {
  const classes = useStyle();
  const onClickHanler = () => {
    OnClick && OnClick(video)();
    onMenuClose();
  };
  return (
    <Fragment>
      <ListItem button className={classes.listItem} onClick={onClickHanler}>
        <ListItemIcon className={classes.listIcon}>{Icon}</ListItemIcon>
        <ListItemText className={classes.listItemText} primary={Text} />
      </ListItem>
      {divider ? (
        <Divider style={{ marginBottom: "4px", marginTop: "4px" }} />
      ) : null}
    </Fragment>
  );
};

export default MoreVideoOptionListItem;
