import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";

const Todo = (props) => {
  return (
    <View style={styles.output}>
      <TouchableOpacity activeOpacity={0.2} onPress={props.deleteTodo}>
        <Text style={styles.defaultButton}>X</Text>
      </TouchableOpacity>
      <Text style={styles.todo}>{props.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  output: {
    flexDirection: "row",
    justifyContent: "flex-start",
    backgroundColor: "blue",
    alignItems: "center",
    paddingVertical: 10,
    marginVertical: 5,
  },
  todo: {
    color: "white",
    marginLeft: 30,
    fontSize: 18,
  },
  defaultButton: {
    color: "red",
    marginLeft: 15,
    fontSize: 20,
  },
});

export default Todo;
