import { Grid, Hidden, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import moment from "moment";
import { withRouter } from "react-router-dom";
import MoreVideoOptions from "./MoreVideoOptions";

const des =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In iaculis ligula lorem, auctor vehicula nunc convallis id. Donec fringilla lorem vitae massa feugiat lobortis. Nulla scelerisque quam vel eleifend vestibulum. Nam ac egestas diam, ornare ornare erat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nam mollis arcu id tempor elementum. Nunc a ipsum id metus rutrum pharetra. Curabitur orci eros, vestibulum sit amet viverra non, pharetra a arcu. Donec varius vitae mauris quis porta. Quisque porta vulputate erat ut fringilla. Ut interdum, nunc sit amet accumsan mollis, sem massa malesuada nisi, in lobortis nibh leo in turpis. Nullam sagittis neque id lobortis luctus. Duis sit amet scelerisque dolor, at feugiat nibh. Quisque condimentum consequat neque ullamcorper rhoncus.";

const useStyle = makeStyles(() => {
  return {
    img: {
      width: "100%",
    },
    imgContainer: { position: "relative", cursor: "pointer" },
    timeDurition: {
      position: "absolute",
      padding: "0px 4px",
      bottom: "13px",
      right: "10px",
      color: "white",
      margin: "0",
      borderRadius: "5px",
      backgroundColor: "#000000ed",
    },
    title: {
      color: "black",
      margin: "0",
      cursor: "pointer",
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
    headingAndMoreCon: {
      flexWrap: "nowrap",
    },
  };
});
const VideoCard = ({ history, video }) => {
  const classes = useStyle();
  const { thumbnail, title, _id, channelName, createdAt, videoDuration } =
    video;
  const playVideo = () => {
    history.push(`/video/${_id}`);
  };
  return (
    <Grid container spacing={1}>
      <Grid
        item
        sm={3}
        container
        className={classes.imgContainer}
        onClick={playVideo}
      >
        <img className={classes.img} src={thumbnail} alt={"video_thumbnail"} />
        <p className={classes.timeDurition}>{videoDuration}</p>
      </Grid>
      <Grid item sm={9} xs={12}>
        <Grid container direction="column">
          <Grid container item className={classes.headingAndMoreCon}>
            <Grid item sm={11} xs={11}>
              <Hidden xsDown>
                <Typography className={classes.title} onClick={playVideo}>
                  {title.length > 133 ? title.slice(0, 130) + "..." : title}
                </Typography>
              </Hidden>
              <Hidden smUp>
                <Typography className={classes.title}>
                  {title.length > 73 ? title.slice(0, 70) + "..." : title}
                </Typography>
              </Hidden>
            </Grid>
            <Grid item sm={1} xs={1}>
              <MoreVideoOptions
                video={{ img: thumbnail, title, channelName, id: _id }}
              />
            </Grid>
          </Grid>
          <Hidden xsDown>
            <Grid item>
              <p className={classes.channelNameAndViews}>
                {`${video.channelName.toUpperCase()} ${
                  Number(video.views).toPrecision(2) / 1000
                }k views . ${moment(createdAt).fromNow()}`}
                {/* {`${videos[0].channelName} ${videos[0].views} views . ${videos[0].timeStamp}`} */}
              </p>
            </Grid>
            <Grid item>
              <p className={classes.description}>
                {des.length > 153 ? des.slice(0, 150) + "..." : des}
              </p>
            </Grid>
          </Hidden>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default withRouter(VideoCard);
