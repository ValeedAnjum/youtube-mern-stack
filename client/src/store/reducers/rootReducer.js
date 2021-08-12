import { combineReducers } from "redux";
import { videoReducer } from "./videoReducer";
import { authReducer } from "./authReducer";
import { reducer as formReducer } from "redux-form";

export const rootReducer = combineReducers({
  videos: videoReducer,
  form: formReducer,
  auth: authReducer,
});
