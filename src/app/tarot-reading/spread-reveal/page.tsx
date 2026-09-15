'use client';

import ReadingSidebar from '@/components/tarotReveal/ReadingSidebar';
import SpreadReveal from '@/components/tarotReveal/SpreadReveal';
import { capitalizeFirstLetter } from '@/services/capitalizeFirstLetter';
import { formatDate } from '@/services/formatDate';
import { ReadingSession } from '@/types/types';

export default function SpreadRevealPage() {
  const result: ReadingSession = JSON.parse(localStorage.getItem('reading-session')!);
  return (
    <section className="py-5">
      <div className="adaptive-container flex flex-col gap-4 xl:flex-row">
        <div className="flex flex-col gap-4 w-full">
          {/* CARD POOL */}
          <div className="bg-[#151313] rounded-2xl border-[#4E380F] py-5 md:py-8 w-full">
            <h3 className="text-[#FDF4E1] text-[16px] leading-5 md:text-[18px] md:leading-6 text-center mb-4 md:mb-8">
              Spread reveal
            </h3>
            <p className="text-[16px] leading-5 mb-5 text-[#E6DCC6] flex items-center gap-1 justify-center">
              <span className="text-amber-600">•</span>
              {capitalizeFirstLetter(result.answer.narrativeThread)}
              <span className="text-amber-600">•</span>
            </p>
            <SpreadReveal cards={result.cards} />
          </div>
          <div className="w-full rounded-2xl border border-[#4E380F] bg-[#151313] p-5 md:p-8">
            <h3 className="mb-3 text-[16px] leading-5 text-[#FDF4E1]">Your Reading</h3>
            <p className="text-[14px] leading-6 text-[#E6DCC6]">
              {result.answer.overallInterpretation}
            </p>
          </div>
        </div>

        {/* SIDEBAR */}
        <ReadingSidebar>
          {/* Guidance */}
          <div className="flex flex-col items-center">
            <h3 className="text-[16px] leading-5 text-[#FDF4E1] ml-2.5 mb-3">Guidance</h3>
            <ul className="flex flex-col gap-3 items-center w-48">
              {result.answer.guidance.map((step, index) => (
                <li key={index}>
                  <h4 className="border border-[#4E380F] p-3.5 rounded-2xl text-[14px] leading-4 text-[#FDF4E1] bg-[#151313]">
                    {`${index + 1}. ${step}`}
                  </h4>
                </li>
              ))}
            </ul>
          </div>
          {/* READING INFO */}
          <div className="my-4">
            <p className="text-[12px] text-[#D9CFAE] leading-4 my-2.5">Reading info</p>
            <p className="text-[10px] text-[#F8F3F3] leading-3.5">
              Date: {formatDate(result.createdAt)}
            </p>
          </div>
        </ReadingSidebar>
      </div>
    </section>
  );
}
