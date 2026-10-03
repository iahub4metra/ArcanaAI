import Link from 'next/link';
import { TbCards } from 'react-icons/tb';

export default function NotFound() {
  return (
    <section className="py-16">
      <div className="adaptive-container flex flex-col items-center justify-center">
        <div className="flex max-w-md flex-col items-center gap-5 rounded-2xl border border-[#4E380F] bg-[#151313] px-6 py-10 text-center">
          <TbCards className="h-10 w-10 text-[#F6C049] opacity-60" />
          <h1 className="text-[18px] leading-6 text-[#FDF4E1] md:text-[20px]">
            The cards have no answer for this page
          </h1>
          <p className="text-[14px] leading-5 text-[#D9CFAE]">
            Whatever you were looking for isn&apos;t written in the stars — at least not here.
          </p>
          <Link
            href="/"
            className="w-full rounded-2xl border border-[#F6C049] bg-[#B73208] px-4 py-3.5 text-center text-[14px] text-[#F5ECE0] xl:w-auto"
          >
            Return home
          </Link>
        </div>
      </div>
    </section>
  );
}
