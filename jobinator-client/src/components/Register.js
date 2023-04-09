import React from "react";
import { StyleSheet, View, TextInput, Button } from "react-native";
import { useForm, Controller } from "react-hook-form";
import { register } from "../services/authentification";
export default function Register({ navigation }) {
  const {
    control,
    getValues,
    formState: { errors },
  } = useForm({
    defaultValues: {
      login: "",
      password: "",
      name: "",
      status: "",
    },
  });
  const onSubmit = (data) => {
    const { login, password, name, status } = data;
    register({ login, password, name, status })
      .then((response) => response.json())
      .then((data) => {
        if (data.createdAt) {
          navigation.navigate("Login");
        }
        if (data.error) {
          alert(data.message);
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <View>
      <View>
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
              placeholder="Login"
              value={value}
            />
          )}
          name="login"
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
              placeholder="Status"
              value={value}
            />
          )}
          name="status"
        />
        <Controller
          control={control}
          rules={{
            maxLength: 100,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={styles.input}
              onBlur={onBlur}
              onChangeText={onChange}
              placeholder="Password"
              value={value}
            />
          )}
          name="password"
        />

        <Button
          title="Creer un compte"
          style={styles.btnSubmit}
          onPress={() => {
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
});
