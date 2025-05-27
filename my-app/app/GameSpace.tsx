import React, { useState, useEffect } from 'react';
import { View, Image,ImageBackground,SafeAreaView, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';

type Card = {
  id: number;
  image: any;
  isFlipped: boolean;
  isMatched: boolean;
};

const images = [
  require('../assets/images/cardSpace.png'),
 require('../assets/images/cardSpace2.png'),
  require('../assets/images/cardSpace3.png'),
  require('../assets/images/cardSpace.png'),
  require('../assets/images/cardSpace2.png'),
   require('../assets/images/cardSpace3.png'),
];

const shuffleArray = (array: any[]) => {
  return array
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);
};


const GameSpace = () => {
  const [cards, setCards] = useState<Card[]>([]);
  const [selected, setSelected] = useState<number[]>([]);
  const [disabled, setDisabled] = useState(true);
  const [tries, setTries] = useState(0);

  useEffect(() => {
    const shuffled = shuffleArray(images);
    const initialized = shuffled.map((img, idx) => ({
      id: idx,
      image: img,
      isFlipped: true,
      isMatched: false,
    }));
    setCards(initialized);

    // Показываем карточки 2 секунды, потом скрываем
    setTimeout(() => {
      const hidden = initialized.map((card) => ({ ...card, isFlipped: false }));
      setCards(hidden);
      setDisabled(false);
    }, 2000);
  }, []);

  const handlePress = (index: number) => {
    if (disabled || cards[index].isFlipped || cards[index].isMatched) return;

    const newCards = [...cards];
    newCards[index].isFlipped = true;
    const newSelected = [...selected, index];
    setCards(newCards);
    setSelected(newSelected);

    if (newSelected.length === 2) {
      setDisabled(true);
      setTries((prev) => prev + 1);
      const [first, second] = newSelected;

      if (newCards[first].image === newCards[second].image) {
        // Совпало
        newCards[first].isMatched = true;
        newCards[second].isMatched = true;
        setTimeout(() => {
          setCards([...newCards]);
          setSelected([]);
          setDisabled(false);
        }, 500);
      } else {
        // Не совпало
        setTimeout(() => {
          newCards[first].isFlipped = false;
          newCards[second].isFlipped = false;
          setCards([...newCards]);
          setSelected([]);
          setDisabled(false);
        }, 1000);
      }
    }
  };

  const isWin = cards.every((card) => card.isMatched);

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require('../assets/images/spaceBg.png')}
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

export default GameSpace;
