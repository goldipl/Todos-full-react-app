import React from "react";
import { View, Text, Button } from "react-native";

import ROUTES from "../../constants/routes";

function OnboardingScreen({ navigation }) {
  return (
    <View
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
      }}
    >
      <Text>OnboardingScreen</Text>
      <Button
        title={"Skip"}
        onPress={() => navigation.navigate(ROUTES.MAIN.LOGIN)}
      />
      <Button
        title={"Start for free"}
        onPress={() => navigation.navigate(ROUTES.MAIN.REGISTER)}
      />
    </View>
  );
}

export default OnboardingScreen;
