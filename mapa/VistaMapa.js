import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native'

//google maps
import MapView, { Marker } from 'react-native-maps'
//geolocation-service
import Geolocation from 'react-native-geolocation-service'
import { PermissionsAndroid } from 'react-native';

export class VistaMapa extends Component {
    constructor(props) {
        super(props)
        this.state = {
            //tuxpan
            latitude: 0,
            longitude: 0,
        }
    }

    //cambia los valores de longitude y latitude en state por los obtenidos de la ubicacion del usuario
    //no funciona
    actualizarUbicacion(position) {
        this.setState({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
        })
        alert("actualize la ubicacion actual", { cancelable: false })
    }

    //OBTIENE LA UBICACIÓN EXACTA DEL USUARIO
    componentDidMount() {
        // Instead of navigator.geolocation, just use Geolocation.
        //if (hasLocationPermission) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    this.actualizarUbicacion(position)
                },
                (error) => {
                    // See error code charts below.
                    alert(error.message);
                },
                { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
            );
        //}
    }

    render() {
        const tuxpan_coords = {
            latitude: 19.55498,
            longitude: -103.37763833333332,
            latitudeDelta: 0.003,// .0030,
            longitudeDelta: .0030,
        }

        const guzman_coords = {
            latitude: 19.7046600,
            longitude: -103.4617000,
            latitudeDelta: 0.0030,
            longitudeDelta: 0.0030,
        }

        return (
            <MapView
                style={styles.map}
                initialRegion={tuxpan_coords}
                showsUserLocation
            >
                <Marker
                    coordinate={{
                        latitude: 19.55498,
                        longitude: -103.37763833333332,
                    }}
                >
                    <View style={styles.radius}>
                        <View style={styles.marker} />
                    </View>
                </Marker>
            </MapView>
        )
    }
}

const styles = StyleSheet.create({
    map: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    },
    marker: {
        height: 20,
        width: 20,
        borderWidth: 3,
        borderColor: 'white',
        borderRadius: 10,
        overflow: 'hidden',
        backgroundColor: 'red',
    },
    radius: {
        height: 40,
        width: 40,
        borderRadius: 20,
        overflow: 'hidden',
        backgroundColor: 'rgba(0,122,255, 0.1)',
        borderWidth: 1,
        borderColor: 'rgba(0,122,255, 0.3)',
        alignItems: 'center',
        justifyContent: 'center'
    },
});
