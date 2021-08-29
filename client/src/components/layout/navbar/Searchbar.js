import React, { useState } from "react";
import { Grid, IconButton } from "@material-ui/core";
import axios from "axios";
import MicIcon from "@material-ui/icons/Mic";
import SearchIcon from "@material-ui/icons/Search";

import SearchResult from "./SearchResult";
import { withRouter } from "react-router-dom";
import { base } from "../../../store/util/BASE_API_ADDRESS";

const Searchbar = ({ classes, history }) => {
  const [searchTextBoxValue, setSearchTextBoxValue] = useState("");
  const [searchResult, setSearchResult] = useState(null);
  const searchTextBoxValChangeHan = (event) => {
    let newVal = event.target.value;
    setSearchTextBoxValue(newVal);
    if (newVal !== "") {
      return searchRes(newVal);
    }
    setSearchResult(null);
  };
  const searchRes = async (value) => {
    try {
      // const results = await axios.get(`/video/search/${value}`);
      const results = await axios.get(`${base}/video/search/${value}`);
      console.log(results.data);
      setSearchResult(results.data);
    } catch (error) {
      console.log(error);
      setSearchResult(null);
    }
  };
  const onFocus = async (event) => {
    const val = event.target.value;
    if (val !== "") {
      searchRes(val);
    }
  };
  const goToResultPage = () => {
    setSearchResult(null);
    const withPlusSignsInString = searchTextBoxValue.replaceAll(" ", "+");
    history.push(`/home/search/q=${withPlusSignsInString}`);
  };
  const onKeyDown = (event) => {
    if (event.key === "Enter" && searchTextBoxValue !== "") {
      goToResultPage();
    }
  };
  return (
    <Grid container>
      <Grid container justifyContent="center" alignItems="center">
        <div
          style={{
            display: "flex",
            width: "70%",
            height: "48%",
            position: "relative",
          }}
        >
          <input
            type="text"
            placeholder="Search"
            value={searchTextBoxValue}
            className={classes.searchTextBox}
            onChange={searchTextBoxValChangeHan}
            onFocus={onFocus}
            onKeyDown={onKeyDown}
          />
          {searchResult && searchResult.length > 0 && (
            <SearchResult
              setSearchTextBoxValue={setSearchTextBoxValue}
              setSearchResult={setSearchResult}
              searchResult={searchResult}
            />
          )}
          <button
            aria-label="search-video"
            className={classes.searchTextBoxButton}
            onClick={goToResultPage}
          >
            <SearchIcon />
          </button>
        </div>
        <IconButton classes={{ root: classes.disableHoverBgClr }}>
          <MicIcon />
        </IconButton>
      </Grid>
    </Grid>
  );
};

export default withRouter(Searchbar);
