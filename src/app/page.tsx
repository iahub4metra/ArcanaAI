'use client';
import CardOfTheDay from '@/components/CardOfTheDay/CardOfTheDay';
import Link from 'next/link';
import { useEffect } from 'react';

export default function HomePage() {
  useEffect(() => {
    const target = sessionStorage.getItem('scrollTarget');
    if (!target) return;
    sessionStorage.removeItem('scrollTarget');
    requestAnimationFrame(() => {
      document.getElementById(target)?.scrollIntoView({ behavior: 'smooth' });
    });
  });

  return (
    <section className="py-5">
      <div className="adaptive-container">
        <div className="bg-[#1b1b1b90] rounded-[20px] px-3.5 py-10 md:px-5 flex flex-col xl:flex-row gap-6 md:gap-9 xl:gap-7 items-center xl:justify-between mb-10">
          <div>
            <div className="mb-8">
              <div className="mb-3 md:mb-5">
                <h1 className="text-[#eae1d9] text-[32px] leading-10 md:text-[56px] md:leading-17.5 mb-3 md:mb-5">
                  Ask. Draw. Reflect.
                </h1>
                <p className="text-[#e8e6df] text-[14px] md:text-[16px] leading-5 md:leading-6 max-w-78.75  md:max-w-160">
                  Bring a question, draw a spread, and read what the cards have to say — with
                  plain-language interpretation alongside the traditional symbolism, not instead of
                  it.
                </p>
              </div>
              <Link
                href="/tarot-reading"
                className="rounded-[15px] text-[#DCD9D3] text-[14px] text-center leading-4.5 bg-transparent border border-[#F6C049] py-4 px-6 block md:inline-block"
              >
                Ask The Cards
              </Link>
            </div>
            <div className="flex flex-col xl:flex-row xl:gap-6">
              <CardOfTheDay />
              <div className="mt-9 scroll-mt-24" id="how-it-works">
                <h3 className="text-[#FDF4E1] text-[18px] leading-7 mb-3 xl:text-center">
                  How it works
                </h3>
                <ul className="flex flex-col gap-3.5 md:flex-row md:justify-center xl:flex-col">
                  <li>
                    <div className="p-4 rounded-xl border flex items-center gap-3 border-[#4E380F] bg-[#151517]">
                      <div className="rounded-full flex justify-center items-center size-[36px] border border-[#4E380F] text-[#FDF4E1] text-[18px] leading-5">
                        1
                      </div>
                      <div>
                        <h4 className="text-[#FDF4E1] text-[16px] leading-5">Ask</h4>
                        <p className="text-[#FDF4E1] text-[14px] leading-[18px]">
                          Pose your question
                        </p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="p-4 rounded-xl border flex items-center gap-3 border-[#4E380F] bg-[#151517]">
                      <div className="rounded-full flex justify-center items-center size-[36px] border border-[#4E380F] text-[#FDF4E1] text-[18px] leading-5">
                        2
                      </div>
                      <div>
                        <h4 className="text-[#FDF4E1] text-[16px] leading-5">Draw</h4>
                        <p className="text-[#FDF4E1] text-[14px] leading-[18px]">
                          Draw a spread of cards
                        </p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="p-4 rounded-xl border flex items-center gap-3 border-[#4E380F] bg-[#151517]">
                      <div className="rounded-full flex justify-center items-center size-[36px] border border-[#4E380F] text-[#FDF4E1] text-[18px] leading-5">
                        3
                      </div>
                      <div>
                        <h4 className="text-[#FDF4E1] text-[16px] leading-5">Reflect</h4>
                        <p className="text-[#FDF4E1] text-[14px] leading-[18px]">
                          Get layered interpretation
                        </p>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mb-7 scroll-mt-24" id="why-arcanaAi">
          <h3 className="text-[#FDF4E1] text-[18px] leading-7 mb-3 xl:text-center">Why ArcanaAI</h3>
          <ul className="flex flex-col gap-4 xl:flex-row xl:justify-center">
            <li className="p-4 rounded-xl border flex flex-col gap-3 border-[#4E380F] bg-[#151517] flex-1 ">
              <h4 className="text-[#FDF4E1] text-[16px] leading-5">Layered Interpretation</h4>
              <p className="text-[#FDF4E1] text-[14px] leading-[18px]">
                Each card is explained on its own, then woven into one reading that connects to your
                actual question — not a generic card-meaning lookup.
              </p>
            </li>
            <li className="p-4 rounded-xl border flex flex-col gap-3 border-[#4E380F] bg-[#151517] flex-1">
              <h4 className="text-[#FDF4E1] text-[16px] leading-5">Private by Default</h4>
              <p className="text-[#FDF4E1] text-[14px] leading-[18px]">
                Your reading stays in your session unless you choose to save it. No account required
                to ask a question.
              </p>
            </li>
          </ul>
        </div>
        <ul className="flex flex-col gap-5 md:flex-row mt-10 items-center md:justify-center">
          <li>
            <div className="flex items-center gap-2">
              <p className="text-[#E6DFCC]">Privacy-first model options</p>
            </div>
          </li>
          <li>
            <div className="flex items-center gap-2">
              <p className="text-[#E6DFCC]">Interpretable AI explanations</p>
            </div>
          </li>
          <li>
            <div className="flex items-center gap-2">
              <p className="text-[#E6DFCC]">Community-reviewed mappings</p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}
