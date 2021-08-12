import React, { useState } from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import FormContentContainer from "../formContentContainer/FormContentContainer";
import { isEmailRegistered } from "../../../store/actions/authActions";

const Email = ({ history, IsEmailRegister }) => {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [error, setError] = useState({ state: false, msg: "" });
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
      // IsEmailInDb && history.push("/signin/password");
      IsEmailInDb
        ? history.push("/signin/password")
        : setError({ state: true, msg: "user does not exits" });
    } catch (error) {
      setLoading(false);
    }
    // history.goBack();
  };
  const changeEmailHan = (event) => {
    setEmail(event.target.value);
  };
  const onFocusOfTextField = () => {
    setError({ state: false, msg: "" });
  };
  return (
    <FormContentContainer
      heading="Sign in"
      inputFieldLabels={[
        {
          labelText: "Email",
          valueChangeHandler: changeEmailHan,
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
  console.log(state);
  return {};
};

const mapDispatch = (dispatch) => {
  return {
    IsEmailRegister: (email) => dispatch(isEmailRegistered(email)),
  };
};

export default compose(connect(mapState, mapDispatch), withRouter)(Email);
