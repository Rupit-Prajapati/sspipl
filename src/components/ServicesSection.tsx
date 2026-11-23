import React from 'react';
import { services } from '../data/portfolioData';
import {
  HardHat,
  LayoutGrid,
  Hammer,
  Building2,
  Sparkles,
  ClipboardCheck,
  CheckCircle,
  Wrench,
} from 'lucide-react';

const iconMap: Record<string, React.ElementType> = {
  HardHat,
  LayoutGrid,
  Hammer,
  Building2,
  Sparkles,
  ClipboardCheck,
};

export const ServicesSection: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-[#0a0c10] border-y border-neutral-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold uppercase tracking-widest mb-3">
            <Wrench className="w-3.5 h-3.5" />
            <span>Comprehensive Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white tracking-tight">
            Comprehensive Construction & <br />
            <span className="text-gradient-amber">Interior Architecture Services.</span>
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base mt-4 font-light leading-relaxed">
            From structural engineering and foundation framing to bespoke millwork and lighting design, we act as your unified design-build partner.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => {
            const Icon = iconMap[service.iconName] || HardHat;
            return (
              <div
                key={service.id}
                className="group p-8 rounded-2xl bg-[#12151b] border border-neutral-800/90 hover:border-amber-500/50 shadow-xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-500 group-hover:bg-amber-500 group-hover:text-black transition-all duration-300">
                      <Icon className="w-6 h-6" />
                    </div>
                    {service.badge && (
                      <span className="px-2.5 py-1 rounded bg-neutral-800 border border-neutral-700 text-amber-400 text-[10px] font-bold uppercase tracking-wider">
                        {service.badge}
                      </span>
                    )}
                  </div>

                  <h3 className="text-xl font-serif font-bold text-white group-hover:text-amber-400 transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-xs text-amber-500/90 font-medium mt-1 mb-3">
                    {service.tagline}
                  </p>

                  <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-neutral-800/80 space-y-2">
                  <h4 className="text-[11px] font-bold uppercase tracking-wider text-neutral-400 mb-2">
                    Scope Highlights
                  </h4>
                  {service.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-neutral-300">
                      <CheckCircle className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
