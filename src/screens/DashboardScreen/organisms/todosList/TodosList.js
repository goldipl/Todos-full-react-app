import { View, Text, StyleSheet, FlatList } from "react-native";

import TodoItem from "../../molecules/todoItem";

const styles = StyleSheet.create({
  title: {
    fontSize: 22,
    fontWeight: "bold",
    paddingHorizontal: 16,
  },
  root: {
    paddingTop: 20,
  },
  flatList: {
    paddingHorizontal: 18,
  },
});

function TodosList({ isLoading, data = [] }) {
  return (
    <View style={styles.root}>
      <Text style={styles.title}>Todos</Text>
      {isLoading ? <Text>Loading...</Text> : null}
      <FlatList
        style={styles.flatList}
        data={data}
        keyExtractor={(item) => item._id}
        renderItem={TodoItem}
      />
    </View>
  );
}

export default TodosList;
