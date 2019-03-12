import React, { Component } from 'react'
import {
    Image,
    StyleSheet,
    Text,
    View,
} from 'react-native'

import logo from '../../logos/itcgcolor.png'
import { LoginForm } from '../../componentes/login/LoginForm'

import firebase from 'react-native-firebase'

export class Login extends Component {

    componentWillMount() {
        var config = {
            apiKey: "AIzaSyAlqYz6b5XJbuoolVQ8wFmO5_gE99_-YvE",
            authDomain: "mapas1000-1551411411725.firebaseapp.com",
            databaseURL: "https://mapas1000-1551411411725.firebaseio.com",
            projectId: "mapas1000-1551411411725",
            storageBucket: "",
            messagingSenderId: "667050859900"
        };
        //firebase.initializeApp(config);
        firebase.app()
        /*firebase.database().ref('users/001').set(
            {
                nombre: 'Amilcar Yanez',
                age: 27,
            }
        ).then(()=>{
            alert("inserted ")
        }).catch((error)=>{
            alert(error)
        })*/
    }

    render() {
        return (
            <View style={styles.logoContainer}>
                <Image
                    source={logo} style={styles.logo}>
                </Image>
                <Text style={styles.textLogo}>
                    Sistema de Viaje Compartido del ITCG
                </Text>
                <LoginForm></LoginForm>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    logo: {
        width: 120,
        height: 80,
        opacity: 0.8,
    },
    logoContainer: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'white',//'#FFEB3B',//'#64DD17',
        alignItems: 'center',
        justifyContent: 'center',
    },
    textLogo: {
        alignItems: 'center',
        color: 'black',
        fontWeight: '500',
        fontSize: 20,
        opacity: 0.5,
        marginTop: 5,
        textAlign: 'center',
        width: 250,
        marginBottom: 15,
    },
})  