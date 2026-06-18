import CardOfTheDay from '@/components/CardOfTheDay/CardOfTheDay';
import Navigation from '@/components/Header/Navigation';
import Link from 'next/link';
import { FaShieldAlt, FaBrain, FaLock, FaLeaf, FaCubes } from 'react-icons/fa';
import { MdGroups2 } from 'react-icons/md';
import { PiRadioButtonLight } from 'react-icons/pi';
import { FaCheckCircle } from 'react-icons/fa';

export default function HomePage() {
  return (
    <section className="py-5">
      <div className="adaptive-container">
        <div className="bg-[#1b1b1b90] rounded-[20px] px-3.5 py-10 md:px-5 flex flex-col xl:flex-row gap-6 md:gap-9 xl:gap-7 items-center xl:justify-between mb-10">
          <div>
            <div>
              <h1 className="text-[#eae1d9] text-[32px] leading-10 md:text-[56px] md:leading-17.5">
                Ask. Draw. Enlighten.
              </h1>
              <p className="text-[#e8e6df] text-[14px] md:text-[16px] leading-5 md:leading-6 max-w-78.75  md:max-w-160">
                ArcanaAI blends centuries-old tarot symbolism with modern AI interpretation. Pose
                your question, draw a spread, and receive layered insights that combine symbolic
                meaning, contextual analysis, and gentle guidance. Readings keep privacy first —
                interpretations compute with source-aware explanations and optional local inference.
              </p>
            </div>
            <div className="flex items-center gap-2.5 mt-9 mb-8">
              <Link
                href="/"
                className="rounded-[15px] text-[#DCD9D3] text-[14px] leading-4.5 bg-transparent border border-[#F6C049] py-3.5 px-4"
              >
                Ask The Cards
              </Link>
              <Navigation />
            </div>
            <ul className="flex items-center gap-4 max-w-82 md:max-w-fit overflow-x-scroll invisible-scrollbar ">
              <li className="flex items-center gap-4 border border-[#4E380F] p-3 w-60.5 bg-[#151517] rounded-[15px] h-31.5">
                <FaShieldAlt className="fill-[#D39F1D] w-7 h-7" />
                <div>
                  <h4 className="text-[#FDF4E1] text-[14px] leading-5 mb-2">Privacy-First</h4>
                  <p className="text-[#FDF4E1] text-[12px] leading-4 w-44">
                    Optional local inference and ephemeral readings. Your questions vanish unless
                    you save them.
                  </p>
                </div>
              </li>
              <li className="flex items-center gap-4 border border-[#4E380F] p-3 w-60.5 bg-[#151517] rounded-[15px] h-31.5">
                <FaBrain className="fill-[#5B2FA6] w-7 h-7" />
                <div>
                  <h4 className="text-[#FDF4E1] text-[14px] leading-5 mb-2 max-w-26.25 h-10">
                    Source-aware Explanations
                  </h4>
                  <p className="text-[#FDF4E1] text-[12px] leading-4 w-44">
                    Every interpretation shows evidence and symbolic lineage for transparency.
                  </p>
                </div>
              </li>
            </ul>
          </div>
          <CardOfTheDay />
        </div>
        <ul className="flex items-center gap-5 md:justify-evenly max-w-[328px] md:max-w-full overflow-x-scroll invisible-scrollbar border-b border-[#2B2416] pb-8">
          <li>
            <div className="flex items-start gap-4 border border-[#4E380F] p-5 bg-[#151517] rounded-[15px] h-[175px] xl:h-[146px] w-[300px] xl:w-[380px]">
              <FaCubes className="h-7 w-7 fill-[#5B2FA6] shrink-0" />
              <div>
                <h4 className="text-[#FDF4E1] text-[18px] leading-7 mb-3">AI Interpretations</h4>
                <p className="text-[#DED7C7] max-w-[235px] md:max-w-[300px] max-h-[100px] md:max-h-[80px]">
                  Contextualized readings combining symbolic ontology, historical associations, and
                  real-time question framing to produce layered interpretations.
                </p>
              </div>
            </div>
          </li>
          <li>
            <div className="flex items-start gap-4 border border-[#4E380F] p-5 bg-[#151517] rounded-[15px] h-[175px] xl:h-[146px] w-[300px] xl:w-[380px]">
              <FaLeaf className="h-7 w-7 fill-[#D39F1D] shrink-0" />
              <div>
                <h4 className="text-[#FDF4E1] text-[18px] leading-7 mb-3">
                  Human-Curated Symbolism
                </h4>
                <p className="text-[#DED7C7] max-w-[235px] md:max-w-[300px] max-h-[100px] md:max-h-[80px]">
                  Symbol libraries curated with practicing readers ensure depth, nuance, and
                  cultural sensitivity in every result.
                </p>
              </div>
            </div>
          </li>
          <li>
            <div className="flex items-start gap-4 border border-[#4E380F] p-5 bg-[#151517] rounded-[15px] h-[175px] xl:h-[146px] w-[300px] xl:w-[380px]">
              <FaLock className="h-7 w-7 fill-[#D39F1D] shrink-0" />
              <div>
                <h4 className="text-[#FDF4E1] text-[18px] leading-7 mb-3">Privacy & Control</h4>
                <p className="text-[#DED7C7] max-w-[235px] md:max-w-[300px] max-h-[100px] md:max-h-[80px]">
                  Ephemeral sessions, optional account storage, and clear export controls keep
                  readings private and portable.
                </p>
              </div>
            </div>
          </li>
        </ul>
        <ul className="flex flex-col gap-5 md:flex-row mt-10 items-center md:justify-center">
          <li>
            <div className="flex items-center gap-2">
              <FaCheckCircle className="w-[28px] h-[28px] fill-[#D39F1D]" />
              <p className="text-[#E6DFCC]">Privacy-first model options</p>
            </div>
          </li>
          <li>
            <div className="flex items-center gap-2">
              <PiRadioButtonLight className="w-[28px] h-[28px] fill-[#5B2FA6]" />
              <p className="text-[#E6DFCC]">Interpretable AI explanations</p>
            </div>
          </li>
          <li>
            <div className="flex items-center gap-2">
              <MdGroups2 className="w-[28px] h-[28px] fill-[#D39F1D]" />
              <p className="text-[#E6DFCC]">Community-reviewed mappings</p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}
