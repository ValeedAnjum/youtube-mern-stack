import React, { useState } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { withRouter } from "react-router-dom";
import FormContentContainer from "../formContentContainer/FormContentContainer";
import { signIn } from "../../../store/actions/authActions";

const Password = ({ history, emailIsReg, SignIn, email }) => {
  const [loading, setLoading] = useState(false);
  const [password, setPassword] = useState("");
  if (!emailIsReg) {
    history.push("/signin/email");
  }
  const goToSignUp = () => {
    history.push("/signup/email");
  };
  const signin = async () => {
    if (email === "" || password === "") return;
    setLoading(true);
    await SignIn({ email, password });
    setLoading(false);
    // history.goBack();
    history.push("/home");
  };
  const changePassHan = (event) => {
    setPassword(event.target.value);
  };
  return (
    <FormContentContainer
      heading="Sign in"
      inputFieldLabels={[
        {
          labelText: "Password",
          inputFieldType: "password",
          valueChangeHandler: changePassHan,
          value: password,
        },
      ]}
      leftBtnLabel="Create account"
      leftBtnClickHandler={goToSignUp}
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
  };
};

const mapDispatch = (dispatch) => {
  return {
    SignIn: (email, password) => dispatch(signIn(email, password)),
  };
};
export default compose(connect(mapState, mapDispatch), withRouter)(Password);
