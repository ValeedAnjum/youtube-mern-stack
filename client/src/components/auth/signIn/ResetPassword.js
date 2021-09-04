import React, { useState } from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { Redirect, withRouter } from "react-router-dom";
import FormContentContainer from "../formContentContainer/FormContentContainer";
import {
  isEmailRegistered,
  loadUser,
} from "../../../store/actions/authActions";
import axios from "axios";
import { base } from "../../../store/util/BASE_API_ADDRESS";

const ResetPassword = ({ match, auth, PasswordReset, LoadUser }) => {
  const [loading, setLoading] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState({ state: false, msg: "" });
  if (auth) return <Redirect to="/home" />;

  const resetPassword = async () => {
    if (password.length < 6) return;
    // console.log(match.params.token);
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const body = JSON.stringify({ password });
    try {
      setLoading(true);
      // const res = await axios.post(
      //   `/auth/passwordresettokenverification/${match.params.token}`,
      //   body,
      //   config
      // );
      const res = await axios.post(
        `${base}/auth/passwordresettokenverification/${match.params.token}`,
        body,
        config
      );

      setLoading(false);
      if (res.data.token) {
        PasswordReset(res.data.token);
        LoadUser();
      }
    } catch (err) {
      //   console.log(err.response.data.errors);
      setError({ state: true, msg: err.response.data.errors[0].msg });
    }
  };
  const changePassHan = (event) => {
    setPassword(event.target.value);
  };
  const onFocusOfTextField = () => {
    setError({ state: false, msg: "" });
  };
  const onKeyPress = (event) => {
    if (event.key.charCodeAt(0) === 69) resetPassword();
  };
  return (
    <FormContentContainer
      heading="Reset Your Password"
      inputFieldLabels={[
        {
          labelText: "Password",
          inputFieldType: "password",
          valueChangeHandler: changePassHan,
          onkeypress: onKeyPress,
          value: password,
          error: error.state,
          helperText: error.msg,
          onFocusOfTextField: onFocusOfTextField,
        },
      ]}
      rightBtnLabel="Save"
      rightBtnClickHandler={resetPassword}
      loading={loading}
    />
  );
};

const mapState = (state) => {
  return {
    auth: state.auth.authenticated,
  };
};
const mapDispatch = (dispatch) => {
  return {
    IsEmailRegister: (email) => dispatch(isEmailRegistered(email)),
    PasswordReset: (token) =>
      dispatch({ type: "PASSWORD_RESET_SUCCESS", payload: token }),
    LoadUser: () => dispatch(loadUser()),
  };
};

export default compose(
  connect(mapState, mapDispatch),
  withRouter
)(ResetPassword);
