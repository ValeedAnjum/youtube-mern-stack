import { makeStyles } from "@material-ui/core";
import React from "react";

const demoSearchResult = [
  "react portfolio website",
  "react portfolio",
  "react portal",
  "react portfolio website tutorial",
  "react portfolio projects",
  "react portal in hindi",
  "react portfolio clever programmer",
  "react portfolio tutorial",
  "react portfolio website material ui",
  "react portal tutorial",
  "react portfolio design",
  "react portfolio tips",
];
const useStyles = makeStyles(() => {
  return {
    searchResultCon: {
      position: "absolute",
      width: "90%",
      height: "13rem",
      top: "100%",
      backgroundColor: "white",
      overflow: "hidden",
    },
    singleSearchResult: {
      margin: "0",
      color: "black",
      cursor: "pointer",
      padding: "5px 3px",
      userSelect: "none",
      "&:hover": {
        backgroundColor: "#e5e5e5",
      },
    },
  };
});
const SearchResult = () => {
  const classes = useStyles();
  return (
    <div className={classes.searchResultCon}>
      {demoSearchResult.map((res, index) => {
        return (
          <p className={classes.singleSearchResult} key={index}>
            {res}
          </p>
        );
      })}
    </div>
  );
};

export default SearchResult;
