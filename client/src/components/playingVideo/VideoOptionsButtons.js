import React, { useEffect, useState } from "react";
import { IconButton, makeStyles } from "@material-ui/core";
import ThumbUpAltOutlinedIcon from "@material-ui/icons/ThumbUpAltOutlined";
import ThumbDownOutlinedIcon from "@material-ui/icons/ThumbDownOutlined";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import ThumbDownAltIcon from "@material-ui/icons/ThumbDownAlt";
import ShareOutlinedIcon from "@material-ui/icons/ShareOutlined";
import MoreHorizOutlinedIcon from "@material-ui/icons/MoreHorizOutlined";
import axios from "axios";

const useStyles = makeStyles(() => {
  return {
    iconBtn: {
      fontSize: "0.8rem",
      "&:hover": {
        backgroundColor: "transparent",
      },
    },
  };
});
const VideoOptionsButtons = ({ videoId }) => {
  const classes = useStyles();
  const [likesAndUnlikes, setLikesAndUnlikes] = useState({
    likes: null,
    unlikes: null,
  });
  useEffect(() => {
    fetchNumberOfLikes(videoId);
    fetchNumberOfUnlikes(videoId);
  }, [videoId]);

  const fetchNumberOfLikes = async (id) => {
    setLikesAndUnlikes((prevState) => ({ ...prevState, likes: null }));
    try {
      const res = await axios.get(`/video/getnumberoflikes/${id}`);
      setLikesAndUnlikes((prevState) => ({
        ...prevState,
        likes: Number(res.data),
      }));
    } catch (error) {
      console.log(error);
    }
  };

  const fetchNumberOfUnlikes = async (id) => {
    setLikesAndUnlikes((prevState) => ({ ...prevState, likes: null }));
    try {
      const res = await axios.get(`/video/getnumberofunlikes/${id}`);
      setLikesAndUnlikes((prevState) => ({
        ...prevState,
        unlikes: Number(res.data),
      }));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <IconButton className={classes.iconBtn} disableRipple>
        <ThumbUpAltOutlinedIcon />
        {likesAndUnlikes.likes && likesAndUnlikes.likes}
      </IconButton>
      <IconButton className={classes.iconBtn} disableRipple>
        <ThumbDownOutlinedIcon />
        {likesAndUnlikes.unlikes && likesAndUnlikes.unlikes}
      </IconButton>
      <IconButton disableRipple className={classes.iconBtn}>
        <ShareOutlinedIcon />
        SHARE
      </IconButton>
      <IconButton disableRipple className={classes.iconBtn}>
        <MoreHorizOutlinedIcon />
      </IconButton>
    </>
  );
};

export default VideoOptionsButtons;
