import data from '../data/tarot.json';

export const findCardOfTheDayFortuneTelling = (cardName: string): string[] => {
  return data.find((card) => card.name === cardName)?.fortuneTelling ?? [];
};
