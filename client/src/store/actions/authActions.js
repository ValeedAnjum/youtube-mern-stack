import axios from "axios";
import { setAuthToken } from "../util/setAuthToken";

export const loadUser = () => async (dispatch) => {
  try {
    if (localStorage.token) {
      setAuthToken(localStorage.token);
      const res = await axios.get("/auth/user");
      console.log(res.data);
      dispatch({ type: "SET_PROFILE", payload: res.data });
      // dispatch({ type: "LOGIN_SUCCESS", payload: localStorage.token });
      // dispatch({ type: "AsynchronousSuccess" });
      // dispatch({
      //   type: "DispalyNotifier",
      //   payload: { type: "success", msg: "Login successfully" },
      // });
    }
  } catch (error) {
    console.log(error);
  }
};

export const isEmailRegistered = (email) => async (dispatch) => {
  //   console.log(email);
  try {
    dispatch({ type: "IS_EMAIL_REGISTERED_START" });
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const body = JSON.stringify({ email });
    const res = await axios.post(`/auth/checkemailregistration`, body, config);
    dispatch({ type: "IS_EMAIL_REGISTERED_SUCCESS", payload: email });

    console.log(res.data);

    return res.data.length > 0;
  } catch (error) {
    console.log(error);
  }
};

export const signIn =
  ({ email, password }) =>
  async (dispatch) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    console.log(email);
    console.log(password);
    const body = JSON.stringify({ email, password });
    try {
      const res = await axios.post(`/auth/signin`, body, config);
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data.token });
      dispatch(loadUser());

      console.log(res.data);
    } catch (err) {
      console.log(err);
    }
  };

export const logOut = (dispatch) => async () => {
  dispatch({ type: "CLEAR_PROFILE" });
};
