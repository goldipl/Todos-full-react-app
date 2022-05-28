import { createNativeStackNavigator } from "@react-navigation/native-stack";

import DashboardScreen from "../screens/DashboardScreen";
import RegisterScreen from "../screens/RegisterScreen";
import LoginScreen from "../screens/LoginScreen";
import Onboarding from "../screens/Onboarding";

import ROUTES from "../constants/routes";

const Stack = createNativeStackNavigator();

function MainNavigator() {
  return (
    <Stack.Navigator initialRouteName={ROUTES.MAIN.ONBOARDING}>
      <Stack.Screen name={ROUTES.MAIN.ONBOARDING} component={Onboarding} />
      <Stack.Screen name={ROUTES.MAIN.REGISTER} component={RegisterScreen} />
      <Stack.Screen name={ROUTES.MAIN.LOGIN} component={LoginScreen} />
      <Stack.Screen name={ROUTES.MAIN.DASHBOARD} component={DashboardScreen} />
    </Stack.Navigator>
  );
}

export default MainNavigator;
