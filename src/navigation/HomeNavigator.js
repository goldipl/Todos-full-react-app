import { StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import DashboardScreen from "../screens/DashboardScreen";
import ProfileScreen from "../screens/ProfileScreen";
import AddTodoScreen from "../screens/AddTodoScreen";

import HomeIcon from "../../assets/icons/Home";
import AddTodoIcon from "../../assets/icons/AddTodo";
import ProfileIcon from "../../assets/icons/Profile";

import ROUTES from "../constants/routes";

const styles = StyleSheet.create({
  bar: {
    height: 70,
  },
  contentStyle: {
    backgroundColor: "#fff",
  },
});

const Tab = createBottomTabNavigator();

function HomeNavigator() {
  return (
    <Tab.Navigator
      initialRouteName={ROUTES.HOME.DASHBOARD}
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: "#161616",
        tabBarInactiveTintColor: "#D5D4D4",
        tabBarStyle: styles.bar,
        // TODO set white background for tab item
        tabBarItemStyle: styles.contentStyle,
      }}
    >
      <Tab.Screen
        name={ROUTES.HOME.DASHBOARD}
        component={DashboardScreen}
        options={{
          tabBarIcon: (props) => <HomeIcon {...props} />,
        }}
      />
      <Tab.Screen
        name={ROUTES.HOME.ADD_TODO}
        component={AddTodoScreen}
        options={{
          tabBarIcon: (props) => <AddTodoIcon {...props} />,
        }}
      />
      <Tab.Screen
        name={ROUTES.HOME.PROFILE}
        component={ProfileScreen}
        options={{
          tabBarIcon: (props) => <ProfileIcon {...props} />,
        }}
      />
    </Tab.Navigator>
  );
}

export default HomeNavigator;
