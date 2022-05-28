import { useState } from "react";
import { View, Text, TextInput as RNTextInput, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  root: {
    paddingVertical: 12,
  },
  input: {
    height: 56,
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "#EAEAEA",
    paddingVertical: 16,
    paddingHorizontal: 16,
    borderRadius: 16,
    color: "#6D6D78",
    fontSize: 15,
  },
  inputHighlight: {
    borderColor: "#52C3FF",
  },
  label: {
    fontSize: 12,
    color: "#6D6D78",
    paddingBottom: 10,
  },
});

function TextInput({
  label,
  value,
  onChange,
  onBlur,
  secureTextEntry = false,
  error,
  placeholder,
  onFocus,
}) {
  const [highlight, setHighlight] = useState(false);

  return (
    <View style={styles.root}>
      <Text style={styles.label}>{label}</Text>
      <RNTextInput
        style={[styles.input, highlight ? styles.inputHighlight : {}]}
        value={value}
        onFocus={(e) => {
          setHighlight(true);
          onFocus && onFocus(e);
        }}
        onChangeText={onChange}
        secureTextEntry={secureTextEntry}
        placeholder={placeholder}
        onBlur={(e) => {
          setHighlight(false);
          onBlur && onBlur();
        }}
      />
    </View>
  );
}

export default TextInput;
