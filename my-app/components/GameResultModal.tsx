import React from 'react';
import { Modal, View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import GradientButton from './GradientButton';

type GameResultModalProps = {
    visible: boolean;
    onBack: () => void;
    onNext: () => void;
    onHome: () => void;
    isWin: boolean;
  };

  

const GameResultModal: React.FC<GameResultModalProps> = ({ visible, onBack, onNext, isWin,onHome}) => {


    return (
    <Modal transparent animationType="fade" visible={visible}>
      <View style={styles.overlay}>
        <View style={styles.modal}>
          <LinearGradient
            colors={['#70C0F7', '#9673E3']}
            style={styles.gradientContainer}
          >
            <LinearGradient
              colors={['#4A0388', '#8B39C2']}
              style={styles.button}
            >
              <Text style={styles.buttonText}>{isWin ? 'YOU WON!' : 'YOU LOST!'}</Text>
            </LinearGradient>

          
          </LinearGradient>
          <View style={styles.buttons}>
              <GradientButton onPress={onHome}>
                <Image source={require('../assets/images/homeIcon.png')} style={styles.icon} />
              </GradientButton>
              {isWin ? (
    <GradientButton onPress={onNext}>
      <Image source={require('../assets/images/nextIcon.png')} style={styles.icon} />
    </GradientButton>
  ) : (
    <GradientButton onPress={onNext}>
      <Image source={require('../assets/images/back.png')} style={styles.icon} />
    </GradientButton>
  )}
            </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.4)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modal: {
    borderRadius: 20,
    overflow: 'hidden',
    width: 300,
  },
  gradientContainer: {
    width:283,
    height:183,
    padding: 20,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    width:162,
    height:72,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
  },
  buttons: {
    paddingTop:10,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  icon: {
    width: 32,
    height: 32,
    resizeMode: 'contain',
  },
});

export default GameResultModal;
