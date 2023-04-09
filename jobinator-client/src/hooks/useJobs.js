import { useState, useEffect, useReducer, useContext } from "react";
import { reducerJob } from "../reducer/job";
import { getAllJobs } from "../services/Job";
import { ContextAuth } from "../context/storeAuth";

export default function useJobs(StateAuth) {
  const initialState = { job: [] };
  const [state, dispatch] = useReducer(reducerJob, initialState); // context Contact

  const { stateAuth } = useContext(ContextAuth); // context Auth
  useEffect(() => {
    if (StateAuth.token) {
      getAllJobs(stateAuth)
        .then((response) => response.json())
        .then((data) => {
          console.log("data", data);
          dispatch({ type: "SET_JOB", payload: data });
        });
    }
  }, [stateAuth]);

  return { state, dispatch };
}
