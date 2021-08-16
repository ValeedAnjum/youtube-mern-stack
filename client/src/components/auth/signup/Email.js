import React, { useState } from "react";
import { connect } from "react-redux";

import { Redirect, withRouter } from "react-router-dom";
import { compose } from "redux";
import { isEmailRegistered } from "../../../store/actions/authActions";
import FormContentContainer from "../formContentContainer/FormContentContainer";
import { ValidateEmail } from "../util/formValidations";

const Email = ({ history, IsEmailRegister, auth }) => {
  const [loading, setLoading] = useState(false);
  const [email, setemail] = useState("");
  const [error, setError] = useState({ state: false, msg: "" });

  if (auth) return <Redirect to="/home" />;

  const goToSignin = () => {
    history.push("/signin/email");
  };

  const checkEmailIsReg = async () => {
    if (email === "") return;
    const isValidEmail = ValidateEmail(email);
    if (!isValidEmail) {
      return setError({
        state: true,
        msg: "Please Enter a valid email address",
      });
    }
    try {
      setLoading(true);
      const IsEmailInDb = await IsEmailRegister(
        email.trim().toLocaleLowerCase()
      );
      setLoading(false);
      IsEmailInDb
        ? setError({ state: true, msg: "Email is already registerd" })
        : history.push("/signup/password");
    } catch (error) {
      setLoading(false);
    }
  };

  const changeEmailHan = (event) => {
    setemail(event.target.value);
  };
  const onFocusOfTextField = () => {
    setError({ state: false, msg: "" });
  };
  const onKeyPress = (event) => {
    if (event.key.charCodeAt(0) === 69) checkEmailIsReg();
  };
  return (
    <FormContentContainer
      heading="Sign up"
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
      leftBtnLabel="Sign in"
      leftBtnClickHandler={goToSignin}
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
