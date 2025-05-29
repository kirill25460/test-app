import React, { useState, useEffect } from 'react';
import { View, Image,ImageBackground,SafeAreaView, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import GameResultModal from '@/components/GameResultModal';
import { useLevelProgress } from '@/hooks/useLevelProgress';
import { useNavigation } from '@react-navigation/native';

type Card = {
  id: number;
  image: any;
  isFlipped: boolean;
  isMatched: boolean;
};

const images = [
  require('../assets/images/magicCard.png'),
 require('../assets/images/magicCard2.png'),
 require('../assets/images/magicCard3.png'),
 require('../assets/images/magicCard.png'),
 require('../assets/images/magicCard2.png'),
 require('../assets/images/magicCard3.png'),
];

const shuffleArray = (array: any[]) => {
  return array
    .map((item) => ({ item, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ item }) => item);
};

const GameMagic = () => {
  const [cards, setCards] = useState<any[]>([]);
  const [selected, setSelected] = useState<number[]>([]);
  const [disabled, setDisabled] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isWin, setIsWin] = useState(false);

  const navigation = useNavigation();



  useEffect(() => {
    startGame();
  }, []);

  const startGame = () => {
    const shuffledImages = shuffleArray(images);
    const initializedCards = shuffledImages.map((image, index) => ({
      id: index,
      image,
      isFlipped: true,
      isMatched: false,
    }));
    setCards(initializedCards);

    setTimeout(() => {
      const hiddenCards = initializedCards.map((card) => ({
        ...card,
        isFlipped: false,
      }));
      setCards(hiddenCards);
      setDisabled(false);
    }, 2000);
  };

  useEffect(() => {
    if (
      cards.length > 0 &&
      cards.every((card) => card.isMatched) &&
      selected.length === 0
    ) {
      setTimeout(() => {
        setIsModalVisible(true);
        setIsWin(true);
      }, 500);
    }
  }, [cards, selected]);

  const handlePress = (index: number) => {
    if (disabled || selected.includes(index) || cards[index].isMatched) return;

    const newSelected = [...selected, index];
    const newCards = [...cards];
    newCards[index].isFlipped = true;
    setCards(newCards);
    setSelected(newSelected);

    if (newSelected.length === 2) {
      setDisabled(true);
      const [first, second] = newSelected;

      if (newCards[first].image === newCards[second].image) {
        newCards[first].isMatched = true;
        newCards[second].isMatched = true;
        setTimeout(() => {
          setCards([...newCards]);
          setSelected([]);
          setDisabled(false);
        }, 500);
      } else {
        setTimeout(() => {
          newCards[first].isFlipped = false;
          newCards[second].isFlipped = false;
          setCards([...newCards]);
          setSelected([]);
          setDisabled(false);
          setIsWin(false);
          setIsModalVisible(true);
        }, 1000);
      }
    }
  };

  const { handleLevelEnd } = useLevelProgress(startGame);


  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require('../assets/images/zeusBg.png')}
        resizeMode="cover"
        style={styles.imageBg}
      >
      <View style={styles.grid}>
        {cards.map((card, index) => (
          <TouchableOpacity
            key={index}
            style={styles.card}
            onPress={() => handlePress(index)}
          >
            {card.isFlipped || card.isMatched ? (
              <Image source={card.image} style={styles.image} />
            ) : (
              <Image source={require('../assets/images/cardBack.png')} style={styles.image} />
            )}
          </TouchableOpacity>
        ))}
      </View>
      </ImageBackground>
      <GameResultModal
  visible={isModalVisible}
  isWin={isWin}
  onBack={() => {
    setIsModalVisible(false);
    startGame();

  }}
  onNext={() => {
    setIsModalVisible(false);
    handleLevelEnd(isWin); 
  }}
  onHome={() => {
    setIsModalVisible(false);
    navigation.reset({
      index: 0,
      routes: [{ name: '(tabs)' }], 
    });
  }}
  
/>

    </SafeAreaView>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
  imageBg: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center', 
    alignItems: 'center',
  },
  image: {
    width: 150,
    height: 150,
    resizeMode: 'cover',
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 20,
    justifyContent: 'center',
    gap: 15, 
  },
  card: {
    width: 150,
    height: 150,
  },

  
});

export default GameMagic;
