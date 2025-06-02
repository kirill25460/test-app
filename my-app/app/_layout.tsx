import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { useEffect } from 'react';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';
import {OneSignal} from 'react-native-onesignal'; 
import appsFlyer from 'react-native-appsflyer';
import Header from '../components/Header'; 
import GeoLocation from '../components/GeoLocation';
import { useColorScheme } from '@/hooks/useColorScheme';
import '../services/firebaseConfig';
import { initAppsflyerSDK } from '../services/appsflyer'; 
import { storeData, getData } from '../utils/storage';
export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/Baloo2-VariableFont_wght.ttf'),
  });

  useEffect(() => {
    appsFlyer.initSdk(
      {
        devKey: process.env.APPSFLYER_DEV_KEY,
        isDebug: true,
        appId: Platform.OS === 'ios' ? process.env.APPSFLYER_IOS_APP_ID : undefined,
      },
      (result) => {
        console.log('AppsFlyer SDK init result:', result);
      },
      (error) => {
        console.error('AppsFlyer SDK init error:', error);
      }
    );
  }, []);
  
  useEffect(() => {
    OneSignal.setNotificationWillShowInForegroundHandler((event) => {
      let notification = event.getNotification();
      event.complete(notification);
    });


    (async () => {
      await storeData('visited', true);
      const visited = await getData('visited');
      console.log('Visited status:', visited);
    })();
  }, []);

  if (!loaded) return null;

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <GeoLocation>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="LevelsMenu" options={{ header: () => <Header type="home" /> }} />
        <Stack.Screen name="Rules" options={{ header: () => <Header type="Rules" /> }} />
        <Stack.Screen name="GameSpace" options={{ header: () => <Header type="game" /> }} />
        <Stack.Screen name="GameJelly" options={{ header: () => <Header type="game" /> }} />
        <Stack.Screen name="GameMagic" options={{ header: () => <Header type="game" /> }} />
        <Stack.Screen name="GameRobots" options={{ header: () => <Header type="game" /> }} />
        <Stack.Screen name="GameZeus" options={{ header: () => <Header type="game" /> }} />
        <Stack.Screen name="GameTiger" options={{ header: () => <Header type="game" /> }} />
        <Stack.Screen name="GameCandy" options={{ header: () => <Header type="game" /> }} />
        <Stack.Screen name="GameDogs" options={{ header: () => <Header type="game" /> }} />
      </Stack>
      </GeoLocation>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
