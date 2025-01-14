// components/Navbar.jsx
"use client";
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/services', label: 'Our Services' },
    { href: '/skills', label: 'Our Skills' },
    { href: '/realisations', label: 'Realisations' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-white shadow-lg' : 'bg-gradient-to-r from-yellow-400 to-pink-500'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link 
              href="/" 
              className={`text-2xl font-bold ${
                scrolled ? 'bg-gradient-to-r from-yellow-400 to-pink-500 text-transparent bg-clip-text' : 'text-white'
              }`}
            >
              J-TECH
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`${
                  scrolled 
                    ? 'text-gray-600 hover:text-gray-900' 
                    : 'text-white hover:text-gray-200'
                } px-3 py-2 text-sm font-medium transition-colors`}
              >
                {link.label}
              </Link>
            ))}
            <button className="bg-indigo-600 text-white px-6 py-2 font-medium hover:bg-indigo-700 transition-colors">
            <Link href={"/contact"}>Contact Us </Link>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`${
                scrolled ? 'text-gray-600' : 'text-white'
              } p-2 hover:bg-opacity-20`}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-600 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <button className="w-full mt-4 bg-indigo-600 text-white px-6 py-2 font-medium hover:bg-indigo-700 transition-colors">
            <Link href={"/contact"}>Contact Us </Link>
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;