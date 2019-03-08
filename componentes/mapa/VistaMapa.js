import React, { Component } from 'react';
import { Text, TextInput, View, StyleSheet } from 'react-native'

import MapView, { Marker } from 'react-native-maps'
import MapViewDirections from 'react-native-maps-directions'
import myKey from '../../google_api_key'
import _ from 'lodash'

export class VistaMapa extends Component {
    constructor(props) {
        super(props)
        this.state = {
            latitude: 0,
            longitude: 0,
            destination: "",
            predictions: [],
            error: "",
        }
        this.onChangeDestinationDebounced = _.debounce(
            this.onChangeDestination, 650)
    }

    //OBTIENE LA UBICACIÓN EXACTA DEL USUARIO
    componentDidMount() {
        navigator.geolocation.getCurrentPosition(
            position => {
                this.setState({
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude,
                })
            },
            error => {
                this.setState({ error: error.message })
                alert(error.message);
            },
            { enableHighAccuracy: true, timeout: 20000, maximumAge: 2000 }
        );
    }

    async onChangeDestination(destination) {
        this.setState({ destination })

        const apiUrl = `https://maps.googleapis.com/maps/api/place/autocomplete/json?key=${myKey}
            &input=${destination}
            &location=${this.state.latitude}, ${this.state.longitude}
            &radius=200`
        try {
            const result = await fetch(apiUrl)
            const json = await result.json()
            this.setState({
                predictions: json.predictions
            })
        }catch(err){
            alert(err.message)
        }
            

    }

    render() {

        const predictions = this.state.predictions.map(prediction => 
            <Text style={styles.suggestions} key={prediction.id}>{prediction.description}</Text>
        )

        const ruta = [
            {
                //tuxpan
                latitude: 19.55498,
                longitude: -103.37763833333332,
            },
            {
                //guzman
                latitude: 19.7046600,
                longitude: -103.4617000,
            }
        ]

        return (
            <View style={styles.container}>
                <MapView
                    style={styles.map}
                    region={{
                        latitude: this.state.latitude,
                        longitude: this.state.longitude,
                        latitudeDelta: 0.0030,
                        longitudeDelta: 0.0030,
                    }}
                    showsUserLocation={true}
                >
                    <Marker
                        draggable={true}
                        coordinate={{
                            latitude: this.state.latitude,
                            longitude: this.state.longitude,
                        }}
                    >
                        <View style={styles.radius}>
                            <View style={styles.marker} />
                        </View>
                    </Marker>

                    <MapViewDirections
                        origin={ruta[0]}
                        destination={ruta[1]}
                        apikey={myKey}
                        strokeWidth={5}
                        strokeColor="red"
                    >
                    </MapViewDirections>

                </MapView >
                <TextInput
                    style={styles.destinationInput}
                    placeholder="¿A dónde vas?"
                    value={this.state.destination}
                    onChangeText={destination => {
                        this.setState({destination})
                        this.onChangeDestinationDebounced(destination)
                    }}
                />
                {predictions}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject
    },
    destinationInput: {
        height: 40,
        borderRadius: 8,
        borderWidth: 1,
        marginTop: 30,
        marginHorizontal: 5,
        padding: 5,
        backgroundColor: "white",
    },
    map: {
        ...StyleSheet.absoluteFillObject
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
    suggestions:{
        backgroundColor: "white",
        padding: 5,
        fontSize: 18,
        borderWidth: 0.5,
        marginHorizontal: 5,

    }
});
