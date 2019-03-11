import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { createAppContainer, createBottomTabNavigator } from 'react-navigation'
import Icon from 'react-native-vector-icons/AntDesign'
import IconFeather from 'react-native-vector-icons/Feather'
//const myIcon = (<Icon name="caretup" size={40} color="#900"/>)

//las clases que se mostraran en cada tab
import { Account } from './componentes/tabs/Account'
import { Sets } from './componentes/tabs/Sets'
import { VistaMapa } from './componentes/mapa/VistaMapa'
import { Login } from './componentes/login/Login'

class App extends Component {

}

const TabNavigator = createBottomTabNavigator({
  Destino: {
    screen: VistaMapa,
    navigationOptions: {
      tabBarLabel: 'Destino',
      tabBarIcon: ({ tintColor }) => (
        <IconFeather name="map-pin" size={25} color={tintColor} />
      )
    }
  },
  Canales: {
    screen: Login,
    navigationOptions: {
      tabBarLabel: 'Ofertas',
      tabBarIcon: ({ tintColor }) => (
        <Icon name="bars" size={35} color={tintColor} />//"#666" />
      )
    }
  },
  Cuenta: {
    screen: Account,
    navigationOptions: {
      tabBarLabel: 'Cuenta',
      tabBarIcon: ({ tintColor }) => (
        <Icon name="user" size={25} color={tintColor} />
      )
    }
  },
}, {
    //router config
    //initialRouteName: 'Canales', //que pestaña se visualiza primero
    //order: ['Channels', 'Account', 'Destiny'], //orden en el que se visualiza en el tab

    //navigation for complete tab navigation
    navigationOptions: {
      tabBarVisible: true,
    },
    tabBarOptions: {
      activeTintColor: 'blue',
      inactiveTintColor: 'red'
    }
  });

export default createAppContainer(TabNavigator)

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
