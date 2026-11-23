import React from 'react';
import { stats } from '../data/portfolioData';
import { Building, Award, Clock, Smile } from 'lucide-react';

const icons = [Clock, Building, Award, Smile];

export const StatsBar: React.FC = () => {
  return (
    <section className="relative z-20 -mt-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {stats.map((stat, idx) => {
          const IconComponent = icons[idx % icons.length];
          return (
            <div
              key={stat.label}
              className="group p-5 sm:p-6 rounded-xl bg-[#14171e]/95 border border-neutral-800/90 hover:border-amber-500/40 shadow-xl backdrop-blur-md transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-3xl sm:text-4xl font-serif font-bold tracking-tight text-white group-hover:text-amber-400 transition-colors">
                  {stat.value}
                </span>
                <div className="w-9 h-9 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-500 group-hover:bg-amber-500 group-hover:text-black transition-all">
                  <IconComponent className="w-4 h-4" />
                </div>
              </div>
              <h4 className="text-sm font-semibold text-neutral-200 tracking-wide">
                {stat.label}
              </h4>
              <p className="text-xs text-neutral-400 mt-1 leading-snug line-clamp-2">
                {stat.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};
