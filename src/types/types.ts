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

export interface AIReading {
  question: string;
  cards: {
    name: string;
    position: number;
    meaning: string;
    relation: string;
  }[];
  overallInterpretation: string;
  guidance: string[];
}

export interface ReadingSession {
  question: string;
  cards: TarotCard[];
  createdAt: string;
  answer: AIReading;
}
