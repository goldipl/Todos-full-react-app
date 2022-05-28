import { StyleSheet } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import RegisterScreen from "../screens/RegisterScreen";
import LoginScreen from "../screens/LoginScreen";
import Onboarding from "../screens/Onboarding";

import ROUTES from "../constants/routes";

import HomeNavigator from "./HomeNavigator";

const styles = StyleSheet.create({
  contentStyle: {
    backgroundColor: "#fff",
  },
});

const Stack = createNativeStackNavigator();

function MainNavigator() {
  return (
    <Stack.Navigator
      initialRouteName={ROUTES.MAIN.ONBOARDING}
      screenOptions={{
        headerShown: false,
        contentStyle: styles.contentStyle,
      }}
    >
      <Stack.Screen name={ROUTES.MAIN.ONBOARDING} component={Onboarding} />
      <Stack.Screen name={ROUTES.MAIN.REGISTER} component={RegisterScreen} />
      <Stack.Screen name={ROUTES.MAIN.LOGIN} component={LoginScreen} />
      <Stack.Screen name={ROUTES.HOME.INDEX} component={HomeNavigator} />
    </Stack.Navigator>
  );
}

export default MainNavigator;
