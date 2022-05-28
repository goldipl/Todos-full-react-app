import React from "react";
import { View, Text, StyleSheet } from "react-native";

import TextButton from "../../components/atoms/textButton";
import Button from "../../components/atoms/Button";
import ROUTES from "../../constants/routes";
import Illustration from "../../../assets/Illustration2";
import ChevronRight from "../../../assets/icons/ChevronRight";

const styles = StyleSheet.create({
  root: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    height: "100%",
    paddingHorizontal: 32,
  },
  headerContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    width: "100%",
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

function OnboardingScreen({ navigation }) {
  return (
    <View style={styles.root}>
      <View style={styles.headerContainer}>
        <TextButton
          title="Skip"
          onPress={() => navigation.navigate(ROUTES.MAIN.LOGIN)}
        />
      </View>
      <Illustration />
      <View>
        <Text style={styles.title}>Organize your work and life</Text>
        <Text style={styles.subTitle}>
          Become focused, organized, and calm with Alk Todos. The world’s #1
          to-do list app.
        </Text>
      </View>
      <Button
        rightIcon={<ChevronRight />}
        title={"Start for free"}
        onPress={() => navigation.navigate(ROUTES.MAIN.REGISTER)}
      />
    </View>
  );
}

export default OnboardingScreen;
