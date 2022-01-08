import React from "react";
import {
  FlatList,
  StyleSheet,
  View,
  TextInput,
  Button,
  
} from "react-native";
import Todo from "./components/Todo";

export default class App extends React.Component {
  state = {
    todoList: [],
    value:"",
  };
  onChangeTextHandler = (text) => {
    this.setState({ value: text });
  };

  addTodoHandler = () => {
    if (this.state.value.trim() === "") {
      alert("Scrivi Qualcosa");
      return;
    }
    this.setState((prevState) => {
      return {
        todoList: prevState.todoList.concat({
          value: this.state.value,
          id: Math.random().toString(),
        }),
      };
    });
    this.setState({ value: "" });
  };

  deleteTodoHandler = (id) => {
    this.setState({
      todoList: this.state.todoList.filter((todo) => todo.id !== id),
    });
  };

  render() {
    return (
      <View>
        <View style={styles.InputContainer}>
        {/*input */}
        <TextInput
          value={this.state.value}
          onChangeText={this.onChangeTextHandler}
          placeholder="Scrivi todo"
          style={styles.input}
        />
        <Button
          title="Invia"
          onPress={this.addTodoHandler}
        />        
      </View>
      {/*Outoput */}
        <FlatList
          keyExtractor={(item) => item.id}
          data={this.state.todoList}
          renderItem={(item) => (
            <Todo
              title={item.item.value}
              deleteTodo={() => this.deleteTodoHandler(item.item.id)}
            />
          )}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  InputContainer: {
    padding: 50,
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  input: {
    width: "80%",
    height: "100%",
    borderWidth: 1,
    borderRadius: 5,
    paddingVertical: 10,
    paddingLeft: 3,
    fontSize: 15,
  },
});
