import React from 'react';
import { TouchableOpacity, Image, StyleSheet } from 'react-native';

type ImageButtonProps = {
  onPress?: () => void;
};

const BackButton: React.FC<ImageButtonProps> = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.8}>
      <Image
        source={require('../assets/images/back.png')}
        style={styles.buttonImage}
        resizeMode="contain"
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonImage: {
    width: 160,
    height: 40,
  },
});

export default BackButton;
