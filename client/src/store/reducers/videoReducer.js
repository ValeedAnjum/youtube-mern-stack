const initialState = {
  relatedVideos: [],
  loadingRelatedVideos: false,
  videosForMiniPlayer: [],
  modelName: null,
};

export const videoReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "RELATED_VIDEOS_FETCH_START":
      return { ...state, loadingRelatedVideos: true };
    case "RELATED_VIDEOS_FETCH_SUCCESS":
      return {
        ...state,
        loadingRelatedVideos: false,
        relatedVideos: [...state.relatedVideos, ...payload],
      };
    // for mini player
    case "MINI_PLAYER_OPEN":
      return {
        ...state,
        modelName: "MINI_PLAYER_OPEN",
        videosForMiniPlayer: [...state.videosForMiniPlayer, payload],
      };
    case "CLEAR_THE_QUEUE":
      return { ...state, videosForMiniPlayer: [], modelName: null };
    case "UPDATE_THE_QUEUE":
      return { ...state, videosForMiniPlayer: payload };
    default:
      return state;
  }
};
