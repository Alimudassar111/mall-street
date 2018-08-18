import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';



export default class Todo extends React.Component {
  state = {
    Todos: [],
    newTodo: ''
  }
  SaveTodo = () => {
    const {newTodo, Todos} = this.state
    this.setState({
      Todos: [newTodo, ...Todos],
      newTodo: ''
    })
  }
  textChanged = text => {
    this.setState({
      newTodo: text
    })
  }
  render() {
    const {newTodo, Todos} = this.state
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Wow, Welcome to Native Development.</Text>
        <View style={styles.Form}>
        <TextInput style={styles.TextInput} placeholder="enter your name" value={newTodo} onChangeText={this.textChanged} />
        <TouchableOpacity onPress={this.SaveTodo}>
          <Text style={styles.button}>Create</Text>
        </TouchableOpacity>
        </View>
        <View style={styles.todos}>
        {Todos.map(todo => <Text style={styles.todo}>{todo}</Text>)}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 30,
    paddingLeft: 10
  },
  Form: {
    flexDirection: 'row'
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  TextInput: {
    height: 40,
    width: 130
  },
  button:{
  paddingTop: 6,
  borderRadius: 4,
  borderWidth: 1,
  borderColor: 'black',
  justifyContent: 'center',
  },
  todos:{
    paddingTop: 30,
  },
  todo:{
    borderColor: 'black',
    borderBottomWidth: 1,
    paddingBottom: 5
  }
});
