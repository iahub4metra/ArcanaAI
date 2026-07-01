import { TarotCard } from '@/types/types';
import data from '../data/tarot.json';

export const getRandomCards = () => {
  const deck = [...data];
  const randomCards: TarotCard[] = [];
  for (let index = 0; index < 3; index++) {
    const randomNumber = Math.floor(Math.random() * deck.length);
    randomCards.push(deck[randomNumber]);
    deck.splice(randomNumber, 1);
  }
  return randomCards;
};
