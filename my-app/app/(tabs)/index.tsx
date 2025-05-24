import React from 'react';
import { Text, TouchableOpacity , Image,ImageBackground, StyleSheet} from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';


const StartMenu = () => {
  return (<>
   <SafeAreaView style={styles.container} edges={['left', 'right']}>
      <ImageBackground source={require('../../assets/images/bg2.png')}resizeMode="cover" style={styles.image}>
         <Image
        source={require('../../assets/images/GroupStartMenu.png')}
      />
 <TouchableOpacity style={styles.button}>
    <Text style={styles.buttonText}>START</Text>
  </TouchableOpacity>
      </ImageBackground>
    </SafeAreaView>
  </>);
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontSize: 42,
    lineHeight: 84,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#000000c0',
  },
  button: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 4,
    paddingHorizontal: 8,
    width: 160,
    height: 40,
    backgroundColor: '#6EBCF7',
    shadowColor: '#ffffff',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.25,
    shadowRadius: 5,
    elevation: 5, 
    borderRadius: 50,
  },
  buttonText: {
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 24,
    lineHeight: 38,
    textAlign: 'center',
    letterSpacing: 1,
    textTransform: 'uppercase',
    color: '#FFFFFF',},
});
export default StartMenu;
