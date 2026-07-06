'use client';
import TarotReadingCardsList from '@/components/tarotReadingCardsList/TarotReadingCardsList';
import Form from '@/components/tarotReadingPage/Form';

export default function TarotReadingPage() {
  return (
    <section className="py-5">
      <div className="adaptive-container">
        <h1 className="text-amber-100">Ask the cards</h1>
        <div>
          <Form />
        </div>

        {/* {cards && <TarotReadingCardsList cards={cards} />} */}
      </div>
    </section>
  );
}
