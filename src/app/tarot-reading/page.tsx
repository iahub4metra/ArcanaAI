'use client';
import TarotReadingCardsList from '@/components/tarotReadingCardsList/TarotReadingCardsList';

import { getRandomCards } from '@/services/randomCards';
import { TarotCard } from '@/types/types';
import TextField from '@mui/material/TextField';
import { useState } from 'react';

export default function TarotReading() {
  const [cards, setCards] = useState<TarotCard[]>();

  const onAsk = () => {
    const arr = getRandomCards();
    setCards(arr);
  };

  return (
    <section className="py-5">
      <div className="adaptive-container">
        <h1 className="text-amber-100">Ask the cards</h1>
        <div>
          <form>
            <TextField
              sx={{
                backgroundColor: 'white',
              }}
              placeholder="Your question to the cards"
            />
          </form>
          <button className="border-0 bg-amber-100 rounded-20px text-red-900" onClick={onAsk}>
            get random cards
          </button>
        </div>

        {cards && <TarotReadingCardsList cards={cards} />}
      </div>
    </section>
  );
}
