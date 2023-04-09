import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

export default function JobItem({ navigation, job }) {
  const { id, name } = job;

  return (
    <TouchableOpacity
      style={styles.ContactItem}
      onPress={() =>
        navigation.navigate("Job", {
          id: id,
        })
      }
    >
      <Text>
        {id} : {name}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    padding: 10,
    fontSize: 20,
    borderWidth: 1,
  },
  ContactItem: {
    margin: 5,
    padding: 15,
    fontSize: 20,
    borderWidth: 1.5,
    borderRadius: 5,
    justifyContent: "space-between",
  },
});
