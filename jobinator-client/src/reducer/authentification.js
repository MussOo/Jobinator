import { actions } from "../actions/AuthentificationAction";

export function reducerAuthentification(state, action) {
  switch (action.type) {
    case actions.SET_TOKEN:
      return {
        ...state,
        token: action.payload,
      };
    case actions.SET_USER:
      return {
        ...state,
        user: action.payload,
      };
    case actions.SET_LOGOUT:
      return {
        ...state,
        token: null,
        user: null,
      };
    default:
      throw new Error();
  }
}
