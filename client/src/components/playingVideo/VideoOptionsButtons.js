import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
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
const VideoOptionsButtons = ({ videoId, auth }) => {
  const classes = useStyles();
  const [likesAndUnlikes, setLikesAndUnlikes] = useState({
    likes: null,
    unlikes: null,
  });
  const [likedByUser, setLikedByUser] = useState(false);
  const [unlikedByUser, setUnlikedByUser] = useState(false);
  useEffect(() => {
    fetchNumberOfLikes(videoId);
    fetchNumberOfUnlikes(videoId);
    likedByTheUser(videoId);
    unlikedByTheUser(videoId);
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

  const likedByTheUser = async (id) => {
    if (!auth) return;
    try {
      const res = await axios.get(`/video/likedbyuser/${id}`);
      setLikedByUser(res.data.length > 0);
    } catch (error) {
      console.log(error);
    }
  };

  const unlikedByTheUser = async (id) => {
    if (!auth) return;
    try {
      const res = await axios.get(`/video/unlikedbyuser/${id}`);
      setUnlikedByUser(res.data.length > 0);
    } catch (error) {
      console.log(error);
    }
  };

  const like = async (id) => {
    try {
      setLikedByUser(true);
      const res = await axios.post(`/video/like/${id}`);
      res.data.like
        ? setLikesAndUnlikes((prevState) => ({
            ...prevState,
            likes: prevState.likes + 1,
          }))
        : setLikesAndUnlikes((prevState) => ({
            ...prevState,
            likes: prevState.likes - 1,
          }));

      setLikedByUser(res.data.like);
    } catch (error) {
      setLikedByUser(false);

      console.log(error);
    }
  };
  return (
    <>
      <IconButton
        className={classes.iconBtn}
        disableRipple
        onClick={() => like(videoId)}
      >
        {likedByUser ? <ThumbUpAltIcon /> : <ThumbUpAltOutlinedIcon />}
        {likesAndUnlikes.likes && likesAndUnlikes.likes}
      </IconButton>
      <IconButton className={classes.iconBtn} disableRipple>
        {unlikedByUser ? <ThumbDownAltIcon /> : <ThumbDownOutlinedIcon />}
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

const mapState = (state) => {
  return {
    auth: state.auth.authenticated,
  };
};

export default connect(mapState)(VideoOptionsButtons);
