import Link from 'next/link';
import Logo from '../Logo';
import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa6';

export default function Footer() {
  return (
    <footer className="py-4 md:py-8 border-t border-[#E5E7EB]">
      <div className="adaptive-container">
        <div className="flex justify-between pb-10 flex-col md:flex-row gap-7">
          <div className="flex flex-col gap-2.5 md:max-w-51 xl:max-w-[320px]">
            <Logo />
            <p className="text-[#dcd6c6] ">
              ArcanaAI brings contemplative, privacy-conscious tarot readings to your fingertips —
              blending tradition and technology for personal insight.
            </p>
            <ul className="flex items-center gap-1">
              <li>
                <Link target="_blank" href="https://github.com/iahub4metra">
                  <FaGithub className="w-4 h-4 fill-[#dcd6c6]" />
                </Link>
              </li>
              <li>
                <Link target="_blank" href="https://www.linkedin.com/in/artem-buhai/">
                  <FaLinkedin className="w-4 h-4 fill-[#dcd6c6]" />
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-[#fdf4e1] mb-2.5">Explore</h3>
            <ul className="flex flex-col items-start gap-1.5">
              <li>
                <p className="text-[#dcd6c6]">Ask & Draw</p>
              </li>
              <li>
                <p className="text-[#dcd6c6]">Spread Reveal</p>
              </li>
              <li>
                <p className="text-[#dcd6c6]">Card Detail & Interpretation</p>
              </li>
              <li>
                <p className="text-[#dcd6c6]">Profile & Reading History</p>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-[#fdf4e1] mb-2.5">Legal & Contact</h3>
            <ul className="flex flex-col items-start gap-1.5">
              <li>
                <p className="text-[#dcd6c6]">Terms of Service</p>
              </li>
              <li>
                <p className="text-[#dcd6c6]">Privacy Policy</p>
              </li>
              <li>
                <p className="text-[#dcd6c6]">Cookie Policy</p>
              </li>
              <li>
                <p className="text-[#dcd6c6]">Accessibility</p>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex items-center flex-col-reverse md:flex-row justify-between border-t border-[#1f1910] pt-4">
          <p className="text-[#bfb7a4] text-[14px] leading-5">
            © 2026 ArcanaAI. All rights reserved.
          </p>
          <p className="text-[#bfb7a4] text-[14px] leading-5">
            Built with care • Privacy-respecting insights
          </p>
        </div>
      </div>
    </footer>
  );
}
