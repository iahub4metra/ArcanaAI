'use client';
//import TarotReadingCardsList from '@/components/tarotReadingCardsList/TarotReadingCardsList';
import Form from '@/components/tarotReadingPage/Form';
import Image from 'next/image';

export default function TarotReadingPage() {
  return (
    <section className="py-5">
      <div className="adaptive-container">
        <h3 className="text-[#FDF4E1] text-[24px] text-center mb-2">Ask & Draw</h3>
        <p className="text-[#FDF4E1] text-center text-[12px] mb-4">
          Ask with clarity for best results.
        </p>

        <div className="flex flex-col md:flex-row md:gap-6">
          <Image
            src="/readingForm/formHero.png"
            alt="tarot deck"
            width={340}
            height={280}
            className="rounded-2xl mb-3 w-[340px] h-[280px] md:w-[280px] md:h-[240px]"
          />
          <Form />
        </div>

        {/* {cards && <TarotReadingCardsList cards={cards} />} */}
      </div>
    </section>
  );
}
