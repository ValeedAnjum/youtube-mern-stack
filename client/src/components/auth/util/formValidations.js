export const ValidateEmail = (email) => {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
    return true;
  }
  return false;
};

export const ValidateName = (name) => {
  if (/^[a-zA-Z0-9_ ]{5,20}$/.test(name)) {
    return true;
  }
  return false;
};
