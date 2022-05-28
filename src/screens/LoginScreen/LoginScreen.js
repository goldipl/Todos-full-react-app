import React from "react";
import { View, Text, Button } from "react-native";
import ROUTES from "../../constants/routes";

function LoginScreen({ navigation }) {
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
      <Button
        title={"Dashboard"}
        onPress={() => navigation.navigate(ROUTES.MAIN.DASHBOARD)}
      />
    </View>
  );
}

export default LoginScreen;
