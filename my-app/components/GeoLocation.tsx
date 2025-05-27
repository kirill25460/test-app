import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import * as Location from 'expo-location';
import { WebView } from 'react-native-webview';

export default function GeoLocation({ children }: { children: React.ReactNode }) {
  const [isUkraine, setIsUkraine] = useState<boolean | null>(null);

  useEffect(() => {
    (async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        console.log('⛔ Дозвіл на геолокацію не надано');
        setIsUkraine(false);
        return;
      }

      const location = await Location.getCurrentPositionAsync({});
      console.log('📍 Координати:', location.coords);

      const reverseGeocode = await Location.reverseGeocodeAsync({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      });

      if (reverseGeocode.length > 0) {
        const place = reverseGeocode[0];
        console.log('📌 Геолокація:', place);
        console.log(`🌍 Країна: ${place.country}, Код: ${place.isoCountryCode}`);
        setIsUkraine(place.isoCountryCode === 'UA');
      } else {
        setIsUkraine(false);
      }
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

  return <>{children}</>;
}

const styles = StyleSheet.create({
  center: { flex: 1, justifyContent: 'center', alignItems: 'center' },
});
