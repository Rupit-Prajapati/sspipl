import React from 'react';
import { processSteps } from '../data/portfolioData';
import { Milestone, CheckSquare } from 'lucide-react';

export const ProcessSection: React.FC = () => {
  return (
    <section id="process" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold uppercase tracking-widest mb-3">
          <Milestone className="w-3.5 h-3.5" />
          <span>Execution Methodology</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white tracking-tight">
          How We Bring <br />
          <span className="text-gradient-amber">Complex Blueprints to Life.</span>
        </h2>
        <p className="text-neutral-400 text-sm sm:text-base mt-4 font-light leading-relaxed">
          A disciplined four-phase delivery framework that guarantees timeline certainty, budget integrity, and millimeter-level perfection.
        </p>
      </div>

      {/* Steps Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
        {processSteps.map((step) => (
          <div
            key={step.number}
            className="group relative p-7 rounded-2xl bg-[#13161c] border border-neutral-800 hover:border-amber-500/40 shadow-xl transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              {/* Step Number */}
              <div className="flex items-center justify-between mb-4">
                <span className="text-4xl font-serif font-extrabold text-neutral-700 group-hover:text-amber-500/80 transition-colors">
                  {step.number}
                </span>
                <span className="text-[10px] tracking-widest uppercase font-bold text-amber-500 bg-amber-500/10 px-2 py-1 rounded">
                  Phase {step.number}
                </span>
              </div>

              <h3 className="text-lg font-serif font-bold text-white mb-2 group-hover:text-amber-400 transition-colors">
                {step.title}
              </h3>

              <p className="text-xs text-neutral-400 leading-relaxed">
                {step.description}
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-neutral-800/80">
              <span className="text-[10px] uppercase tracking-wider font-semibold text-neutral-400 block mb-2">
                Phase Deliverables:
              </span>
              <ul className="space-y-1.5 text-xs text-neutral-300">
                {step.deliverables.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-1.5">
                    <CheckSquare className="w-3.5 h-3.5 text-amber-500 shrink-0 mt-0.5" />
                    <span className="text-neutral-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
