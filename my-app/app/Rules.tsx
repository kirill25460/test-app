import React from 'react';
import { Text, Image, ImageBackground, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '@/components/Header';
const Rules = () => {
  return (<>
    <SafeAreaView style={styles.container} edges={['left', 'right']}>
      <ImageBackground
        source={require('../assets/images/bg1.png')}
        resizeMode="cover"
        style={styles.image}
      >
          <View style={styles.content}>
<Text style={styles.text}>Rules</Text>
            <Text style={styles.loremText}>Lorem ipsum dolor sit amet consectetur. A ut sit pellentesque vel. Sit tincidunt praesent adipiscing in magna erat enim nec urna. Aliquet volutpat id arcu fames varius mus ultricies mollis. Adipiscing blandit cursus faucibus vel ullamcorper dignissim at...</Text>
        </View>
      </ImageBackground>
    </SafeAreaView>
    </>
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
text:{},
loremText:{},
});

export default Rules;
