import axios from "axios";
import { base } from "../util/BASE_API_ADDRESS";
import { setAuthToken } from "../util/setAuthToken";

export const loadUser = () => async (dispatch) => {
  try {
    if (localStorage.token) {
      setAuthToken(localStorage.token);
      // const res = await axios.get("/auth/user");
      const res = await axios.get(`${base}/auth/user`);
      dispatch({ type: "SET_PROFILE", payload: res.data });
    }
  } catch (error) {
    console.log(error);
  }
};

export const isEmailRegistered = (email) => async (dispatch) => {
  try {
    dispatch({ type: "IS_EMAIL_REGISTERED_START" });
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const body = JSON.stringify({ email });
    // const res = await axios.post(`/auth/checkemailregistration`, body, config);
    const res = await axios.post(
      `${base}/auth/checkemailregistration`,
      body,
      config
    );
    dispatch({ type: "IS_EMAIL_REGISTERED_SUCCESS", payload: email });
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
    const body = JSON.stringify({ email, password });
    try {
      // const res = await axios.post(`/auth/signin`, body, config);
      const res = await axios.post(`${base}/auth/signin`, body, config);
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data.token });
      dispatch(loadUser());
      return true;
    } catch (err) {
      return false;
    }
  };

export const register = (name, email, password) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const body = JSON.stringify({ name, email, password });
  try {
    // const res = await axios.post("/auth/register", body, config);
    const res = await axios.post(`${base}/auth/register`, body, config);
    dispatch({ type: "REGISTRATION_SUCCESS", payload: res.data.token });
    dispatch(loadUser());
  } catch (error) {
    console.log(error.message);
  }
};

export const passwordReset = (email) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  console.log("PASSOWRD_RESET");
  const body = JSON.stringify({ email });
  try {
    // const res = await axios.post("/auth/sendpasswordresetlink", body, config);
    const res = await axios.post(
      `${base}/auth/sendpasswordresetlink`,
      body,
      config
    );
    return res.data.success;
  } catch (error) {
    console.log(error);
    return false;
  }
};

export const logOut = (dispatch) => async () => {
  dispatch({ type: "CLEAR_PROFILE" });
};
