import React, { useContext } from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import { useForm, Controller } from "react-hook-form";
import { ContextAuth } from "../context/storeAuth";
import { Auth, Getme } from "../services/authentification";
export default function Login({ navigation }) {
  const { dispatchAuth } = useContext(ContextAuth);
  const {
    control,
    getValues,
    formState: { errors },
  } = useForm({
    defaultValues: {
      login: "",
      password: "",
    },
  });
  const onSubmit = (data) => {
    const { login, password } = data;

    Auth({ login, password })
      .then((response) => response.json())
      .then((data) => {
        if (data.jwt) {
          Getme(data)
            .then((response) => response.json())
            .then((datame) => {
              dispatchAuth({ type: "SET_USER", payload: datame });
              dispatchAuth({ type: "SET_TOKEN", payload: data.jwt });
            });
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
        {errors.firstName && <Text>This is required.</Text>}

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
          title="Se Connecter"
          style={styles.btnSubmit}
          onPress={() => {
            onSubmit(getValues());
          }}
        />
        <Button
          title="S'inscrire"
          style={styles.btnSubmit}
          onPress={() => {
            navigation.navigate("Register");
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
