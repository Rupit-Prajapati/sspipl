import React from 'react';
import Image from 'next/image';
import { testimonials } from '../data/portfolioData';
import { Star, Quote, MessageSquareQuote } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  return (
    <section id="testimonials" className="py-24 bg-[#0a0c10] border-t border-neutral-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold uppercase tracking-widest mb-3">
            <MessageSquareQuote className="w-3.5 h-3.5" />
            <span>Client Endorsements</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white tracking-tight">
            Trusted by Leaders in <br />
            <span className="text-gradient-amber">Real Estate & Architecture.</span>
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base mt-4 font-light leading-relaxed">
            Read what luxury homeowners, corporate clients, and developers say about our construction craftsmanship and transparent delivery.
          </p>
        </div>

        {/* Testimonials Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="p-8 rounded-2xl bg-[#12151b] border border-neutral-800 hover:border-amber-500/40 shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-neutral-700" />
                </div>

                <p className="text-neutral-300 text-sm leading-relaxed italic mb-6">
                  &ldquo;{t.comment}&rdquo;
                </p>
              </div>

              <div className="pt-4 border-t border-neutral-800/80 flex items-center gap-3">
                <div className="relative w-11 h-11 rounded-full overflow-hidden border border-amber-500/40 shrink-0">
                  <Image src={t.avatarUrl} alt={t.name} fill className="object-cover" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white">{t.name}</h4>
                  <p className="text-xs text-neutral-400">
                    {t.role} {t.company && `· ${t.company}`}
                  </p>
                  <p className="text-[11px] text-amber-500 font-medium mt-0.5">
                    {t.project}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
