import React from "react";

import { Grid, IconButton } from "@material-ui/core";
import MicIcon from "@material-ui/icons/Mic";
import SearchIcon from "@material-ui/icons/Search";
// import SearchResult from "./SearchResult";

const Searchbar = ({ classes }) => {
  return (
    <Grid container>
      <Grid container justify="center" alignItems="center">
        <div
          style={{
            display: "flex",
            width: "70%",
            height: "60%",
            position: "relative",
          }}
        >
          <input
            type="text"
            placeholder="Search"
            className={classes.searchTextBox}
          />
          {/* <SearchResult /> */}
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
