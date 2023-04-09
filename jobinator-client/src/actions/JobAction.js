export const actions = {
  SET_JOB: "SET_JOB",
};

export function setJob(job) {
  return {
    type: actions.SET_JOB,
    payload: job,
  };
}
