import React, { useReducer } from "react";
import { StyleSheet } from "react-native";
import { ContextAuth } from "./src/context/storeAuth";
import { reducerAuthentification } from "./src/reducer/authentification";
import Navigation from "./src/components/Navigation";

export default function App() {
  const InitialState = {
    token: null,
    user: null,
  };
  const [state, dispatch] = useReducer(reducerAuthentification, InitialState);

  return (
    <ContextAuth.Provider value={{ stateAuth: state, dispatchAuth: dispatch }}>
      <Navigation />
    </ContextAuth.Provider>
  );
}
