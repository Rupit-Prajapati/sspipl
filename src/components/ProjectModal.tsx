'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { X, MapPin, Calendar, Maximize2, Clock, Check, Layers, UserCheck } from 'lucide-react';
import { Project } from '../types/portfolio';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  onInquire: (projectName: string) => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose, onInquire }) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  if (!project) return null;

  const currentActiveImage = selectedImage || project.imageUrl;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-5xl max-h-[92vh] overflow-y-auto bg-[#13161c] border border-neutral-800 rounded-2xl shadow-2xl text-neutral-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-black/70 hover:bg-neutral-800 text-neutral-300 hover:text-white border border-neutral-700 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Hero image preview */}
        <div className="relative w-full h-72 sm:h-96 md:h-[440px] bg-neutral-950">
          <Image
            src={currentActiveImage}
            alt={project.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#13161c] via-transparent to-transparent" />
          <div className="absolute bottom-6 left-6 right-6 flex flex-wrap items-end justify-between gap-4">
            <div>
              <span className="inline-block px-3 py-1 rounded bg-amber-500 text-black text-xs font-bold uppercase tracking-wider mb-2">
                {project.categoryLabel}
              </span>
              <h2 className="text-2xl sm:text-4xl font-serif font-bold text-white tracking-tight drop-shadow-md">
                {project.title}
              </h2>
              <div className="flex items-center gap-2 text-neutral-300 text-xs sm:text-sm mt-1">
                <MapPin className="w-4 h-4 text-amber-400" />
                <span>{project.location}</span>
                <span className="text-neutral-500">•</span>
                <Calendar className="w-4 h-4 text-amber-400" />
                <span>Delivered {project.year}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Thumbnails row */}
        {project.galleryImages.length > 1 && (
          <div className="px-6 py-3 border-b border-neutral-800/80 flex items-center gap-3 overflow-x-auto bg-[#0f1116]">
            {project.galleryImages.map((img, i) => (
              <button
                key={i}
                onClick={() => setSelectedImage(img)}
                className={`relative w-20 h-14 rounded-lg overflow-hidden border-2 shrink-0 transition-all ${
                  currentActiveImage === img ? 'border-amber-500 scale-105' : 'border-neutral-800 opacity-60 hover:opacity-100'
                }`}
              >
                <Image src={img} alt={`Thumbnail ${i + 1}`} fill className="object-cover" />
              </button>
            ))}
          </div>
        )}

        {/* Content details */}
        <div className="p-6 sm:p-8 space-y-8">
          {/* Specs grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 rounded-xl bg-neutral-900/60 border border-neutral-800/80">
            <div className="space-y-1">
              <span className="text-[11px] uppercase tracking-wider text-neutral-400 flex items-center gap-1.5">
                <Maximize2 className="w-3.5 h-3.5 text-amber-500" /> Floor Area
              </span>
              <p className="text-sm font-semibold text-white">{project.area}</p>
            </div>
            <div className="space-y-1">
              <span className="text-[11px] uppercase tracking-wider text-neutral-400 flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-amber-500" /> Project Duration
              </span>
              <p className="text-sm font-semibold text-white">{project.duration}</p>
            </div>
            <div className="space-y-1">
              <span className="text-[11px] uppercase tracking-wider text-neutral-400 flex items-center gap-1.5">
                <UserCheck className="w-3.5 h-3.5 text-amber-500" /> Client
              </span>
              <p className="text-sm font-semibold text-white">{project.client}</p>
            </div>
            <div className="space-y-1">
              <span className="text-[11px] uppercase tracking-wider text-neutral-400 flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5 text-amber-500" /> Typology
              </span>
              <p className="text-sm font-semibold text-white">{project.categoryLabel}</p>
            </div>
          </div>

          {/* Description & Engineering Details */}
          <div className="space-y-4">
            <h3 className="text-lg font-serif font-bold text-white">Project Overview</h3>
            <p className="text-neutral-300 leading-relaxed text-sm sm:text-base">
              {project.description}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-5 rounded-xl bg-neutral-900/40 border border-neutral-800/80 space-y-2">
              <h4 className="text-sm font-semibold text-amber-400 uppercase tracking-wider">
                The Architectural Challenge
              </h4>
              <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                {project.challenge}
              </p>
            </div>

            <div className="p-5 rounded-xl bg-neutral-900/40 border border-neutral-800/80 space-y-2">
              <h4 className="text-sm font-semibold text-amber-400 uppercase tracking-wider">
                The Engineered Solution
              </h4>
              <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                {project.solution}
              </p>
            </div>
          </div>

          {/* Materials & Finishes palette */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-400">
              Primary Materials & Finishes Specified
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.materials.map((mat, i) => (
                <span
                  key={i}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-neutral-800/80 border border-neutral-700/70 text-xs font-medium text-neutral-200"
                >
                  <Check className="w-3.5 h-3.5 text-amber-400" />
                  {mat}
                </span>
              ))}
            </div>
          </div>

          {/* Modal bottom actions */}
          <div className="pt-4 border-t border-neutral-800 flex flex-wrap items-center justify-between gap-4">
            <button
              onClick={onClose}
              className="px-5 py-2.5 rounded-lg border border-neutral-700 text-neutral-300 hover:bg-neutral-800 text-xs font-semibold uppercase tracking-wider transition-colors"
            >
              Back to Gallery
            </button>

            <button
              onClick={() => {
                onClose();
                onInquire(project.title);
              }}
              className="px-6 py-2.5 rounded-lg bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-black font-bold text-xs uppercase tracking-wider shadow-lg shadow-amber-500/20 transition-all"
            >
              Inquire About a Similar Build
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
