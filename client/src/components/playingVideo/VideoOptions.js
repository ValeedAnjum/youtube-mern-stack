import React, { useEffect, useState } from "react";
import { Grid, makeStyles } from "@material-ui/core";
import Skeleton from "@material-ui/lab/Skeleton";
import axios from "axios";
import moment from "moment";
import VideoOptionsButtons from "./VideoOptionsButtons";
import { base } from "../../store/util/BASE_API_ADDRESS";

const useStyles = makeStyles((theme) => {
  return {
    videoOptionsMainCon: {
      borderBottom: "1px solid #0000003d",
      marginTop: "2rem",
      [theme.breakpoints.down("xs")]: {
        marginTop: "0px",
      },
    },
    viewAndDataCon: {
      paddingLeft: "5px",
    },
    iconCon: {
      overflow: "auto",
      "&::-webkit-scrollbar": {
        height: "0.1em",
      },
      "&::-webkit-scrollbar-thumb": {
        backgroundColor: "#d4d4d4",
        width: "0.1em",
      },
      [theme.breakpoints.down("xs")]: {
        justifyContent: "flex-start",
      },
    },
  };
});
const VideoOptions = ({ videoId }) => {
  const classes = useStyles();
  const [viewAndData, setViewAndData] = useState(null);
  useEffect(() => {
    fetchVideoViewsData(videoId);
  }, [videoId]);
  const fetchVideoViewsData = async (id) => {
    setViewAndData(null);
    // const res = await axios.get(`/video/videoviewsanddata/${id}`);
    const res = await axios.get(`${base}/video/videoviewsanddata/${id}`);
    setViewAndData(res.data);
    // setTags(tagGenerator(res.data.title));
  };
  return (
    <Grid item xs={12} container className={classes.videoOptionsMainCon}>
      <Grid item sm={6} xs={12} className={classes.viewAndDataCon}>
        {viewAndData ? (
          `${viewAndData.views} views . ${moment(viewAndData.createdAt).format(
            "LL"
          )}`
        ) : (
          <Skeleton variant="text" />
        )}
      </Grid>
      <Grid
        className={classes.iconCon}
        item
        sm={6}
        xs={12}
        container
        wrap="nowrap"
        justifyContent="flex-end"
      >
        <VideoOptionsButtons videoId={videoId} />
      </Grid>
    </Grid>
  );
};

export default VideoOptions;
