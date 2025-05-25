// App.tsx (в корне проекта)
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import * as Location from 'expo-location';
import { WebView } from 'react-native-webview';
import { Slot } from 'expo-router';

export default function App() {
  const [isUkraine, setIsUkraine] = useState<boolean | null>(null);

  useEffect(() => {
    (async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setIsUkraine(false);
        return;
      }

      const location = await Location.getCurrentPositionAsync({});
      const reverseGeocode = await Location.reverseGeocodeAsync({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      });

      const countryCode = reverseGeocode[0]?.isoCountryCode;
      setIsUkraine(countryCode === 'UA');
    })();
  }, []);

  if (isUkraine === null) {
    return (
      <View style={styles.center}>
        <Text>Loading location...</Text>
      </View>
    );
  }

  if (!isUkraine) {
    return <WebView source={{ uri: 'https://uk.wikipedia.org/wiki/Ukraine' }} style={{ flex: 1 }} />;
  }

  // Здесь подключается весь expo-router
  return <Slot />;
}

const styles = StyleSheet.create({
  center: { flex: 1, justifyContent: 'center', alignItems: 'center' },
});
