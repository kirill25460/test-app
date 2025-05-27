import React from 'react';
import { TouchableOpacity, Image, ImageBackground, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';

const Start = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container} edges={['left', 'right']}>
      <ImageBackground
        source={require('../../assets/images/bg2.png')}
        resizeMode="cover"
        style={styles.image}
      >
        <View style={styles.content}>
          <Image
            source={require('../../assets/images/GroupStartMenu.png')}
            style={styles.logo}
            resizeMode="contain"
          />
          <TouchableOpacity onPress={() => navigation.navigate('LevelsMenu')} activeOpacity={0.8}>
      <Image
        source={require('../../assets/images/btnStart.png')}
        style={styles.buttonImage}
        resizeMode="contain"
      />
    </TouchableOpacity>
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
  content: {
    flex: 1,
    justifyContent: 'space-evenly', 
    alignItems: 'center',
  },
  logo: {
    width: 250,
    height: 250,
  },
  buttonImage: {
    width: 160,
    height: 40,
  },
});

export default Start;
