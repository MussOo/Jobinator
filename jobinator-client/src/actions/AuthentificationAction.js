export const actions = {
  SET_TOKEN: "SET_TOKEN",
  SET_USER: "SET_USER",
  SET_LOGOUT: "SET_LOGOUT",
};

export function setToken(token) {
  return {
    type: actions.SET_TOKEN,
    payload: token,
  };
}

export function setUser(user) {
  return {
    type: actions.SET_USER,
    payload: user,
  };
}

export function setLogout() {
  return {
    type: actions.SET_LOGOUT,
  };
}
