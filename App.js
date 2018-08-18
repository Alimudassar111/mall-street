import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Router, Scene} from 'react-native-router-flux';

import Todo from './Todo'
import Home from './Home'
export default class App extends Component {
  render() {
    return(
      <View style={styles.container}>
        <Router>
          <Scene key="root">
            <Scene key={'home'} title="Home" component={Home} />
            <Scene key={'todo'} title="Todo" path={"todo"} component={Todo} back/>
          </Scene>
        </Router>
      </View>
      )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  }
})

