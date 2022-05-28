import React from "react";
import { View, Text, Button } from "react-native";
import ROUTES from "../../constants/routes";

function RegisterScreen({ navigation }) {
  return (
    <View
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
      }}
    >
      <Text>RegisterScreen</Text>
      <Button
        title={"Onboarding"}
        onPress={() => navigation.navigate(ROUTES.MAIN.ONBOARDING)}
      />
      <Button
        title={"Create account"}
        onPress={() => navigation.navigate(ROUTES.MAIN.LOGIN)}
      />
    </View>
  );
}

export default RegisterScreen;
