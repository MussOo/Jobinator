import React, { useEffect, useContext, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { ContextAuth } from "../context/storeAuth";
import { getJobById } from "../services/Job";

export default function Job({ navigation, route }) {
  const { id } = route.params;
  const { stateAuth, dispatchAuth } = useContext(ContextAuth);
  const [ContactUser, SetContactUser] = useState("");
  useEffect(() => {
    getJobById(stateAuth, id)
      .then((response) => response.json())
      .then((data) => {
        console.log("item", data);
        const d = (
          <>
            <View style={styles.container_Job}>
              <Text style={styles.title}>{data.name}</Text>

              <Text style={styles.text}>
                {data.firstName} {data.lastName}
              </Text>
              <Text style={styles.text}>Date Creation : {data.createdAt}</Text>
              <Text style={styles.text}>
                Date Mise a jour : {data.updatedAt}
              </Text>
              <Text style={styles.text}>Description :{data.description}</Text>
              <Text style={styles.text}>{data.phone}</Text>
            </View>
          </>
        );
        SetContactUser(d);
      });
  }, []);
  return <View style={styles.container}>{ContactUser}</View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  container_Job: {
    margin: 5,
    padding: 15,
    fontSize: 20,
    borderWidth: 1.5,
    borderRadius: 5,
    alignContent: "flex-start",
    width: "80%",
    height: "80%",
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  text: {
    fontSize: 20,
    textAlign: "center",
    marginBottom: 20,
  },
});
