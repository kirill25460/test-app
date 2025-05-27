import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';
import Header from '../components/Header'; 
import { useColorScheme } from '@/hooks/useColorScheme';
export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/Baloo2-VariableFont_wght.ttf'),
  });

  if (!loaded) return null;

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
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
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
