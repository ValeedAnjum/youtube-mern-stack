import { ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import React from "react";

const DropdownListItem = ({ pro: { text, Icon, lastIcon } }) => {
  return (
    <ListItem button key={text}>
      <ListItemIcon>{Icon}</ListItemIcon>
      <ListItemText primary={text} />
      {lastIcon ? lastIcon : null}
    </ListItem>
  );
};

export default DropdownListItem;
