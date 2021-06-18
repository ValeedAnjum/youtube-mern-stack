import React from "react";
import { List, makeStyles } from "@material-ui/core";
import SidenavBarListData from "../sidenavbarlistdata/SidenavBarListData";
import { drawerListContentData } from "./listdataInArray";

const useStyle = makeStyles(() => {
  return {
    list: {
      padding: 0,
      overflow: "scroll",
      overflowX: "hidden",
      "&:hover": {
        "&::-webkit-scrollbar-thumb": {
          backgroundColor: "#d4d4d4",
        },
      },
      "&::-webkit-scrollbar": {
        width: "0.5em",
      },
      "&::-webkit-scrollbar-thumb": {
        backgroundColor: "transparent",
      },
    },
  };
});
const Sidenavbar = () => {
  const classes = useStyle();
  return (
    <List className={classes.list}>
      <SidenavBarListData listItems={drawerListContentData} />
    </List>
  );
};

export default Sidenavbar;
