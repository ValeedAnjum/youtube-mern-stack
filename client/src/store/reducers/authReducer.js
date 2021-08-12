const initialState = {
  authenticated: false,
  emailIsReg: false,
  emailIsRegChecking: false,
  emailAddress: "",
  userProfile: {
    name: null,
  },
};

export const authReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "IS_EMAIL_REGISTERED_START":
      return { ...state, emailIsRegChecking: true };
    case "IS_EMAIL_REGISTERED_SUCCESS":
      return {
        ...state,
        emailIsRegChecking: false,
        emailIsReg: true,
        emailAddress: payload,
      };
    case "LOGIN_SUCCESS":
      localStorage.setItem("token", payload);
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
