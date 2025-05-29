import React from 'react';
import { Image, ImageBackground, StyleSheet, View, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';

const gameCards = [
  { id: 1, image: require('../assets/images/zeus.png'), screen: 'GameZeus' },
  { id: 2, image: require('../assets/images/dogs.png'), screen: 'GameDogs' },
  { id: 3, image: require('../assets/images/tiger.png'), screen: 'GameTiger' },
  { id: 4, image: require('../assets/images/candy.png'), screen: 'GameCandy' },
  { id: 5, image: require('../assets/images/space.png'), screen: 'GameSpace' },
  { id: 6, image: require('../assets/images/jelly.png'), screen: 'GameJelly' },
  { id: 7, image: require('../assets/images/magic.png'), screen: 'GameMagic' },
  { id: 8, image: require('../assets/images/robots.png'), screen: 'GameRobots' },
];

const LevelsMenu = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container} edges={['left', 'right']}>
      <ImageBackground
        source={require('../assets/images/bg1.png')}
        resizeMode="cover"
        style={styles.image}
      >
        <View style={styles.grid}>
          {gameCards.map((card) => (
            <TouchableOpacity
              key={card.id}
              style={styles.card}
              onPress={() => navigation.navigate(card.screen)}
            >
              <Image source={card.image} style={styles.logo} resizeMode="cover" />
            </TouchableOpacity>
          ))}
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
  },
  grid: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20, // Работает в новых версиях RN
  },
  card: {
    width: 130,
    height: 130,
    margin: 10,
  },
  logo: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
  },
});

export default LevelsMenu;
