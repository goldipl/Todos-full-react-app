import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import ROUTES from "../../constants/routes";
import ChevronLeft from "../../../assets/icons/ChevronLeft";
import ChevronRight from "../../../assets/icons/ChevronRight";

import { IconButton, Button, TextInput } from "../../components/atoms";
import { useRegister } from "../../hooks/useRegister";

import { initialValues, validationSchema } from "./validationSchema";

const styles = StyleSheet.create({
  root: {
    height: "100%",
  },
  contentContainer: {
    paddingTop: 64,
    paddingHorizontal: 32,
  },
  headerContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    width: "100%",
  },
  titleContainer: {
    paddingTop: 32,
  },
  title: {
    textAlign: "center",
    paddingBottom: 12,
    fontWeight: "bold",
    fontSize: 20,
    color: "#172239",
  },
  subTitle: {
    textAlign: "center",
    fontSize: 14,
    color: "#6D6D78",
  },
});

function RegisterScreen({ navigation }) {
  const register = useRegister();
  const { control, handleSubmit } = useForm({
    initialValues,
    resolver: yupResolver(validationSchema),
  });

  async function onSubmit(data) {
    await register.mutateAsync(data).then(() => {
      navigation.navigate(ROUTES.MAIN.LOGIN);
    });
  }

  return (
    <View style={styles.root}>
      <ScrollView style={styles.contentContainer}>
        <View style={styles.headerContainer}>
          <IconButton onPress={navigation.goBack}>
            <ChevronLeft />
          </IconButton>
        </View>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Sign Up Now</Text>
          <Text style={styles.subTitle}>
            Please provide us with this information in order to create an
            account.
          </Text>
        </View>
        <View>
          <Controller
            name="email"
            control={control}
            render={({ field, fieldState }) => (
              <TextInput
                placeholder={"johndoe@gmail.com"}
                label="Email"
                value={field.value}
                onBlur={field.onBlur}
                onChange={field.onChange}
                error={fieldState.error}
              />
            )}
          />
          <Controller
            name="username"
            control={control}
            render={({ field, fieldState }) => (
              <TextInput
                placeholder={"johndoe"}
                label="Username"
                value={field.value}
                onBlur={field.onBlur}
                onChange={field.onChange}
                error={fieldState.error}
              />
            )}
          />
          <Controller
            name="password"
            control={control}
            render={({ field, fieldState }) => (
              <TextInput
                secureTextEntry={true}
                placeholder={"*********"}
                label="Password"
                value={field.value}
                onBlur={field.onBlur}
                onChange={field.onChange}
                error={fieldState.error}
              />
            )}
          />
          <Controller
            name="confirmPassword"
            control={control}
            render={({ field, fieldState }) => (
              <TextInput
                secureTextEntry={true}
                placeholder={"*********"}
                label="Confirm Password"
                value={field.value}
                onBlur={field.onBlur}
                onChange={field.onChange}
                error={fieldState.error}
              />
            )}
          />
        </View>
        <Button
          rightIcon={<ChevronRight />}
          title="Create account"
          onPress={handleSubmit(onSubmit)}
        />
      </ScrollView>
    </View>
  );
}

export default RegisterScreen;
