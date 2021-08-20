const initialState = {
  authenticated: false,
  emailIsReg: false,
  emailIsRegChecking: false,
  emailAddress: null,
  userProfile: {
    name: null,
  },
};

export const authReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "IS_EMAIL_REGISTERED_START":
      return { ...state, emailIsReg: false, emailAddress: null };
    case "IS_EMAIL_REGISTERED_SUCCESS":
      return {
        ...state,
        emailIsReg: true,
        emailAddress: payload,
      };
    case "LOGIN_SUCCESS":
    case "REGISTRATION_SUCCESS":
    case "PASSWORD_RESET_SUCCESS":
      localStorage.setItem("token", payload);
      return { ...state };
    // profile data
    case "SET_PROFILE":
      return { ...state, authenticated: true, userProfile: payload };
    case "CLEAR_PROFILE":
      localStorage.removeItem("token");
      return { ...state, authenticated: false, userProfile: null };
    default:
      return state;
  }
};
