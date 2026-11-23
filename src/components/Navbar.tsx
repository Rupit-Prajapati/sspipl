'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Compass, Menu, X, PhoneCall, ArrowUpRight } from 'lucide-react';
import { studioInfo } from '../data/portfolioData';

interface NavbarProps {
  onOpenConsultation?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenConsultation }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Services', href: '#services' },
    { name: 'Process', href: '#process' },
    { name: 'Reviews', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0c0e12]/90 backdrop-blur-md border-b border-neutral-800/80 py-3.5 shadow-2xl shadow-black/40'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-amber-500 to-amber-700 flex items-center justify-center text-black shadow-lg shadow-amber-500/20 group-hover:scale-105 transition-transform duration-200">
              <Compass className="w-6 h-6 stroke-[2.2]" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-serif tracking-widest text-lg font-bold text-white uppercase group-hover:text-amber-400 transition-colors">
                  Vanguard
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
              </div>
              <p className="text-[10px] tracking-[0.2em] uppercase text-neutral-400 font-medium -mt-0.5">
                Architecture & Interiors
              </p>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium tracking-wide text-neutral-300 hover:text-amber-400 transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-amber-400 hover:after:w-full after:transition-all after:duration-300"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop CTA Buttons */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href={`tel:${studioInfo.phone.replace(/[^0-9+]/g, '')}`}
              className="text-xs font-semibold tracking-wider text-neutral-400 hover:text-white flex items-center gap-2 transition-colors py-2 px-3"
            >
              <PhoneCall className="w-3.5 h-3.5 text-amber-500" />
              <span>{studioInfo.phone}</span>
            </a>
            <a
              href="#contact"
              onClick={onOpenConsultation}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-black font-semibold text-xs tracking-wider uppercase px-4 py-2.5 rounded-md shadow-lg shadow-amber-500/20 hover:shadow-amber-500/40 transition-all duration-200 active:scale-95"
            >
              <span>Get a Quote</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <a
              href="#contact"
              className="bg-amber-500 hover:bg-amber-400 text-black font-semibold text-xs px-3 py-1.5 rounded uppercase tracking-wider"
            >
              Quote
            </a>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-neutral-400 hover:text-white focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6 text-amber-400" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-3 pt-4 pb-6 px-4 bg-[#12151b] border border-neutral-800 rounded-xl shadow-2xl animate-in fade-in slide-in-from-top-2 duration-200">
            <nav className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-neutral-200 hover:text-amber-400 py-2 text-base font-medium border-b border-neutral-800/60"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-2 flex flex-col gap-3">
                <a
                  href={`tel:${studioInfo.phone.replace(/[^0-9+]/g, '')}`}
                  className="flex items-center gap-2 text-neutral-400 text-sm py-1"
                >
                  <PhoneCall className="w-4 h-4 text-amber-500" />
                  <span>{studioInfo.phone}</span>
                </a>
                <a
                  href="#contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-full text-center bg-gradient-to-r from-amber-500 to-amber-600 text-black font-semibold py-2.5 rounded-lg text-sm uppercase tracking-wider"
                >
                  Request Consultation
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};
