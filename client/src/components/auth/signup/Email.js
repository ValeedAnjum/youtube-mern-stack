import React, { useState } from "react";

import { withRouter } from "react-router-dom";
import FormContentContainer from "../formContentContainer/FormContentContainer";

const Email = ({ history }) => {
  const [loading, setLoading] = useState(false);
  const goToSignin = () => {
    history.push("/signin/email");
  };
  const checkEmailIsReg = () => {
    console.log("do something");
    setLoading(true);
    history.push("/signup/password");
    // history.goBack();
  };
  const changeEmailHan = (event) => {
    console.log(event.target.value);
  };
  return (
    <FormContentContainer
      heading="Sign up"
      inputFieldLabels={[{ labelText: "Email" }]}
      leftBtnLabel="Sign in"
      leftBtnClickHandler={goToSignin}
      rightBtnLabel="Next"
      rightBtnClickHandler={checkEmailIsReg}
      loading={loading}
    />
  );
};

export default withRouter(Email);
