import React from "react";
import { View, Text } from "react-native";

import { useTodos } from "../../hooks/useTodos";

function DashboardScreen() {
  const { data, isLoading } = useTodos();

  return (
    <View
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
      }}
    >
      <Text>DashboardScreen</Text>
    </View>
  );
}

export default DashboardScreen;
