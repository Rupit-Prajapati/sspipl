'use client';

import React from 'react';
import Image from 'next/image';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { MapPin, ArrowRight } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-[#0D1117] transition-colors duration-200">
      {/* Header */}
      <Header />

      {/* Main minimal container */}
      <main className="flex-1 flex items-center justify-center py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center space-y-8">
          {/* Studio Logo Badge */}
          <div className="inline-block relative">
            <div className="w-28 h-28 mx-auto rounded-3xl overflow-hidden border-2 border-slate-200 dark:border-[#30363D] bg-slate-50 dark:bg-[#161B22] shadow-2xl p-2 flex items-center justify-center">
              <div className="relative w-full h-full rounded-2xl overflow-hidden">
                <Image
                  src="/logo.jpeg"
                  alt="Construction & Interior Studio Logo"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
            <div className="absolute -bottom-2 -right-2 px-2.5 py-1 rounded-full bg-[#0284C7] text-white text-[10px] font-bold uppercase tracking-wider shadow-md">
              Ahmedabad
            </div>
          </div>

          <div className="space-y-3">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0284C7]/10 border border-[#0284C7]/20 text-[#0284C7] text-xs font-semibold tracking-wider uppercase">
              <MapPin className="w-3.5 h-3.5" />
              <span>Ahmedabad, Gujarat, India</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#0D1117] dark:text-white">
              Construction & Interior Portfolio
            </h1>

            <p className="text-sm sm:text-base text-slate-600 dark:text-[#8B949E] max-w-lg mx-auto leading-relaxed">
              Header and footer setup is active with theme switching between light and dark modes. Ready for your project showcase, about section, and contact inquiries.
            </p>
          </div>

          {/* Quick anchor target areas */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <a
              id="project"
              href="#project"
              className="px-5 py-2.5 rounded-xl border border-slate-200 dark:border-[#30363D] bg-slate-100 dark:bg-[#161B22] text-xs font-semibold text-slate-700 dark:text-[#C9D1D9] hover:border-[#0284C7] hover:text-[#0284C7] transition-all flex items-center gap-2"
            >
              <span>Projects</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>

            <a
              id="about"
              href="#about"
              className="px-5 py-2.5 rounded-xl border border-slate-200 dark:border-[#30363D] bg-slate-100 dark:bg-[#161B22] text-xs font-semibold text-slate-700 dark:text-[#C9D1D9] hover:border-[#0284C7] hover:text-[#0284C7] transition-all flex items-center gap-2"
            >
              <span>About</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>

            <a
              id="contact"
              href="#contact"
              className="px-5 py-2.5 rounded-xl bg-[#0284C7] text-white text-xs font-semibold uppercase tracking-wider hover:bg-[#0369A1] transition-all shadow-md shadow-[#0284C7]/20 flex items-center gap-2"
            >
              <span>Contact Us</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
