import React, { Component } from 'react';
import MapView from 'react-native-maps';
import { StyleSheet } from 'react-native';

export class VistaMapa extends Component {
    render() {

        const guzman = {
            latitude: 19.7046600,
            longitude: -103.4617000,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
        }

        return (
            <MapView
                style={styles.map}
                initialRegion={guzman}
            >
                <MapView.Marker
                    coordinate={guzman}
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
