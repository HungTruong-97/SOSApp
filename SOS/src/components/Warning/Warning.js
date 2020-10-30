import React, { Component } from 'react';
import { SafeAreaView, Text, Platform, View }
    from 'react-native';
import MapboxGL from "@react-native-mapbox-gl/maps";
MapboxGL.setAccessToken("pk.eyJ1IjoiaHVuZ3RkMjkiLCJhIjoiY2tndXk0MGk2MHBiaTJ0cGU5M3F1c21zcSJ9.t7wEUoF4ryMlY_nNqXaiiw");

const IS_ANDROID = Platform.OS === 'android';
const dataSourceSave = {
    type: 'FeatureCollection',
    features: [
        {
            type: 'Feature',
            id: '9d10456e-bdda-4aa9-9269-04c1667d4552',
            properties: {
                icon: 'exampleIcon',
            },
            geometry: {
                type: 'Point',
                coordinates: [110.268991, 14.878874],
            },
        },
        {
            type: 'Feature',
            id: '9d10456e-bdda-4aa9-9269-04c1667d45522',
            properties: {
                icon: 'exampleIcon',
            },
            geometry: {
                type: 'Point',
                coordinates: [108.577097, 15.345553],
            },
        },
        {
            type: 'Feature',
            id: '9d10456e-bdda-4aa9-9269-04c1667d45523',
            properties: {
                icon: 'exampleIcon',
            },
            geometry: {
                type: 'Point',
                coordinates: [106.665476, 15.620831],
            },
        },
        {
            type: 'Feature',
            id: '9d10456e-bdda-4aa9-9269-04c1667d45522',
            properties: {
                icon: 'exampleIcon',
            },
            geometry: {
                type: 'Point',
                coordinates: [105.965499, 15.762658],
            },
        },
        {
            type: 'Feature',
            id: '9d10456e-bdda-4aa9-9269-04c1667d45521',
            properties: {
                icon: 'exampleIcon',
            },
            geometry: {
                type: 'Point',
                coordinates: [102.867355, 16.599862],
            },
        },
    ],
};
const icon={
    iconImage:require('../../assets/img/unnamed.png'),
    iconAllowOverlap:true,
    iconSize:0.05,
    iconColor:'#0001fd'
}

const listStreet=[[110.268991, 14.878874],[108.577097, 15.345553],
                [106.665476, 15.620831],[105.965499, 15.762658],[102.867355, 16.599862]];
const dataSourceSave2={
    type: 'Feature',
    properties: {
        icon: 'exampleIcon',
    },
    geometry: {
        type: 'LineString',
        coordinates: listStreet,
    },
}
export default class Warning extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isAndroidPermissionGranted: false,
            isFetchingAndroidPermission: IS_ANDROID,
            coordinates: [[106.582956, 16.570828]],
            showUserLocation: true,
            location: [[-122.084990, 37.426929]],
        };
    }
    componentDidMount() {
        MapboxGL.setTelemetryEnabled(false);
    }
    render() {
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <View style={{ flex: 1 }}>
                    <MapboxGL.MapView style={{ flex: 1 }}>
                        <MapboxGL.Camera
                            centerCoordinate={this.state.coordinates[0]}
                            animationMode={'flyTo'}
                            animationDuration={0}
                            zoomLevel={5}
                        />
                        <MapboxGL.ShapeSource
                            id={'exampleShapSource'}
                            hitbox={{width:20,height:20}}
                            onPress={e=>{console.log("123")}}
                            shape={dataSourceSave}
                        >
                            <MapboxGL.SymbolLayer
                                id={'exampleIconName'}
                                style={icon}
                            >

                            </MapboxGL.SymbolLayer>
                        </MapboxGL.ShapeSource>
                        <MapboxGL.ShapeSource
                            id={'routeSource'}
                            shape={dataSourceSave2}
                        >
                            <MapboxGL.LineLayer
                                id={'exampleLineLayer'}
                                style={{lineColor:'#0001fd',lineWidth:2}}
                            >

                            </MapboxGL.LineLayer>
                        </MapboxGL.ShapeSource>
                    </MapboxGL.MapView>
                </View>
            </SafeAreaView>
        );
    }
}