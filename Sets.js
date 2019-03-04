import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation'

import Login from './login/Login'
import Home from './App'

const app = StackNavigator({
  LoginPage: { screen: Login },
  HomePage: { screen: Home },
})

const { navigate } = this.props.navigation;
export default class Sets extends Component {
  render() {
    return (
      <Button
        title="Go to Jane's profile"
        onPress={() =>
          navigate('HomePage')
        }>
      </Button>
    );
  }
}

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
