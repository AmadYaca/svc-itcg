import React, { Component } from 'react';
import MapView, {  Marker } from 'react-native-maps';
import { StyleSheet } from 'react-native';

export class VistaMapa extends Component {

    constructor(props){
        super(props)
        this.state = {
            //coordenadas de guzman, el punto inicial
            latitude: 19.7046600,
            longitude: -103.4617000,
            error: null
        }
    }


    componentDidMount(){
        navigator.geolocation.getCurrentPosition(position => {
            this.setState({
                latitude: position.coords.latitude,
                longitude: position.coords.longitude,
                error: null,
            })
        }, error => this.setState({error: error.message}),
            { enableHighAccuracy: true, timeout: 20000, maximumAge: 2000 }
        )
    }


    render() {

        const guzman = {
            //latitude: 19.7046600,
            //longitude: -103.4617000,
            latitude: this.state.latitude,
            longitude: this.state.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
        }

        return (
            <MapView
                style={styles.map}
                initialRegion={guzman}
            >
                <Marker
                    coordinate={{
                        latitude: this.state.latitude,
                        longitude: this.state.longitude,
                        latitudeDelta: 0.015,//0.0922,
                        longitudeDelta: 0.0121,//0.0421,
                    }}
                    pinColor="blue"
                />
            </MapView>
        );
    }
}

const styles = StyleSheet.create({
    map: {
        //flex:1,
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    },
});
