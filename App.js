import React, { Component } from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { Sets } from './Sets'

import { createBottomTabNavigator } from 'react-navigation'
import Icon from 'react-native-vector-icons/AntDesign'
import IconFeather from 'react-native-vector-icons/Feather'
//const myIcon = (<Icon name="caretup" size={40} color="#900"/>)

import MapView from 'react-native-maps';


export class Home extends Component {
  render() {
    return (
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />
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
        <Icon name="bars" size={35} color={tintColor} />//"#666" />
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
}, {
    //router config
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
  map: {
    //flex:1,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  contMap: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'flex-end',
    alignItems: 'center',
  }
});
