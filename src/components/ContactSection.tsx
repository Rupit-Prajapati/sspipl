'use client';

import React, { useState, useEffect } from 'react';
import { studioInfo } from '../data/portfolioData';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle,
  FileText,
  BadgeCheck,
} from 'lucide-react';

interface ContactSectionProps {
  initialProjectInquiry?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ initialProjectInquiry = '' }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    serviceType: 'Bespoke Interior Architecture',
    budgetRange: '$300,000 - $600,000',
    area: '',
    location: '',
    message: initialProjectInquiry ? `Inquiring about project: ${initialProjectInquiry}` : '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [referenceId, setReferenceId] = useState('');

  useEffect(() => {
    if (initialProjectInquiry) {
      setFormData((prev) => ({
        ...prev,
        message: `Inquiring about similar build to: ${initialProjectInquiry}. `,
      }));
    }
  }, [initialProjectInquiry]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate fast API submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setReferenceId(`VB-${Math.floor(100000 + Math.random() * 900000)}`);
    }, 900);
  };

  return (
    <section id="contact" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid lg:grid-cols-12 gap-12 items-start">
        {/* Left Column: Studio Info & Assurance */}
        <div className="lg:col-span-5 space-y-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold uppercase tracking-widest mb-3">
              <FileText className="w-3.5 h-3.5" />
              <span>Project Consultation</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white tracking-tight">
              Let&apos;s Build Your <br />
              <span className="text-gradient-amber">Next Architectural Landmark.</span>
            </h2>
            <p className="text-neutral-400 text-sm mt-3 font-light leading-relaxed">
              Schedule an in-depth preliminary design & construction review. We provide transparent budgeting, site feasibility audits, and construction timelines.
            </p>
          </div>

          {/* Contact Details List */}
          <div className="space-y-4 pt-2">
            <div className="flex items-start gap-3.5 p-4 rounded-xl bg-[#13161c] border border-neutral-800">
              <div className="w-9 h-9 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-500 shrink-0">
                <MapPin className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-xs uppercase tracking-wider font-semibold text-neutral-400">Headquarters</h4>
                <p className="text-sm font-medium text-white mt-0.5">{studioInfo.address}</p>
              </div>
            </div>

            <div className="flex items-start gap-3.5 p-4 rounded-xl bg-[#13161c] border border-neutral-800">
              <div className="w-9 h-9 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-500 shrink-0">
                <Phone className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-xs uppercase tracking-wider font-semibold text-neutral-400">Direct Telephone</h4>
                <a href={`tel:${studioInfo.phone.replace(/[^0-9+]/g, '')}`} className="text-sm font-medium text-white hover:text-amber-400 transition-colors mt-0.5 block">
                  {studioInfo.phone}
                </a>
              </div>
            </div>

            <div className="flex items-start gap-3.5 p-4 rounded-xl bg-[#13161c] border border-neutral-800">
              <div className="w-9 h-9 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-500 shrink-0">
                <Mail className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-xs uppercase tracking-wider font-semibold text-neutral-400">Email Inquiries</h4>
                <a href={`mailto:${studioInfo.email}`} className="text-sm font-medium text-white hover:text-amber-400 transition-colors mt-0.5 block">
                  {studioInfo.email}
                </a>
              </div>
            </div>

            <div className="flex items-start gap-3.5 p-4 rounded-xl bg-[#13161c] border border-neutral-800">
              <div className="w-9 h-9 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-500 shrink-0">
                <Clock className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-xs uppercase tracking-wider font-semibold text-neutral-400">Studio Hours</h4>
                <p className="text-sm font-medium text-white mt-0.5">{studioInfo.workingHours}</p>
              </div>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-amber-500/5 border border-amber-500/20 flex items-center gap-3 text-xs text-amber-300">
            <BadgeCheck className="w-5 h-5 text-amber-400 shrink-0" />
            <span>{studioInfo.license} — Fully insured with $10M umbrella liability coverage.</span>
          </div>
        </div>

        {/* Right Column: Interactive Consultation & Estimate Form */}
        <div className="lg:col-span-7">
          <div className="p-6 sm:p-10 rounded-2xl bg-[#12151b] border border-neutral-800 shadow-2xl">
            {submitted ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-16 h-16 rounded-full bg-amber-500/20 border border-amber-500/40 text-amber-400 flex items-center justify-center mx-auto">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-serif font-bold text-white">
                  Consultation Request Received
                </h3>
                <p className="text-neutral-300 text-sm max-w-md mx-auto leading-relaxed">
                  Thank you, <span className="text-white font-semibold">{formData.name}</span>. A senior partner will review your project parameters and contact you within 24 business hours.
                </p>
                <div className="inline-block px-4 py-2 rounded-lg bg-neutral-900 border border-neutral-800 text-xs text-neutral-400">
                  Reference Consultation Ticket: <strong className="text-amber-400">{referenceId}</strong>
                </div>
                <div className="pt-4">
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: '',
                        email: '',
                        phone: '',
                        serviceType: 'Bespoke Interior Architecture',
                        budgetRange: '$300,000 - $600,000',
                        area: '',
                        location: '',
                        message: '',
                      });
                    }}
                    className="px-6 py-2 rounded-lg border border-neutral-700 text-xs uppercase tracking-wider text-neutral-300 hover:text-white hover:bg-neutral-800 transition-colors"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <h3 className="text-xl font-serif font-bold text-white mb-2">
                  Request an Estimate & Feasibility Study
                </h3>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs uppercase tracking-wider font-semibold text-neutral-400 mb-1.5">
                      Service Requirement *
                    </label>
                    <select
                      name="serviceType"
                      value={formData.serviceType}
                      onChange={handleChange}
                      required
                      className="w-full px-3.5 py-2.5 rounded-lg bg-neutral-900 border border-neutral-700/80 text-white text-sm focus:border-amber-500 focus:outline-none"
                    >
                      <option value="Bespoke Interior Architecture">Bespoke Interior Architecture</option>
                      <option value="General Contracting & Construction">General Contracting & Ground-Up</option>
                      <option value="Commercial & Retail Fit-Out">Commercial & Retail Fit-Out</option>
                      <option value="Historic Brownstone Renovation">Historic Brownstone Renovation</option>
                      <option value="Custom Artisan Millwork">Custom Artisan Millwork</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider font-semibold text-neutral-400 mb-1.5">
                      Target Budget Range
                    </label>
                    <select
                      name="budgetRange"
                      value={formData.budgetRange}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-neutral-900 border border-neutral-700/80 text-white text-sm focus:border-amber-500 focus:outline-none"
                    >
                      <option value="$150,000 - $300,000">$150,000 - $300,000</option>
                      <option value="$300,000 - $600,000">$300,000 - $600,000</option>
                      <option value="$600,000 - $1,200,000">$600,000 - $1,200,000</option>
                      <option value="$1,200,000+">$1,200,000+</option>
                    </select>
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs uppercase tracking-wider font-semibold text-neutral-400 mb-1.5">
                      Approx. Area (Sq. Ft.)
                    </label>
                    <input
                      type="text"
                      name="area"
                      value={formData.area}
                      onChange={handleChange}
                      placeholder="e.g. 4,500 sq ft"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-neutral-900 border border-neutral-700/80 text-white text-sm focus:border-amber-500 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-wider font-semibold text-neutral-400 mb-1.5">
                      Project Location / City *
                    </label>
                    <input
                      type="text"
                      name="location"
                      value={formData.location}
                      onChange={handleChange}
                      required
                      placeholder="e.g. Manhattan, New York"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-neutral-900 border border-neutral-700/80 text-white text-sm focus:border-amber-500 focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-xs uppercase tracking-wider font-semibold text-neutral-400 mb-1.5">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Johnathan Doe"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-neutral-900 border border-neutral-700/80 text-white text-sm focus:border-amber-500 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-wider font-semibold text-neutral-400 mb-1.5">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="jdoe@example.com"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-neutral-900 border border-neutral-700/80 text-white text-sm focus:border-amber-500 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-wider font-semibold text-neutral-400 mb-1.5">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      placeholder="+1 (555) 000-0000"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-neutral-900 border border-neutral-700/80 text-white text-sm focus:border-amber-500 focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-neutral-400 mb-1.5">
                    Project Vision & Specifications
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about the property, desired timeline, architectural preferences, or specific challenges..."
                    className="w-full px-3.5 py-2.5 rounded-lg bg-neutral-900 border border-neutral-700/80 text-white text-sm focus:border-amber-500 focus:outline-none resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-black font-bold text-xs uppercase tracking-widest py-3.5 px-6 rounded-lg shadow-lg shadow-amber-500/25 transition-all duration-200 active:scale-[0.99] disabled:opacity-60 cursor-pointer"
                >
                  {isSubmitting ? (
                    <span>Processing Feasibility Review...</span>
                  ) : (
                    <>
                      <span>Submit Proposal Request</span>
                      <Send className="w-4 h-4 stroke-[2.2]" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
