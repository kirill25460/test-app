import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';

type CardType = {
  id: number;
  pairId: number;
  isOpen: boolean;
  isMatched: boolean;
};

const CARD_PAIRS = 6; // 12 карток (6 пар)

const generateCards = (): CardType[] => {
  const cards: CardType[] = [];
  for (let i = 0; i < CARD_PAIRS; i++) {
    cards.push({ id: i * 2, pairId: i, isOpen: true, isMatched: false });
    cards.push({ id: i * 2 + 1, pairId: i, isOpen: true, isMatched: false });
  }
  // Перемішуємо
  return cards.sort(() => Math.random() - 0.5);
};

const GameJelly = () => {
  const [cards, setCards] = useState<CardType[]>([]);
  const [isCardsRevealed, setIsCardsRevealed] = useState(true);
  const [selectedPairId, setSelectedPairId] = useState<number | null>(null);
  const [progressIndex, setProgressIndex] = useState(0); // для порядку вибору пар

  useEffect(() => {
    const newCards = generateCards();
    setCards(newCards);

    // Показати всі відкритими 1.5 секунди, потім закрити
    setTimeout(() => {
      setCards((prev) =>
        prev.map((card) => ({
          ...card,
          isOpen: false,
        }))
      );
      setIsCardsRevealed(false);
    }, 2000);
  }, []);

  const onCardPress = (card: CardType) => {
    if (isCardsRevealed || card.isOpen || card.isMatched) return;

    // Перевіряємо чи це наступна пара в порядку
    if (card.pairId === progressIndex) {
      // Відкриваємо картку
      setCards((prev) =>
        prev.map((c) =>
          c.id === card.id ? { ...c, isOpen: true, isMatched: true } : c
        )
      );
      setProgressIndex(progressIndex + 1);
      if (progressIndex + 1 === CARD_PAIRS) {
        alert('Вітаємо! Рівень пройдений!');
      }
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.grid}>
        {cards.map((card) => (
          <TouchableOpacity
            key={card.id}
            style={[styles.card, card.isOpen ? styles.cardOpen : styles.cardClosed]}
            onPress={() => onCardPress(card)}
            activeOpacity={0.8}
          >
            <Text style={styles.cardText}>{card.isOpen ? card.pairId + 1 : '?'}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const { width } = Dimensions.get('window');
const cardSize = (width - 40) / 4;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    alignItems: 'center',
    backgroundColor: '#f7f7f7',
  },
  title: {
    fontSize: 20,
    marginBottom: 20,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: cardSize * 4,
    justifyContent: 'center',
  },
  card: {
    width: cardSize - 10,
    height: cardSize - 10,
    margin: 5,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardOpen: {
    backgroundColor: '#4caf50',
  },
  cardClosed: {
    backgroundColor: '#9e9e9e',
  },
  cardText: {
    fontSize: 24,
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default GameJelly;
