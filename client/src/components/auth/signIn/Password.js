import React, { useState } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { Redirect, withRouter } from "react-router-dom";
import FormContentContainer from "../formContentContainer/FormContentContainer";
import { signIn } from "../../../store/actions/authActions";

const Password = ({ history, emailIsReg, SignIn, email, auth }) => {
  const [loading, setLoading] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState({ state: false, msg: "" });
  if (auth) return <Redirect to="/home" />;
  if (!emailIsReg) {
    history.push("/signin/email");
  }
  const goToForgotPassword = () => {
    history.push("/signin/forgotpassword");
  };
  const signin = async () => {
    if (email === "" || password === "") return;
    setLoading(true);
    const isAuthenticated = await SignIn({ email, password });
    setLoading(false);

    isAuthenticated
      ? history.push("/home")
      : setError({ state: true, msg: "Wrong Password" });
  };
  const changePassHan = (event) => {
    setPassword(event.target.value);
  };
  const onFocusOfTextField = () => {
    setError({ state: false, msg: "" });
  };
  const onKeyPress = (event) => {
    if (event.key.charCodeAt(0) === 69) signin();
  };
  return (
    <FormContentContainer
      heading="Sign in"
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
      leftBtnLabel="Forgot password?"
      leftBtnClickHandler={goToForgotPassword}
      rightBtnLabel="Next"
      rightBtnClickHandler={signin}
      loading={loading}
    />
  );
};

const mapState = (state) => {
  return {
    emailIsReg: state.auth.emailIsReg,
    email: state.auth.emailAddress,
    auth: state.auth.authenticated,
  };
};

const mapDispatch = (dispatch) => {
  return {
    SignIn: (email, password) => dispatch(signIn(email, password)),
  };
};
export default compose(connect(mapState, mapDispatch), withRouter)(Password);
