import React, {Component} from 'react';
import { StyleSheet, Text, View} from 'react-native';
import { Sets } from './Sets'

import { createBottomTabNavigator } from 'react-navigation'

export class Home extends Component{
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Bonjorno, Benbenuti! :D</Text>
      </View>
    );
  }
} 

export default createBottomTabNavigator({
  Home: {screen: Home},
  Settings: {screen: Sets},
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});
