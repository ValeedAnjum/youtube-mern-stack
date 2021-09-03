import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { Redirect, withRouter } from "react-router-dom";
import FormContentContainer from "../formContentContainer/FormContentContainer";
import { passwordReset, signIn } from "../../../store/actions/authActions";

const ForgotPassword = ({ history, email, auth, PasswordReset }) => {
  const [loading, setLoading] = useState(false);
  const [heading, setHeading] = useState("Password Reset");

  useEffect(() => {
    if (auth) return <Redirect to="/home" />;
    if (!email) {
      return history.push("/signin/email");
    }

    const fetchData = async () => {
      setLoading(true);
      setHeading("Sending Password Reset Link");
      try {
        await PasswordReset(email);
        setLoading(false);
        setHeading("Please Check Your Email");
      } catch (error) {
        setLoading(false);

        setHeading("Something Went Wrong");
      }
    };

    fetchData();
  }, [auth, email, history, PasswordReset]);

  return <FormContentContainer heading={heading} loading={loading} />;
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
    PasswordReset: (email) => dispatch(passwordReset(email)),
  };
};
export default compose(
  connect(mapState, mapDispatch),
  withRouter
)(ForgotPassword);
