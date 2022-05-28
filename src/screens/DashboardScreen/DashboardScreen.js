import React from "react";
import { View, StyleSheet } from "react-native";

import { useTodos } from "../../hooks/useTodos";

import Header from "./organisms/header";
import TodosList from "./organisms/todosList";

const styles = StyleSheet.create({
  root: {
    height: "100%",
    backgroundColor: "#fff",
  },
  contentContainer: {},
});

function DashboardScreen() {
  const { data, isLoading } = useTodos();

  return (
    <View style={styles.root}>
      <Header />
      <TodosList data={data} isLoading={isLoading} />
    </View>
  );
}

export default DashboardScreen;
