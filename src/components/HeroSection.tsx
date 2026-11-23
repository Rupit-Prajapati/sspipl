'use client';

import React from 'react';
import Image from 'next/image';
import { ArrowRight, ShieldCheck, Award, Ruler, CheckCircle2 } from 'lucide-react';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 overflow-hidden">
      {/* Background Image with Architectural Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=85"
          alt="Luxury Architecture and Modern Interior Design"
          fill
          priority
          className="object-cover object-center scale-105 animate-pulse duration-[8000ms]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0c0e12] via-[#0c0e12]/85 to-[#0c0e12]/60" />
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-transparent to-[#0c0e12]/90" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Main Hero Copy */}
          <div className="lg:col-span-8 space-y-6">
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold uppercase tracking-widest backdrop-blur-md">
              <Award className="w-3.5 h-3.5" />
              <span>Premier Architectural Construction & Interiors</span>
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif font-bold text-white tracking-tight leading-[1.08]">
              Where Vision <br className="hidden sm:inline" />
              Becomes <span className="text-gradient-amber">Living Architecture.</span>
            </h1>

            <p className="text-lg sm:text-xl text-neutral-300 max-w-2xl font-light leading-relaxed">
              We engineer luxury residential residences, commercial headquarters, and bespoke interior environments—fusing uncompromising structural craftsmanship with museum-grade finishes.
            </p>

            {/* CTA Group */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#portfolio"
                className="inline-flex items-center gap-2.5 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-black font-bold text-sm tracking-wide px-7 py-4 rounded-lg shadow-xl shadow-amber-500/25 hover:shadow-amber-500/40 transition-all duration-200 transform hover:-translate-y-0.5"
              >
                <span>Explore Featured Works</span>
                <ArrowRight className="w-4 h-4 stroke-[2.5]" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-[#171b22]/80 hover:bg-[#1f242e] border border-neutral-700/80 hover:border-amber-500/50 text-white font-medium text-sm tracking-wide px-6 py-4 rounded-lg backdrop-blur-md transition-all duration-200"
              >
                <span>Request Project Proposal</span>
              </a>
            </div>

            {/* Quick trust badges */}
            <div className="pt-8 border-t border-neutral-800/80 grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs text-neutral-400 font-medium">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0" />
                <span>Turnkey GC & Architecture</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-amber-500 shrink-0" />
                <span>Licensed, Bonded & Insured</span>
              </div>
              <div className="flex items-center gap-2 col-span-2 sm:col-span-1">
                <Ruler className="w-4 h-4 text-amber-500 shrink-0" />
                <span>Millimeter Accuracy</span>
              </div>
            </div>
          </div>

          {/* Quick Spotlight Card */}
          <div className="lg:col-span-4 hidden lg:block">
            <div className="relative p-6 rounded-2xl bg-neutral-900/70 border border-neutral-800 backdrop-blur-xl shadow-2xl space-y-4">
              <div className="relative h-52 rounded-xl overflow-hidden border border-neutral-700/50">
                <Image
                  src="https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=800&q=80"
                  alt="Recent Completed Construction"
                  fill
                  className="object-cover"
                />
                <div className="absolute top-3 left-3 bg-black/70 backdrop-blur-md px-2.5 py-1 rounded text-[11px] font-semibold text-amber-400 border border-amber-500/30">
                  Latest Handover
                </div>
              </div>
              <div>
                <span className="text-[11px] font-semibold tracking-wider uppercase text-amber-400">
                  Tribeca, New York
                </span>
                <h3 className="text-base font-serif font-bold text-white mt-0.5">
                  The Lumina Glasshouse Penthouse
                </h3>
                <p className="text-xs text-neutral-400 mt-1 leading-relaxed">
                  5,800 sq. ft. dual-level renovation featuring structural glass curtain walls and custom black walnut joinery.
                </p>
              </div>
              <div className="flex items-center justify-between text-xs pt-3 border-t border-neutral-800 text-neutral-400">
                <span>Duration: <strong>11 Months</strong></span>
                <span className="text-amber-400 font-semibold">Completed 2025</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
