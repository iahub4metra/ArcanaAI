'use client';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

export default function Navigation() {
  function scrollIntoView(id: string, pathname: string, router: ReturnType<typeof useRouter>) {
    if (pathname === '/') {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    } else {
      sessionStorage.setItem('scrollTarget', id);
      router.push('/');
    }
  }
  const router = useRouter();
  const pathname = usePathname();

  return (
    <nav>
      <ul className="flex items-center gap-2.5">
        <li>
          <button
            className="bg-transparent border-0 text-[#DCD9D3] text-[14px] leading-4.5 cursor-pointer"
            onClick={() => scrollIntoView('how-it-works', pathname, router)}
          >
            How It Works
          </button>
        </li>
        <li>
          <button
            className="bg-transparent border-0 text-[#DCD9D3] text-[14px] leading-4.5 cursor-pointer"
            onClick={() => scrollIntoView('why-arcanaAi', pathname, router)}
          >
            About
          </button>
        </li>
      </ul>
    </nav>
  );
}
