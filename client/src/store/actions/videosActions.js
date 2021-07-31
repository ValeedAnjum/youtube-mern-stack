import axios from "axios";

export const fetchRelatedVideos = () => async (dispatch) => {
  try {
    dispatch({ type: "RELATED_VIDEOS_FETCH_START" });

    const res = await axios.get("/video/randomvideos/12");
    dispatch({ type: "RELATED_VIDEOS_FETCH_SUCCESS", payload: res.data });
  } catch (error) {
    dispatch({ type: "RELATED_VIDEOS_FETCH_ERRRO", payload: error.message });

    console.log(error.message);
  }
};
