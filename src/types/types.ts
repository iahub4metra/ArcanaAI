export type TarotCard = {
  name: string;
  number: string;
  arcana: string;
  suit: string;
  img: string;
  fortuneTelling: string[];
  keywords: string[];
  meanings: {
    light: string[];
    shadow: string[];
  };
  archetype?: string;
  hebrewAlphabet?: string;
  numerology?: string;
  elemental?: string;
  mythicalSpiritual?: string;
  questionsToAsk: string[];
};
