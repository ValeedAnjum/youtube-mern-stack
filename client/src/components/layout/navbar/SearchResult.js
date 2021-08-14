import { makeStyles } from "@material-ui/core";
import React from "react";
import { Fragment } from "react";
import { withRouter } from "react-router-dom";

const useStyles = makeStyles(() => {
  return {
    searchResultCon: {
      position: "absolute",
      width: "90%",
      top: "100%",
      backgroundColor: "white",
      overflow: "hidden",
      zIndex: "2",
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
    forClosingSearchRes: {
      position: "fixed",
      width: "100%",
      top: "0",
      left: "0",
      height: "100vh",
      zIndex: "1",
    },
  };
});
const SearchResult = ({
  searchResult,
  setSearchResult,
  history,
  setSearchTextBoxValue,
}) => {
  const classes = useStyles();
  // const { searchResult, setSearchResult,history } = props;
  const goToResultPage = (val) => {
    // console.log(history);
    setSearchTextBoxValue(val);
    setSearchResult(null);
    const withPlusSignsInString = val.replaceAll(" ", "+");
    history.push(`/home/search/q=${withPlusSignsInString}`);
  };
  return (
    <Fragment>
      <div id="searchResCon" className={classes.searchResultCon}>
        {searchResult.map((res) => {
          return (
            <p
              className={classes.singleSearchResult}
              key={res._id}
              onClick={() => goToResultPage(res.searchTitle)}
            >
              {res.searchTitle}
            </p>
          );
        })}
      </div>
      <div
        className={classes.forClosingSearchRes}
        onClick={() => setSearchResult(null)}
      ></div>
    </Fragment>
  );
};

export default withRouter(SearchResult);
