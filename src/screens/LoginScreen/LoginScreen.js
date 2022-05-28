import React from "react";
import { View, Text, Button } from "react-native";

import { useLogin } from "../../hooks/useLogin";
import ROUTES from "../../constants/routes";

function LoginScreen({ navigation }) {
  const login = useLogin();

  function onSubmit() {
    login.mutate({
      email: "alk@alk.xx",
      password: "12345678",
    });
  }

  return (
    <View
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
      }}
    >
      <Text>LoginScreen</Text>
      <Button title={"go back"} onPress={() => navigation.goBack()} />
      <Button title={"Dashboard"} onPress={onSubmit} />
    </View>
  );
}

export default LoginScreen;
