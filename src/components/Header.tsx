'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Sun, Moon, Menu, X, ArrowUpRight, MapPin } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export const Header: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Projects', href: '#project' },
    { name: 'About', href: '#about' },
    { name: 'Contact Us', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-50 transition-colors duration-200 bg-white/95 dark:bg-[#0D1117]/95 backdrop-blur-md border-b border-slate-200 dark:border-[#30363D] shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo & Studio Identity */}
          <Link href="/" className="flex items-center gap-3.5 group">
            <div className="relative w-12 h-12 rounded-xl overflow-hidden border border-slate-200 dark:border-[#30363D] bg-slate-100 dark:bg-[#161B22] shadow-sm group-hover:border-[#0284C7] transition-all duration-200">
              <Image
                src="/logo.jpeg"
                alt="Construction & Interior Studio Logo"
                fill
                priority
                className="object-cover"
              />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-lg tracking-tight text-[#0D1117] dark:text-white group-hover:text-[#0284C7] dark:group-hover:text-[#0284C7] transition-colors">
                  Shree Shyam Projects
                </span>
                <span className="w-2 h-2 rounded-full bg-[#0284C7]"></span>
              </div>
              <p className="text-[11px] font-medium tracking-wider uppercase text-slate-500 dark:text-[#8B949E] flex items-center gap-1">
                <span>Construction & Interiors</span>
              </p>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-semibold tracking-wide text-slate-700 dark:text-[#C9D1D9] hover:text-[#0284C7] dark:hover:text-[#0284C7] transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Action Controls: Theme Switcher & Quote CTA */}
          <div className="hidden sm:flex items-center gap-4">
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              aria-label="Toggle Theme Mode"
              className="p-2.5 rounded-xl border border-slate-200 dark:border-[#30363D] bg-slate-100 dark:bg-[#161B22] text-slate-700 dark:text-[#C9D1D9] hover:text-[#0284C7] dark:hover:text-[#0284C7] hover:border-[#0284C7] transition-all cursor-pointer shadow-sm"
              title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            >
              {theme === 'dark' ? (
                <Sun className="w-5 h-5 text-amber-400 stroke-[2.2]" />
              ) : (
                <Moon className="w-5 h-5 text-[#0284C7] stroke-[2.2]" />
              )}
            </button>

            {/* Direct Contact Button */}
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-[#0284C7] hover:bg-[#0369A1] text-white font-semibold text-xs uppercase tracking-wider px-4 py-2.5 rounded-lg shadow-md shadow-[#0284C7]/20 hover:shadow-[#0284C7]/40 transition-all duration-200 active:scale-95"
            >
              <span>Get in Touch</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Menu & Theme Toggle */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={toggleTheme}
              aria-label="Toggle Theme Mode"
              className="p-2 rounded-lg border border-slate-200 dark:border-[#30363D] bg-slate-100 dark:bg-[#161B22] text-slate-700 dark:text-[#C9D1D9]"
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4 text-amber-400" />
              ) : (
                <Moon className="w-4 h-4 text-[#0284C7]" />
              )}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation"
              className="p-2 text-slate-700 dark:text-[#C9D1D9] hover:text-[#0284C7]"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-slate-200 dark:border-[#30363D] animate-in fade-in slide-in-from-top-2 duration-150">
            <nav className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-base font-semibold text-slate-800 dark:text-[#C9D1D9] hover:text-[#0284C7] py-2"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="mt-2 w-full text-center bg-[#0284C7] hover:bg-[#0369A1] text-white font-semibold py-2.5 rounded-lg text-xs uppercase tracking-wider"
              >
                Contact Us
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};
