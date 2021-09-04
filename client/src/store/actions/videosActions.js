import axios from "axios";
import store from "../../store";
import { base } from "../util/BASE_API_ADDRESS";

export const fetchRelatedVideos = () => async (dispatch) => {
  try {
    dispatch({ type: "RELATED_VIDEOS_FETCH_START" });

    // const res = await axios.get("/video/randomvideos/12");
    const res = await axios.get(`${base}/video/randomvideos/12`);
    dispatch({ type: "RELATED_VIDEOS_FETCH_SUCCESS", payload: res.data });
  } catch (error) {
    dispatch({ type: "RELATED_VIDEOS_FETCH_ERRRO", payload: error.message });

    console.log(error.message);
  }
};

export const addToQueue = (video) => () => {
  store.dispatch({ type: "MINI_PLAYER_OPEN", payload: video });
};

export const removeVideoFromQueue = (id) => () => {
  const videoForMiniPlayers = store.getState().videos.videosForMiniPlayer;
  const videoAfterFilter = videoForMiniPlayers.filter(
    (video) => video.id !== id
  );
  store.dispatch({ type: "UPDATE_THE_QUEUE", payload: videoAfterFilter });
};
