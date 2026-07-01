import { TarotCard } from '@/types/types';
import Image from 'next/image';

export interface tarotReadingCardsListProps {
  cards: TarotCard[];
}

export default function TarotReadingCardsList({ cards }: tarotReadingCardsListProps) {
  return (
    <ul className="flex">
      {cards.map((card, index) => (
        <li key={index}>
          <div>
            <Image src={`/cards/${card.img}`} alt={card.name} width={300} height={400} />
          </div>
        </li>
      ))}
    </ul>
  );
}
