import React from 'react';
import { Text, Image, ImageBackground, StyleSheet, View } from 'react-native';

import GradientButton from '@/components/GradientButton';
import { useNavigation } from '@react-navigation/native';

const Header = ({ type }: { type: 'home' | 'Rules' | 'game' }) => {
    const navigation = useNavigation();
  return (
    <View style={styles.container} >
      <ImageBackground
        source={require('../assets/images/headerBg.png')}
        style={styles.image}
      >
  {type === 'home' && (<>
        <Image source={require('../assets/images/headerLogo.png')} style={styles.logo} />
        <GradientButton onPress={() => navigation.navigate('Rules')}>
          <Image source={require('../assets/images/info.png')} style={styles.icon} />
        </GradientButton>
        </>
      )}

      {type === 'Rules' && (<>
        <Image source={require('../assets/images/headerLogo.png')} style={styles.logo} />
        <GradientButton onPress={() => navigation.goBack()} style={styles.button}>
          <Image source={require('../assets/images/back.png')} style={styles.icon} />
        </GradientButton>
        </>
      )}

      {type === 'game' && (
        <View style={styles.gameRight}>
          <GradientButton onPress={() => navigation.goBack()}>
            <Image source={require('../assets/images/back.png')} style={styles.icon} />
          </GradientButton>
          <Image source={require('../assets/images/Heart.png')} style={styles.icon} />
          <Image source={require('../assets/images/score.png')} style={styles.icon} />
        </View>
      )}
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      height: 102,
      width:'100%',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    logo: {
      width: 62,
      height: 39,
      resizeMode: 'contain',
    },
    icon: {
      width: 11.16,
      height: 15.92,
    },
    image: {
        flex: 1,
      },
    gameRight: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    button:{
        width: 30,
        alignItems: 'center',
        justifyContent: 'center',
        height: 30,
    },
  });

export default Header;
