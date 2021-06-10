import { Divider, List, makeStyles } from "@material-ui/core";
import React, { Fragment } from "react";
import DropdownListItem from "./DropdownListItem";

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

const DropdownListContainer = ({ options: { list } }) => {
  const classes = useStyle();
  return (
    <div className={classes.more}>
      <List>
        {list.map(({ text, Icon, lastIcon, divider }, index) => {
          return (
            <Fragment>
              <DropdownListItem
                key={index}
                options={{ text, Icon, lastIcon }}
              />
              {divider ? (
                <Divider style={{ marginBottom: "8px", marginTop: "8px" }} />
              ) : null}
            </Fragment>
          );
        })}
      </List>
    </div>
  );
};

export default DropdownListContainer;
