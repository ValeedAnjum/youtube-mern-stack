import React, { useState } from "react";
import { Grid, IconButton } from "@material-ui/core";
import axios from "axios";
import MicIcon from "@material-ui/icons/Mic";
import SearchIcon from "@material-ui/icons/Search";

import SearchResult from "./SearchResult";

const Searchbar = ({ classes }) => {
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
      const results = await axios.get(
        `http://localhost:5000/video/search/${value}`
      );
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
  return (
    <Grid container>
      <Grid container justify="center" alignItems="center">
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
          />
          {searchResult && searchResult.length > 0 && (
            <SearchResult
              setSearchResult={setSearchResult}
              searchResult={searchResult}
            />
          )}
          <button
            aria-label="search-video"
            className={classes.searchTextBoxButton}
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

export default Searchbar;
