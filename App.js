import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';

export default class App extends React.Component {
  state = {
    name: ''
  }
  OpenAlert = () => {
    alert(`this is you typed: ${this.state.name}`)
  }
  textChanged = text => {
    this.setState({
      name: text
    })
  }
  render() {
    const {name} = this.state
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Wow, Welcome to Native Development.</Text>
        <TextInput placeholder="enter your name" value={name} onChangeText={this.textChanged} />
        <TouchableOpacity onPress={this.OpenAlert}>
          <Text>Tap me</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold'
  }
});
