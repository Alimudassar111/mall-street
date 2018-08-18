import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native'
import {Actions} from 'react-native-router-flux'

const Home = () => <View>
<Text>Home</Text>
<TouchableOpacity onPress={() => Actions.push('todo')}>
  <Text>Go to Todo</Text>
  </TouchableOpacity>
</View>

export default Home;