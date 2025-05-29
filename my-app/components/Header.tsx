import React from 'react';
import {  TouchableOpacity,Image, ImageBackground, StyleSheet, View ,Text} from 'react-native';
import { useLevelProgress } from '@/hooks/useLevelProgress';
import { useNavigation } from '@react-navigation/native';

const Header = ({ type }: { type: 'home' | 'Rules' | 'game' }) => {
  const navigation = useNavigation();
  const { levelProgress } = type === 'game' ? useLevelProgress() : { levelProgress: null };

  return (
    <ImageBackground
      source={require('../assets/images/headerBg.png')}
      style={styles.imageBackground}
      resizeMode="cover"
    >
        {type === 'home' && (
          <View style={styles.centerElements}>
            <View style={styles.spacer} /> 
            <Image source={require('../assets/images/headerLogo.png')} style={styles.logo} />
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Rules')} activeOpacity={0.8}>
      <Image
        source={require('../assets/images/info.png')}
        resizeMode="contain"
      />
    </TouchableOpacity>
    
            </View>            )}
        {type === 'Rules' && (
          <View style={styles.centerElements}>
    <TouchableOpacity style={styles.button}
   onPress={() => navigation.goBack()}activeOpacity={0.8}>
      <Image
        source={require('../assets/images/back.png')}
        resizeMode="contain"
      />
    </TouchableOpacity>            
    <Image source={require('../assets/images/headerLogo.png')} style={styles.logo} />        
    <View style={styles.spacer} /> 

            </View>
         
        )}
        {type === 'game' && (
          <><View style={styles.centerElements}>
   <TouchableOpacity style={styles.buttonGame}
    onPress={() => navigation.replace('LevelsMenu')} activeOpacity={0.8}>
      <Image
        source={require('../assets/images/back.png')}
        resizeMode="contain"
      />
    </TouchableOpacity>    
              <Image source={require('../assets/images/Heart.png')} style={styles.heartIcon} />
              <View style={styles.scoreContainer}>
              <Image source={require('../assets/images/backgroundScore.png')} style={styles.scoreIcon}/>
              <Text style={styles.levelProgressOnImage}>{levelProgress}</Text>
              </View>
            </View>
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
    height: 40,
    resizeMode: 'contain',
  },
  button: {
    width: 30,
    height: 30,
    marginTop:10,
  },  
  buttonGame: {
    width: 48,
    height: 30,
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
    alignItems:'center',
    paddingBottom:15,
  },
  spacer: {
    width: 30,
    height: 30,
  },
  scoreContainer: {
    position: 'relative',
    width: 48,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  
  levelProgressOnImage: {
    position: 'absolute',
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  
});

export default Header;
