import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { Button, TextInput } from "../../components/atoms";
import { useTodoMutation } from "../../hooks/useTodoMutation";

import { initialValues, validationSchema } from "./validationSchema";

const styles = StyleSheet.create({
  root: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    backgroundColor: "#fff",
    width: "100%",
    paddingHorizontal: 18,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
  },
});

function AddTodoScreen() {
  const todo = useTodoMutation();

  const { control, handleSubmit } = useForm({
    initialValues,
    resolver: yupResolver(validationSchema),
  });

  function onSubmit(data) {
    todo.mutate(data);
  }

  return (
    <View style={styles.root}>
      <Text style={styles.title}>Add todo</Text>
      <Controller
        name="title"
        control={control}
        render={({ field, fieldState }) => (
          <TextInput
            label="Title"
            value={field.value}
            onBlur={field.onBlur}
            onChange={field.onChange}
            error={fieldState.error}
          />
        )}
      />
      <Controller
        name="description"
        control={control}
        render={({ field, fieldState }) => (
          <TextInput
            label="Description"
            value={field.value}
            onBlur={field.onBlur}
            onChange={field.onChange}
            error={fieldState.error}
          />
        )}
      />
      <Button title="Add" onPress={handleSubmit(onSubmit)} />
    </View>
  );
}

export default AddTodoScreen;
