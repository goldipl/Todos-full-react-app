import { View, Text, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#161616",
    paddingBottom: 8,
  },
  subtitle: {
    fontSize: 18,
    color: "#6D6D78",
  },
  root: {
    paddingHorizontal: 16,
    paddingTop: 48,
  },
});

function Header() {
  return (
    <View style={styles.root}>
      <Text style={styles.title}>Hello,</Text>
      <Text style={styles.subtitle}>John Smith 👋</Text>
    </View>
  );
}

export default Header;
