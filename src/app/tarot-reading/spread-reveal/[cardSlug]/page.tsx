'use client';
import { capitalizeFirstLetter } from '@/services/capitalizeFirstLetter';
import { slugify } from '@/services/slug';
import { ReadingSession } from '@/types/types';
import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';

export default function CardDetailPage() {
  const { cardSlug } = useParams<{ cardSlug: string }>();
  const result: ReadingSession = JSON.parse(localStorage.getItem('reading-session')!);

  const card = result.cards.find((c) => slugify(c.name) === cardSlug);
  const aiCard = result.answer.cards.find((c) => slugify(c.name) === cardSlug);

  if (!card || !aiCard) {
    return <p className="p-5 text-[#E6DCC6]">Card not found.</p>;
  }

  return (
    <section className="py-8">
      <div className="adaptive-container">
        <Link
          href="/tarot-reading/spread-reveal"
          className="text-[14px] text-[#D9CFAE] border-1 border-[#4E380F] rounded-lg p-1.5"
        >
          ← Back to reading
        </Link>
        <div className="flex flex-col gap-5 xl:flex-row">
          <div className="bg-[#1B1B1B] rounded-2xl p-4 border-1 border-[#4E380F]">
            <h1 className="text-[20px] text-[#FDF4E1]">{card.name}</h1>
            <div className="flex flex-col gap-8 md:flex-row md:gap-5 mt-4">
              <div className="flex flex-col items-center">
                <div className="relative h-[510px] w-[298px]">
                  <Image
                    src={`/cards/${card.img}`}
                    alt={card.name}
                    fill
                    sizes="160px"
                    className="rounded-2xl object-cover"
                  />
                </div>
              </div>
              <div>
                <div className="bg-[#0F0F0F] rounded-2xl p-3 h-fit border-1 border-[#3A321C]">
                  <h3 className="mb-2 text-[16px] text-[#FDF4E1]">Interpretation preview</h3>
                  <p className="text-[14px] leading-6 text-[#E6DCC6]">{aiCard.meaning}</p>
                </div>
                <div className="mt-6 flex flex-col gap-4 px-4">
                  <div>
                    <h3 className="mb-2 text-[16px] text-[#FDF4E1]">Keywords</h3>
                    <ul className="flex flex-wrap gap-2">
                      {card.keywords.map((kw) => (
                        <li
                          key={kw}
                          className="rounded-full border border-[#4E380F] px-3 py-1 text-[12px] text-[#D9CFAE]"
                        >
                          {capitalizeFirstLetter(kw)}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-5 xl:w-[430px] xl:shrink-0">
            <div className="border-1 border-[#3A321C] rounded-2xl bg-[#1B1B1B] p-4">
              <h3 className="mb-2 text-[16px] text-[#FDF4E1]">Full Interpretation</h3>
              <p className="mt-2 text-[14px] leading-6 text-[#E6DCC6]">{aiCard.relation}</p>
            </div>
            <div className="border-1 border-[#3A321C] rounded-2xl bg-[#1B1B1B] p-4">
              <h3 className="mb-2 text-[16px] text-[#FDF4E1]">Guidance</h3>
              <p className="mt-2 text-[14px] leading-6 text-[#E6DCC6]">
                {aiCard.practicalGuidance}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
