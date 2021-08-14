import React, { useState } from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { Redirect, withRouter } from "react-router-dom";
import FormContentContainer from "../formContentContainer/FormContentContainer";
import { isEmailRegistered } from "../../../store/actions/authActions";

const Email = ({ history, IsEmailRegister, auth }) => {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [error, setError] = useState({ state: false, msg: "" });
  if (auth) return <Redirect to="/home" />;
  const goToSignUp = () => {
    history.push("/signup/email");
  };
  const checkEmailIsReg = async () => {
    if (email === "") return;
    try {
      setLoading(true);
      const IsEmailInDb = await IsEmailRegister(
        email.trim().toLocaleLowerCase()
      );
      setLoading(false);
      IsEmailInDb
        ? history.push("/signin/password")
        : setError({ state: true, msg: "user does not exits" });
    } catch (error) {
      setLoading(false);
    }
  };
  const changeEmailHan = (event) => {
    setEmail(event.target.value);
  };
  const onFocusOfTextField = () => {
    setError({ state: false, msg: "" });
  };
  const onKeyPress = (event) => {
    if (event.key.charCodeAt(0) === 69) checkEmailIsReg();
  };
  return (
    <FormContentContainer
      heading="Sign in"
      inputFieldLabels={[
        {
          labelText: "Email",
          valueChangeHandler: changeEmailHan,
          onkeypress: onKeyPress,
          value: email,
          error: error.state,
          helperText: error.msg,
          onFocusOfTextField: onFocusOfTextField,
        },
      ]}
      leftBtnLabel="Create account"
      leftBtnClickHandler={goToSignUp}
      rightBtnLabel="Next"
      rightBtnClickHandler={checkEmailIsReg}
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
  };
};

export default compose(connect(mapState, mapDispatch), withRouter)(Email);
