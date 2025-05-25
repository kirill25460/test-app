import React from 'react';
import { Text, Image, ImageBackground, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import GradientButton from '@/components/GradientButton';
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
          <GradientButton style={styles.button} onPress={() => navigation.navigate('LevelsMenu')}>
            <Text style={styles.buttonText}>START</Text>
          </GradientButton>
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
  button: {
    width: 160,
    height: 40,
  },
  buttonText: {
    color: 'white',
    fontSize: 24,
    fontWeight: '400',
  },
});

export default Start;
