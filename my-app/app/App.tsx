// import React, { useEffect, useState } from 'react';
// import { View, Text, StyleSheet } from 'react-native';
// import * as Location from 'expo-location';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import { WebView } from 'react-native-webview';

// import MemoryGame from '../;
// import { initSDKs } from '../SDKInit';

// const App = () => {
//   const [isUkraine, setIsUkraine] = useState<boolean | null>(null);

//   useEffect(() => {
//     initSDKs();

//     (async () => {
//       let { status } = await Location.requestForegroundPermissionsAsync();
//       if (status !== 'granted') {
//         setIsUkraine(false);
//         return;
//       }

//       let location = await Location.getCurrentPositionAsync({});
//       const reverseGeocode = await Location.reverseGeocodeAsync({
//         latitude: location.coords.latitude,
//         longitude: location.coords.longitude,
//       });

//    const countryCode = reverseGeocode[0]?.isoCountryCode;

// if (countryCode === 'UA') {
//   setIsUkraine(true);
// } else {
//   setIsUkraine(false);
// }

//     })();
//   }, []);

//   if (isUkraine === null) {
//     return (
//       <View style={styles.center}>
//         <Text>Loading location...</Text>
//       </View>
//     );
//   }

//   if (!isUkraine) {
//     return <WebView source={{ uri: 'https://uk.wikipedia.org/wiki/Ukraine' }} style={{ flex: 1 }} />;
    
//   }

//   return (
//     <View style={styles.container}>
//       <MemoryGame />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: { flex: 1 },
//   center: { flex: 1, justifyContent: 'center', alignItems: 'center' },
// });

// export default App;
