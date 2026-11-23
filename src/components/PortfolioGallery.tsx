'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { projects } from '../data/portfolioData';
import { Project, ProjectCategory } from '../types/portfolio';
import { ProjectModal } from './ProjectModal';
import { ArrowUpRight, MapPin, Maximize2, Calendar, Sparkles } from 'lucide-react';

interface PortfolioGalleryProps {
  onSelectProjectForInquiry?: (projectName: string) => void;
}

export const PortfolioGallery: React.FC<PortfolioGalleryProps> = ({ onSelectProjectForInquiry }) => {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories: { label: string; value: ProjectCategory }[] = [
    { label: 'All Projects', value: 'all' },
    { label: 'Residential', value: 'residential' },
    { label: 'Commercial & Fit-outs', value: 'commercial' },
    { label: 'Bespoke Interiors', value: 'interior' },
    { label: 'Renovations', value: 'renovation' },
  ];

  const filteredProjects = activeCategory === 'all'
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  const handleInquire = (projectName: string) => {
    if (onSelectProjectForInquiry) {
      onSelectProjectForInquiry(projectName);
    } else {
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <section id="portfolio" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold uppercase tracking-widest mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Curated Portfolio</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white tracking-tight">
            Architectural Precision, <br />
            <span className="text-gradient-amber">Unrivaled Execution.</span>
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base max-w-xl mt-3 font-light">
            Explore our portfolio of bespoke residences, high-spec commercial headquarters, and historically sensitive restorations.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setActiveCategory(cat.value)}
              className={`px-4 py-2 rounded-lg text-xs font-semibold tracking-wider uppercase transition-all duration-200 cursor-pointer ${
                activeCategory === cat.value
                  ? 'bg-amber-500 text-black shadow-lg shadow-amber-500/30'
                  : 'bg-neutral-900/80 text-neutral-400 hover:text-white hover:bg-neutral-800 border border-neutral-800'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            onClick={() => setSelectedProject(project)}
            className="group relative bg-[#13161c] border border-neutral-800/80 rounded-2xl overflow-hidden hover:border-amber-500/50 shadow-xl transition-all duration-300 hover:-translate-y-1.5 cursor-pointer flex flex-col"
          >
            {/* Image Container */}
            <div className="relative h-72 w-full overflow-hidden bg-neutral-950">
              <Image
                src={project.imageUrl}
                alt={project.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#13161c] via-transparent to-transparent opacity-80" />

              {/* Category & Year Tag */}
              <div className="absolute top-4 left-4 flex items-center gap-2">
                <span className="px-2.5 py-1 rounded bg-black/75 backdrop-blur-md text-[11px] font-bold tracking-wider uppercase text-amber-400 border border-amber-500/30">
                  {project.categoryLabel}
                </span>
                {project.featured && (
                  <span className="px-2 py-1 rounded bg-amber-500 text-black text-[10px] font-extrabold uppercase tracking-widest">
                    Featured
                  </span>
                )}
              </div>

              {/* Hover quick inspect icon */}
              <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/60 backdrop-blur-md border border-neutral-700 flex items-center justify-center text-white group-hover:bg-amber-500 group-hover:text-black group-hover:scale-110 transition-all duration-300">
                <ArrowUpRight className="w-4 h-4 stroke-[2.2]" />
              </div>
            </div>

            {/* Card Content */}
            <div className="p-6 flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 text-xs text-neutral-400 mb-2">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-amber-500" />
                    {project.location}
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-amber-500" />
                    {project.year}
                  </span>
                </div>

                <h3 className="text-xl font-serif font-bold text-white group-hover:text-amber-400 transition-colors leading-snug">
                  {project.title}
                </h3>

                <p className="text-xs text-neutral-400 mt-2.5 line-clamp-2 leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Bottom specs & Materials preview */}
              <div className="pt-4 mt-4 border-t border-neutral-800/70 flex items-center justify-between text-xs text-neutral-300">
                <div className="flex items-center gap-1 text-neutral-400">
                  <Maximize2 className="w-3.5 h-3.5 text-amber-500" />
                  <span className="font-medium text-neutral-300">{project.area}</span>
                </div>
                <span className="text-amber-400 font-medium group-hover:underline flex items-center gap-1">
                  View Full Specs & Photos
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal View */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onInquire={handleInquire}
      />
    </section>
  );
};
