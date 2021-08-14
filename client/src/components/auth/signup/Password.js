import React, { useState } from "react";

import { withRouter } from "react-router-dom";
import FormContentContainer from "../formContentContainer/FormContentContainer";

const Password = ({ history }) => {
  const [loading, setLoading] = useState(false);
  const goToSignIn = () => {
    history.push("/signin/email");
  };
  const register = () => {
    console.log("regsiter an account");
    setLoading(true);
    // history.goBack();
  };
  // const changePassHan = (event) => {
  //   console.log(event.target.value);
  // };
  return (
    <FormContentContainer
      heading="Sign up"
      inputFieldLabels={[
        { labelText: "Name" },
        { labelText: "Password", inputFieldType: "password" },
      ]}
      inputFieldType="password"
      leftBtnLabel="Create account"
      leftBtnClickHandler={goToSignIn}
      rightBtnLabel="Next"
      rightBtnClickHandler={register}
      loading={loading}
    />
  );
};

export default withRouter(Password);
