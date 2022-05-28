import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import DashboardScreen from "../screens/DashboardScreen";
import ProfileScreen from "../screens/ProfileScreen";
import AddTodoScreen from "../screens/AddTodoScreen";

import ROUTES from "../constants/routes";

const Tab = createBottomTabNavigator();

function HomeNavigator() {
  return (
    <Tab.Navigator initialRouteName={ROUTES.HOME.DASHBOARD}>
      <Tab.Screen name={ROUTES.HOME.DASHBOARD} component={DashboardScreen} />
      <Tab.Screen name={ROUTES.HOME.ADD_TODO} component={AddTodoScreen} />
      <Tab.Screen name={ROUTES.HOME.PROFILE} component={ProfileScreen} />
    </Tab.Navigator>
  );
}

export default HomeNavigator;
