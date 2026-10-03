'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { TbAlertTriangle } from 'react-icons/tb';
import { useRouter } from 'next/navigation';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('Unhandled error:', error);
  }, [error]);

  const router = useRouter();

  return (
    <section className="py-16">
      <div className="adaptive-container flex flex-col items-center justify-center">
        <div className="mx-auto flex max-w-md flex-col items-center gap-5 rounded-2xl border border-[#4E380F] bg-[#151313] px-6 py-10 text-center">
          <TbAlertTriangle className="h-10 w-10 text-[#F6C049] opacity-60" />
          <h1 className="text-[18px] leading-6 text-[#FDF4E1] md:text-[20px]">
            Something disrupted the reading
          </h1>
          <p className="text-[14px] leading-5 text-[#D9CFAE]">
            The threads got tangled somewhere along the way. Try again, or return home.
          </p>
          <div className="flex w-full flex-col gap-3 xl:w-auto xl:flex-row">
            <button
              onClick={reset}
              className="rounded-2xl border border-[#F6C049] bg-[#B73208] px-4 py-3.5 text-[14px] text-[#F5ECE0]"
            >
              Try again
            </button>
            <button
              onClick={() => {
                reset();
                router.push('/');
              }}
              className="rounded-2xl border border-[#4E380F] bg-transparent px-4 py-3.5 text-center text-[14px] text-[#D9CFAE]"
            >
              Return home
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
