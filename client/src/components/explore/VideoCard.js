import { Grid, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import { withRouter } from "react-router-dom";
const videos = [
  {
    img: "https://i.ytimg.com/vi/PcHa6xPvlbg/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDBi0mZN-OTmcoxDmZIgO99T5xBoA",
    title:
      "Raqs-e-Bismil | Episode 25 | Presented by Master Paints, Powered by West Marina & SandalRaqs-e-Bismil | Episode 25 | Presented by Master Paints, Powered by West Marina & Sandal",
    channelName: "HUM TV",
    views: "10K",
    timeStamp: "3 hours ago",
    description:
      " Thank you for watching. Subscribe to Tsuriki Show! Thank you for watching.Subscribe to Tsuriki Show! Thank you for watching. Subscribe to Tsuriki Show! Thank you for watching. Subscribe to Tsuriki Show! Thank you for watching. Subscribe to Tsuriki Show!",
  },
];

const useStyle = makeStyles(() => {
  return {
    img: {
      width: "100%",
    },
    imgContainer: { position: "relative" },
    timeDurition: {
      position: "absolute",
      bottom: "5px",
      right: "5px",
      color: "white",
      margin: "0",
    },
    title: {
      color: "black",
      margin: "0",
    },
    channelNameAndViews: {
      color: "rgb(0 0 0 / 54%)",
      margin: "0",
      fontSize: "x-small",
    },
    description: {
      color: "#000000b8",
      margin: "0",
      fontSize: "small",
    },
  };
});
const VideoCard = (props) => {
  const classes = useStyle();
  const playVideo = () => {
    props.history.push("/video/IamFromExplore");
  };
  return (
    <Grid container spacing={1}>
      <Grid item sm={3} className={classes.imgContainer} onClick={playVideo}>
        <img
          className={classes.img}
          src={videos[0].img}
          alt={"video_thumbnail"}
        />
        <p className={classes.timeDurition}>8:44</p>
      </Grid>
      <Grid item sm={9}>
        <Grid container direction="column">
          <Grid item>
            <Typography className={classes.title}>
              {videos[0].title.length > 133
                ? videos[0].title.slice(0, 130) + "..."
                : videos[0].title}
            </Typography>
          </Grid>
          <Grid item>
            <p className={classes.channelNameAndViews}>
              {" "}
              {`${videos[0].channelName} ${videos[0].views} views . ${videos[0].timeStamp}`}
            </p>
          </Grid>
          <Grid item>
            <p className={classes.description}>
              {videos[0].description.length > 153
                ? videos[0].description.slice(0, 150) + "..."
                : videos[0].description}
            </p>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default withRouter(VideoCard);
