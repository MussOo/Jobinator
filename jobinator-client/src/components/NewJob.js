import React, { useContext } from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import { ContextAuth } from "../context/storeAuth";
import { newJob } from "../services/Job";
import { useForm, Controller } from "react-hook-form";

export default function NewJob({ navigation }) {
  const { stateAuth } = useContext(ContextAuth);
  const {
    control,
    getValues,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      description: "",
    },
  });

  const onSubmit = (data) => {
    newJob(data, stateAuth)
      .then((response) => response.json())
      .then((data) => {
        console.log("response", data);

        navigation.navigate("JobList");
      })
      .catch((error) => {
        alert("ERROR", error);
        console.log("error", error);
      });
  };

  return (
    <View style={styles.container}>
      <View style={styles.container_job}>
        <Text style={styles.title}>Nouveau Job</Text>
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={styles.input}
              onBlur={onBlur}
              onChangeText={onChange}
              placeholder="Name"
              value={value}
            />
          )}
          name="name"
        />
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={styles.input}
              onBlur={onBlur}
              onChangeText={onChange}
              placeholder="Description"
              value={value}
            />
          )}
          name="description"
        />
        <Button
          title="Creer"
          style={styles.btnSubmit}
          onPress={() => {
            console.log("Nouveaux contact");
            onSubmit(getValues());
          }}
        />
      </View>
    </View>
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
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  container_job: {
    margin: 5,
    padding: 15,
    fontSize: 20,
    borderWidth: 1.5,
    borderRadius: 5,
    alignContent: "flex-start",
    width: "100%",
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
  button: {
    backgroundColor: "#000",
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
  },
});
