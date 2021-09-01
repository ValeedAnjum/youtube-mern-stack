import { Grid, makeStyles, Typography } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles(() => {
  return {
    tagCon: {
      paddingLeft: "3px",
    },
    tag: {
      color: "blue",
      cursor: "pointer",
      fontSize: "0.8rem",
      marginRight: "0.3rem",
    },
    titleCon: {
      paddingLeft: "5px",
    },
    title: {
      fontSize: "1.2rem",
      fontWeight: "400",
      color: "black",
    },
  };
});
const VideoTitleAndTags = ({ title, tags }) => {
  const classes = useStyles();
  return (
    <>
      <Grid item xs={12} container className={classes.tagCon}>
        {tags
          ? tags.map((tag, index) => (
              <Tags key={index} className={classes.tag} tag={tag} />
            ))
          : "loading tags"}
      </Grid>
      <Grid item xs={12} className={classes.titleCon}>
        {title ? (
          <Typography className={classes.title} variant="h1">
            {title}
          </Typography>
        ) : (
          "Loadinga.sa"
        )}
      </Grid>
    </>
  );
};

const Tags = ({ tag, className }) => {
  return <Typography className={className}>#{`${tag}`}</Typography>;
};
export default VideoTitleAndTags;
