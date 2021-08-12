import { ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import React from "react";

const DropdownListItem = ({ options: { text, Icon, lastIcon }, onClick }) => {
  return (
    <ListItem button key={text} onClick={onClick}>
      {Icon ? <ListItemIcon>{Icon}</ListItemIcon> : null}
      {text ? <ListItemText primary={text} /> : null}
      {lastIcon ? lastIcon : null}
    </ListItem>
  );
};

export default DropdownListItem;
