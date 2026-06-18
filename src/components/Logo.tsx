import Link from 'next/link';
import { GiCrossFlare } from 'react-icons/gi';

export default function Logo() {
  return (
    <Link href="/" className="text-[20px] leading-7 text-[#fdf4e1] flex gap-0.5 items-center">
      <GiCrossFlare className="w-6 h-6" />
      ArcanaAI
    </Link>
  );
}
