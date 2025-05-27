import { useNavigation, useRoute } from '@react-navigation/native';
import { gameCards } from '@/constants/levels';

export const useLevelProgress = (startGameCallback) => {
  const navigation = useNavigation();
  const route = useRoute();

  const goToNextLevel = () => {
    const currentIndex = gameCards.findIndex(card => card.screen === route.name);
    const nextCard = gameCards[currentIndex + 1];

    if (nextCard) {
      navigation.navigate(nextCard.screen);
    } else {
      navigation.navigate('(tabs)'); // Вернуться на главный экран или любое другое
    }
  };

  const restartLevel = () => {
    if (typeof startGameCallback === 'function') {
      startGameCallback();
    }
  };

  const handleLevelEnd = (isWin) => {
    if (isWin) {
      goToNextLevel();
    } else {
      restartLevel();
    }
  };

  return {
    handleLevelEnd,
    goToNextLevel,
    restartLevel,
  };
};
