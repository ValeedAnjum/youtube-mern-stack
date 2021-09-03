import React, { useState } from "react";
import { connect } from "react-redux";

import { Redirect, withRouter } from "react-router-dom";
import { compose } from "redux";
import { register } from "../../../store/actions/authActions";
import FormContentContainer from "../formContentContainer/FormContentContainer";
import { ValidateName } from "../util/formValidations";

const Password = ({ history, email, auth, Register }) => {
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [errorforName, seterrorforName] = useState({ state: false, msg: "" });
  const [errorforPassword, seterrorforPassword] = useState({
    state: false,
    msg: "",
  });
  if (email === null) {
    return <Redirect to="/signup/email" />;
  }
  if (auth) return <Redirect to="/home" />;
  const goToSignIn = () => {
    history.push("/signin/email");
  };
  const register = () => {
    // if (name === "" || password === "") return;
    const isNameValid = ValidateName(name);

    if (!isNameValid) {
      return seterrorforName({
        state: true,
        msg: "Please enter a name between 5 to 20 characters",
      });
    }
    if (password.length < 6) {
      return seterrorforPassword({
        state: true,
        msg: "Length should be greater than 5",
      });
    }
    setLoading(true);
    Register(name, email, password);
  };
  const changePassHan = (event) => {
    setPassword(event.target.value);
  };
  const changeNameHan = (event) => {
    setName(event.target.value);
  };
  const onFocusOfTextFieldForName = () => {
    seterrorforName({ state: false, msg: "" });
  };
  const onFocusOfTextFieldForPassword = () => {
    seterrorforPassword({ state: false, msg: "" });
  };
  const onKeyPress = (event) => {
    if (event.key.charCodeAt(0) === 69) register();
  };
  return (
    <FormContentContainer
      heading="Sign up"
      inputFieldLabels={[
        {
          labelText: "Name",
          valueChangeHandler: changeNameHan,
          onkeypress: onKeyPress,
          value: name,
          error: errorforName.state,
          helperText: errorforName.msg,
          onFocusOfTextField: onFocusOfTextFieldForName,
        },
        {
          labelText: "Password",
          inputFieldType: "password",
          value: password,
          valueChangeHandler: changePassHan,
          onkeypress: onKeyPress,
          error: errorforPassword.state,
          helperText: errorforPassword.msg,
          onFocusOfTextField: onFocusOfTextFieldForPassword,
        },
      ]}
      inputFieldType="password"
      leftBtnLabel="Sign in"
      leftBtnClickHandler={goToSignIn}
      rightBtnLabel="Next"
      rightBtnClickHandler={register}
      loading={loading}
    />
  );
};

const mapState = (state) => {
  return {
    email: state.auth.emailAddress,
    auth: state.auth.authenticated,
  };
};

const mapDispatch = (dispatch) => {
  return {
    Register: (name, email, password) =>
      dispatch(register(name, email, password)),
  };
};

export default compose(connect(mapState, mapDispatch), withRouter)(Password);
