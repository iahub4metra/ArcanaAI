import Link from 'next/link';

export default function Navigation() {
  return (
    <nav>
      <ul className="flex items-center gap-2.5">
        <li>
          <Link href="/" className="text-[#DCD9D3] text-[14px] leading-4.5">
            How It Works
          </Link>
        </li>
        <li>
          <Link href="/" className="text-[#DCD9D3] text-[14px] leading-4.5">
            About
          </Link>
        </li>
      </ul>
    </nav>
  );
}
