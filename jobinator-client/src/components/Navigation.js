import React, { useContext } from "react";
import { Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
const Stack = createNativeStackNavigator();
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import useJobs from "../hooks/useJobs";
import { ContextAuth } from "../context/storeAuth";
import { ContextJob } from "../context/storeJob";

import Login from "./Login";
import Register from "../components/Register";
import JobList from "./JobList";
import NewJob from "./NewJob";
import JobItem from "./JobItem";
import Job from "./Job";
export default function Navigation() {
  const { stateAuth, dispatchAuth } = useContext(ContextAuth);

  const { state, dispatch } = useJobs(stateAuth);

  return (
    <ContextJob.Provider value={{ stateJob: state, dispatchJob: dispatch }}>
      <NavigationContainer>
        <Stack.Navigator>
          {stateAuth.token ? (
            <>
              <Stack.Screen
                name="JobList"
                component={JobList}
                options={({ route, navigation }) => ({
                  headerRight: () => (
                    <Button
                      onPress={() => {
                        dispatchAuth({ type: "SET_LOGOUT" });
                      }}
                      title="Logout"
                      color="#000"
                    />
                  ),
                })}
              ></Stack.Screen>
              <Stack.Screen
                name="NewJob"
                component={NewJob}
                options={({ route, navigation }) => ({
                  headerRight: () => (
                    <Button
                      onPress={() => {
                        dispatchAuth({ type: "SET_LOGOUT" });
                      }}
                      title="Logout"
                      color="#000"
                    />
                  ),
                })}
              ></Stack.Screen>
              <Stack.Screen
                name="JobItem"
                component={JobItem}
                options={({ route, navigation }) => ({
                  headerRight: () => (
                    <Button
                      onPress={() => {
                        dispatchAuth({ type: "SET_LOGOUT" });
                      }}
                      title="Logout"
                      color="#000"
                    />
                  ),
                })}
              ></Stack.Screen>
              <Stack.Screen
                name="Job"
                component={Job}
                options={({ route, navigation }) => ({
                  headerRight: () => (
                    <Button
                      onPress={() => {
                        dispatchAuth({ type: "SET_LOGOUT" });
                      }}
                      title="Logout"
                      color="#000"
                    />
                  ),
                })}
              ></Stack.Screen>
            </>
          ) : (
            <>
              <Stack.Screen name="Login" component={Login} />
              <Stack.Screen name="Register" component={Register} />
            </>
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </ContextJob.Provider>
  );
}
