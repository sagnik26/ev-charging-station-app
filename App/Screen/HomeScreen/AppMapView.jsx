import React, { useContext } from 'react';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import { StyleSheet, View } from 'react-native';
import { UserLocationContext } from '../../Context/UserLocationContext';
import MapViewStyle from '../../Utils/MapViewStyle.json';

export default function AppMapView() {
  const { location, setLocation } = useContext(UserLocationContext);

  return location?.latitude && (
    <View style={styles.container}>
      <MapView 
        style={styles.map} 
        provider={PROVIDER_GOOGLE}
        showsUserLocation={true}
        region={{
            latitude: location?.latitude,
            longitude: location?.longitude,
            latitudeDelta: 0.0422,
            longitudeDelta: 0.0421
        }}
        // customMapStyle={MapViewStyle}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: 500,
    height: 700,
  },
});
