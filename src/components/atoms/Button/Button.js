import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  root: {
    backgroundColor: "#FFDFD6",
    height: 56,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    borderRadius: 16,
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  text: {
    fontWeight: "bold",
    fontSize: 16,
    textAlign: "center",
  },
  box: {
    width: 20,
  },
});

function Button({ onPress, title, rightIcon = null, leftIcon = null }) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.root}>
      <View style={styles.box}>{leftIcon}</View>
      <View>
        <Text style={styles.text}>{title}</Text>
      </View>
      <View styles={styles.box}>{rightIcon}</View>
    </TouchableOpacity>
  );
}

export default Button;
