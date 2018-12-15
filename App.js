/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import MapView, { UrlTile, Marker } from 'react-native-maps';

type Props = {};
export default class App extends Component<Props> {
  constructor(props) {
    super(props);

    this.state = {
      region: {
        latitude: 35.645736,
        longitude: 139.747575,
        latitudeDelta: 0.03,
        longitudeDelta: 0.03,
      },
      urlTemplate: 'http://c.tile.openstreetmap.org/{z}/{x}/{y}.png',
      markers: [
        {
          key: 'tamachiStation',
          latlng: {
            latitude: 35.645736,
            longitude: 139.747575,
          },
          title: '田町駅',
          description: '田町ニューデイズ',
        },
      ],
    };

    this.requestGetCurrentPosition();
  }

  onRegionChange(region) {
    this.setState({ region });
  }

  requestGetCurrentPosition = () => {
    if (!navigator.geolocation) return false

    const options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0,
    };

    navigator.geolocation.getCurrentPosition(
      this.successToGetCurrentPosition,
      this.failToGetCurrentPosition,
      options
    );
  }

  successToGetCurrentPosition = (position) => {
    const { latitude, longitude } = position.coords;

    this.setState(prevState => ({
      region: {
        ...prevState.region,
        latitude,
        longitude,
      }
    }));
  }

  failToGetCurrentPosition = (error) => {
    console.warn(`ERROR(${error.code}): ${error.message}`);
  }

  render() {
    return (
      <View style={styles.container}>
        <MapView
          style={styles.map}
          region={this.state.region}
          onRegionChange={this.onRegionChange.bind(this)}
        >
          <UrlTile
            urlTemplate={this.state.urlTemplate}
            maximumZ={19}
          />
          {this.state.markers.map(marker => (
            <Marker
              key={marker.key}
              coordinate={marker.latlng}
              title={marker.title}
              description={marker.description}
            />
          ))}
        </MapView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});