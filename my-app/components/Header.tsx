import React from 'react';
import {  TouchableOpacity,Image, ImageBackground, StyleSheet, View } from 'react-native';
import BackButton from './BackButton'; 
import { useNavigation } from '@react-navigation/native';

const Header = ({ type }: { type: 'home' | 'Rules' | 'game' }) => {
  const navigation = useNavigation();

  return (
    <ImageBackground
      source={require('../assets/images/headerBg.png')}
      style={styles.imageBackground}
      resizeMode="cover"
    >
        {type === 'home' && (
          <View style={styles.centerElements}>
            <Image source={require('../assets/images/headerLogo.png')} style={styles.logo} />
            <TouchableOpacity onPress={() => navigation.navigate('Rules')} activeOpacity={0.8}>
      <Image
        source={require('../assets/images/info.png')}
        resizeMode="contain"
      />
    </TouchableOpacity>
            </View>            )}
        {type === 'Rules' && (
          <View style={styles.centerElements}>
          <BackButton onPress={() => navigation.navigate('LevelsMenu')}/>
            <Image source={require('../assets/images/headerLogo.png')} style={styles.logo} />
            <View /> 
            </View>
         
        )}
        {type === 'game' && (
          <><View style={styles.centerElements}>
              <BackButton onPress={() => navigation.navigate('LevelsMenu')}/>
              <Image source={require('../assets/images/Heart.png')} style={styles.heartIcon} />
              <Image source={require('../assets/images/score.png')} style={styles.scoreIcon} />
            </View>
            <View  />
          </>
        )}
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  imageBackground: {
    width: '100%',
    height: 102,
    justifyContent: 'flex-end',

  },
  logo: {
    width: 62,
    height: 39,
    resizeMode: 'contain',
  },
  icon: {
    width: 11.16,
    height: 15.92,
    resizeMode: 'contain',
  },
  button: {
    width: 30,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  scoreIcon: {
    width: 48,
    height: 30,
    resizeMode: 'contain',

  },
  heartIcon: {
    width: 32,
    height: 30,
    resizeMode: 'contain',

  },
  centerElements: {
    flexDirection: 'row',
    justifyContent:'space-around',
    paddingBottom:15,
  },
  
});

export default Header;
