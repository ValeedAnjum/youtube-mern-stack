const initialState = {
  relatedVideos: [],
  loadingRelatedVideos: false,
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

    default:
      return state;
  }
};
