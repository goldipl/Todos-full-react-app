import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Button from "../../components/atoms/Button";

import { useLogin } from "../../hooks/useLogin";
import ROUTES from "../../constants/routes";

const styles = StyleSheet.create({
  root: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    paddingHorizontal: 32,
  },
  text: {
    fontSize: 22,
    fontWeight: 600,
    marginBottom: 16,
  },
});

function LoginScreen({ navigation }) {
  const login = useLogin();

  function onSubmit() {
    login.mutate({
      email: "alk@alk.xx",
      password: "12345678",
    });
  }

  return (
    <View style={styles.root} >
      <Text style={styles.text}>Login Screen</Text>
      <Button title={"Dashboard"} onPress={onSubmit} />
      <br></br>
      <Button title={"Go back"} onPress={() => navigation.goBack()} />
    </View>
  );
}

export default LoginScreen;
