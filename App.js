import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import MapView, { UrlTile, Marker } from 'react-native-maps';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      region: {
        latitude: 35.645736,
        longitude: 139.747575,
        latitudeDelta: 0.03,
      },
      urlTemplate: 'http://c.tile.openstreetmap.org/{z}/{x}/{y}.png',
      markers: [
        {
          key: "tamachi sta.",
          latlng: {
            latitude: 35.645736,
            longitude: 139.747575,
          },
          title: '田町駅',
          description: '田町ニューデイズ',  
        },
      ],
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
    backgroundColor: '#FFFFFF',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});
