import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  touchableOpacity: {
    width: 48,
    height: 48,
    borderWidth: 1,
    borderRadius: 48,
    borderColor: "#EAEAEA",
    alignItems: "center",
    justifyContent: "center",
  },
});

function IconButton({ onPress, children }) {
  return (
    <TouchableOpacity style={styles.touchableOpacity} onPress={onPress}>
      {children}
    </TouchableOpacity>
  );
}

export default IconButton;
