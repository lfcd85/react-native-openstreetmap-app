/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import MapView, { UrlTile } from 'react-native-maps';

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
    };
  }

  onRegionChange(region) {
    this.setState({ region });
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