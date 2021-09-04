import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { IconButton, makeStyles } from "@material-ui/core";
import ThumbUpAltOutlinedIcon from "@material-ui/icons/ThumbUpAltOutlined";
import ThumbDownOutlinedIcon from "@material-ui/icons/ThumbDownOutlined";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import ThumbDownAltIcon from "@material-ui/icons/ThumbDownAlt";
import ShareOutlinedIcon from "@material-ui/icons/ShareOutlined";
import MoreHorizOutlinedIcon from "@material-ui/icons/MoreHorizOutlined";
import axios from "axios";
import { base } from "../../store/util/BASE_API_ADDRESS";

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
const VideoOptionsButtons = ({ videoId, auth, history }) => {
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
    if (auth) {
      likedByTheUser(videoId);
      unlikedByTheUser(videoId);
    }
  }, [videoId, auth]);

  const fetchNumberOfLikes = async (id) => {
    setLikesAndUnlikes((prevState) => ({ ...prevState, likes: null }));
    try {
      // const res = await axios.get(`/video/getnumberoflikes/${id}`);
      const res = await axios.get(`${base}/video/getnumberoflikes/${id}`);
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
      // const res = await axios.get(`/video/getnumberofunlikes/${id}`);
      const res = await axios.get(`${base}/video/getnumberofunlikes/${id}`);
      setLikesAndUnlikes((prevState) => ({
        ...prevState,
        unlikes: Number(res.data),
      }));
    } catch (error) {
      console.log(error);
    }
  };

  const likedByTheUser = async (id) => {
    try {
      // const res = await axios.get(`/video/likedbyuser/${id}`);
      const res = await axios.get(`${base}/video/likedbyuser/${id}`);
      setLikedByUser(res.data.length > 0);
    } catch (error) {
      setLikedByUser(false);
    }
  };

  const unlikedByTheUser = async (id) => {
    try {
      // const res = await axios.get(`/video/unlikedbyuser/${id}`);
      const res = await axios.get(`${base}/video/unlikedbyuser/${id}`);
      setUnlikedByUser(res.data.length > 0);
    } catch (error) {
      setUnlikedByUser(false);
    }
  };

  const like = async (id) => {
    if (!auth) return history.push("/signin/email");
    try {
      setLikedByUser(true);
      // const res = await axios.post(`/video/like/${id}`);
      const res = await axios.post(`${base}/video/like/${id}`);
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
      // console.log(error.response.data.msg);
    }
  };

  const unlike = async (id) => {
    if (!auth) return history.push("/signin/email");
    try {
      setUnlikedByUser(true);
      // const res = await axios.post(`/video/unlike/${id}`);
      const res = await axios.post(`${base}/video/unlike/${id}`);
      res.data.unlike
        ? setLikesAndUnlikes((prevState) => ({
            ...prevState,
            unlikes: prevState.unlikes + 1,
          }))
        : setLikesAndUnlikes((prevState) => ({
            ...prevState,
            unlikes: prevState.unlikes - 1,
          }));

      setUnlikedByUser(res.data.unlike);
    } catch (error) {
      setUnlikedByUser(false);
      console.log(error);
    }
  };

  return (
    <>
      <IconButton className={classes.iconBtn} onClick={() => like(videoId)}>
        {likedByUser ? <ThumbUpAltIcon /> : <ThumbUpAltOutlinedIcon />}
        {likesAndUnlikes.likes && likesAndUnlikes.likes}
      </IconButton>
      <IconButton className={classes.iconBtn} onClick={() => unlike(videoId)}>
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

export default connect(mapState)(withRouter(VideoOptionsButtons));
