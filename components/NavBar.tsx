"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="backdrop-blur-md fixed top-0 w-full z-50 \">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-5 md:py-6 lg:py-8 text-gray-400">
        {/* 로고 */}
        <Link href="/" className="flex items-center space-x-2">
          <img src="/assets/logo-lg.png" alt="Logo" className="h-12 w-auto" />
        </Link>

        {/* 햄버거 버튼 (모바일 전용) */}
        <button
          className="md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* 메뉴 (데스크탑용) */}
        <nav className="hidden md:flex space-x-6 text-sm font-medium mt-auto">
          <NavLinks />
        </nav>
      </div>

      {/* 메뉴 (모바일용) */}
      {menuOpen && (
        <nav className="md:hidden backdrop-blur-md shadow-md px-4 pb-4 " >
          <div className="flex flex-col space-y-2 text-sm font-medium">
            <NavLinks />
          </div>
        </nav>
      )}
    </header>
  );
}

function NavLinks() {
  const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/services", label: "Services" },
    { href: "/industries", label: "Industries" },
    // { href: "/careers", label: "Careers" },
    { href: "/contact", label: "Contact" },
  ];
  return (
    <>
      {links.map(({ href, label }) => (
        <Link
          key={href}
          href={href}
          className="hover:text-blue-500 transition-colors duration-200 "
        >
          {label}
        </Link>
      ))}
    </>
  );
}
