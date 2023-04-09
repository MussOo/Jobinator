import { actions } from "../actions/JobAction";

export function reducerJob(state, action) {
  switch (action.type) {
    case actions.SET_JOB:
      return {
        ...state,
        job: action.payload,
      };

    default:
      throw new Error();
  }
}
