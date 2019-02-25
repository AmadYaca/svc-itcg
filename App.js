import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Sets } from './Sets'

import { createBottomTabNavigator } from 'react-navigation'
import Icon from 'react-native-vector-icons/AntDesign'
import IconFeather from 'react-native-vector-icons/Feather'
//const myIcon = (<Icon name="caretup" size={40} color="#900"/>)


export class Home extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Bonjorno, Benbenuti! :D ¿A dónde vas? Selecciona tu ruta</Text>

      </View>
    );
  }
}

export class Accout extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Describe yoour persona crea tu reputacion</Text>

      </View>
    );
  }
}

export default createBottomTabNavigator({
  Destiny: {
    screen: Home,
    navigationOptions: {
      tabBarLabel: 'Destiny',
      tabBarIcon: ({ tintColor }) => (
        <IconFeather name="map-pin" size={25} color={tintColor} />
      )
    }
  },
  Channels: {
    screen: Sets,
    navigationOptions: {
      tabBarLabel: 'Channels',
      tabBarIcon: ({ tintColor }) => (
        <Icon name="bars" size={35} color={tintColor}/>//"#666" />
      )
    }
  },
  Account: {
    screen: Accout,
    navigationOptions: {
      tabBarLabel: 'Account',
      tabBarIcon: ({ tintColor }) => (
        <Icon name="user" size={25} color={tintColor} />
      )
    }
  },
}, { //router config
  //initialRouteName: 'Account', //que pestaña se visualiza primero
  //order: ['Channels', 'Account', 'Destiny'], //orden en el que se visualiza en el tab
  //navigation for complete tab navigation
  navigationOptions: {
    tabBarVisible: true,
  },
  tabBarOptions: {
    activeTintColor: 'red',
    inactiveTintColor: 'blue'
  }
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
