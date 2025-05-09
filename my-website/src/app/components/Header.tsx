'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home } from 'lucide-react';

export default function Header() {
  const pathname = usePathname();

  const links = [
    { name: 'About', href: '/about' },
    { name: 'Plugins', href: '/plugins' },
    { name: 'Experiments', href: '/experiments' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav className="flex flex-col md:flex-row justify-between items-center p-6 border-b">
      {/* Left: Home icon */}
      <div className="flex-1 pb-4 md:pb-0">
        <Link href="/" className="nav-style">
          <Home className="w-6 h-6" />
        </Link>
      </div>

      {/* Center: Navigation links */}
      <div className="flex-1 flex justify-center space-x-6">
        {links.map(({ name, href }) => (
          <Link
            key={name}
            href={href}
            className={`nav-style ${
              pathname === href ? 'font-semibold underline' : ''
            }`}
          >
            {name}
          </Link>
        ))}
      </div>

      {/* Right: Empty or for future */}
      <div className="flex-1"></div>
    </nav>
  );
}
