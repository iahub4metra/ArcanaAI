'use client';
import { TarotCard } from '@/types/types';
import CardFlip from './CardFlip';

export interface SpreadRevealProps {
  cards: TarotCard[];
}

const DEAL_STAGGER = 0.5;
const FLIP_PAUSE = 0.9;

export default function SpreadReveal({ cards }: SpreadRevealProps) {
  return (
    <div className="flex justify-center gap-3 md:gap-4">
      {cards.map((card, index) => (
        <CardFlip
          imgSrc={card.img}
          key={card.name}
          name={card.name}
          dealDelay={index * DEAL_STAGGER}
          flipDelay={FLIP_PAUSE}
        />
      ))}
    </div>
  );
}
