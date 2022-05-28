import { useState } from "react";
import { View, Text, TextInput as RNTextInput, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  root: {
    paddingVertical: 16,
  },
  rootError: {
    paddingBottom: 0,
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
  inputError: {
    borderColor: "red",
  },
  inputHighlight: {
    borderColor: "#52C3FF",
  },
  label: {
    fontSize: 12,
    color: "#6D6D78",
    paddingBottom: 10,
  },
  errorLabel: {
    color: "red",
  },
  errorMessage: {
    color: "red",
    fontSize: 12,
    paddingLeft: 16,
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

  console.log(error);

  return (
    <View style={[styles.root, error ? styles.rootError : {}]}>
      <Text style={[styles.label, error ? styles.errorLabel : {}]}>
        {label}
      </Text>
      <RNTextInput
        style={[
          styles.input,
          error ? styles.inputError : {},
          highlight ? styles.inputHighlight : {},
        ]}
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
      {error ? <Text style={styles.errorMessage}>{error?.message}</Text> : null}
    </View>
  );
}

export default TextInput;
