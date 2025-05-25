import React from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  ViewStyle,
  StyleProp,
  View,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

type GradientButtonProps = {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
  onPress?: () => void;
};

const GradientButton: React.FC<GradientButtonProps> = ({
  children,
  style,
  onPress,
}) => {
  return (
    <LinearGradient
      colors={['#43BCF0', '#541896', '#711280']}
      start={{ x: 0.2, y: 0 }}
      end={{ x: 0.2, y: 1 }}
      style={[styles.borderWrapper, style]}
    >
      <View style={styles.innerWrapper}>
        <TouchableOpacity style={styles.button} onPress={onPress} activeOpacity={0.8}>
          {children}
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  borderWrapper: {
    borderRadius: 50,
    padding: 2, 
  },
  innerWrapper: {
    borderRadius: 50,
    backgroundColor: '#6EBCF7',
    overflow: 'hidden',
  },
  button: {
    width: 160 - 4, 
    height: 40 - 4,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
  },
});

export default GradientButton;
