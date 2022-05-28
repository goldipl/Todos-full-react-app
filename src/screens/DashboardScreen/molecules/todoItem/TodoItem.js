import { View, Text, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  root: {
    borderRadius: 24,
    borderColor: "#EAEAEA",
    borderWidth: 1,
    width: "100%",
    padding: 16,
    marginVertical: 6,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
  },
  description: {
    fontSize: 12,
    color: "#6D6D78",
  },
  date: {
    fontSize: 10,
    color: "#6D6D78",
  },
});

function TodoItem({ item }) {
  return (
    <View style={styles.root}>
      <Text>{item.title}</Text>
      <Text>{item.description}</Text>
      <Text>{item.createdAt}</Text>
    </View>
  );
}

export default TodoItem;
