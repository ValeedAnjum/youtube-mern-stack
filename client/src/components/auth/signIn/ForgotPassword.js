import React, { useState } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { Redirect, withRouter } from "react-router-dom";
import FormContentContainer from "../formContentContainer/FormContentContainer";
import { signIn } from "../../../store/actions/authActions";

const ForgotPassword = ({ history, emailIsReg, SignIn, email, auth }) => {
  if (auth) return <Redirect to="/home" />;
  console.log(email);
  if (!email) {
    history.push("/signin/email");
  }

  return <FormContentContainer heading="Please Check Your Email" />;
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
export default compose(
  connect(mapState, mapDispatch),
  withRouter
)(ForgotPassword);
