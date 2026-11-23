'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  MapPin,
  Mail,
  Phone,
  ArrowUp,
  ExternalLink,
} from 'lucide-react';

const InstagramIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const LinkedinIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
  </svg>
);

const GoogleIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z" />
  </svg>
);

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    {
      name: 'Instagram',
      href: 'https://instagram.com',
      icon: InstagramIcon,
      label: '@studioforma.ahmedabad',
    },
    {
      name: 'LinkedIn',
      href: 'https://linkedin.com',
      icon: LinkedinIcon,
      label: 'Shree Shyam Projects Interiors',
    },
    {
      name: 'Google',
      href: 'https://maps.google.com/?q=Ahmedabad+Gujarat+India',
      icon: GoogleIcon,
      label: 'Find us on Google',
    },
  ];

  return (
    <footer className="mt-auto bg-slate-100 dark:bg-[#0D1117] border-t border-slate-200 dark:border-[#30363D] transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 items-start">
          {/* Col 1: Studio Logo & Brief */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative w-11 h-11 rounded-xl overflow-hidden border border-slate-200 dark:border-[#30363D] bg-white dark:bg-[#161B22] shadow-sm group-hover:border-[#0284C7] transition-all">
                <Image
                  src="/logo.jpeg"
                  alt="Studio Logo"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <span className="font-bold text-base text-[#0D1117] dark:text-white group-hover:text-[#0284C7] transition-colors">
                  Shree Shyam Projects
                </span>
                <p className="text-[11px] uppercase tracking-wider text-slate-500 dark:text-[#8B949E]">
                  Construction & Interiors
                </p>
              </div>
            </Link>

            <p className="text-xs text-slate-600 dark:text-[#8B949E] leading-relaxed max-w-sm">
              Creating thoughtful architectural spaces, luxury residential interiors, and turnkey commercial solutions tailored to modern living.
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white dark:bg-[#161B22] border border-slate-200 dark:border-[#30363D] text-xs font-medium text-slate-700 dark:text-[#C9D1D9]">
              <MapPin className="w-4 h-4 text-[#0284C7] shrink-0" />
              <span>Location: <strong>Ahmedabad, Gujarat</strong></span>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#0D1117] dark:text-white">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a
                  href="#project"
                  className="text-slate-600 dark:text-[#8B949E] hover:text-[#0284C7] dark:hover:text-[#0284C7] transition-colors"
                >
                  Project Portfolio
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-slate-600 dark:text-[#8B949E] hover:text-[#0284C7] dark:hover:text-[#0284C7] transition-colors"
                >
                  About Studio
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-slate-600 dark:text-[#8B949E] hover:text-[#0284C7] dark:hover:text-[#0284C7] transition-colors"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Social & Online Links (Insta, LinkedIn, Google) */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#0D1117] dark:text-white">
              Connect With Us
            </h4>
            <ul className="space-y-2.5 text-xs">
              {socialLinks.map((item) => {
                const IconComponent = item.icon;
                return (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-slate-600 dark:text-[#8B949E] hover:text-[#0284C7] dark:hover:text-[#0284C7] transition-colors group"
                    >
                      <div className="w-7 h-7 rounded-lg bg-white dark:bg-[#161B22] border border-slate-200 dark:border-[#30363D] flex items-center justify-center text-slate-700 dark:text-[#C9D1D9] group-hover:border-[#0284C7] group-hover:text-[#0284C7] transition-all">
                        <IconComponent className="w-3.5 h-3.5" />
                      </div>
                      <span>{item.name}</span>
                      <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Col 4: Ahmedabad Office & Direct Inquiries */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#0D1117] dark:text-white">
              Ahmedabad Studio
            </h4>
            <div className="space-y-2 text-xs text-slate-600 dark:text-[#8B949E]">
              <p className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#0284C7] shrink-0 mt-0.5" />
                <span>SG Highway / Sindhu Bhavan Rd, Ahmedabad, Gujarat, India</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#0284C7] shrink-0" />
                <a href="tel:+919876543210" className="hover:text-[#0284C7] transition-colors">
                  +91 98765 43210
                </a>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#0284C7] shrink-0" />
                <a href="mailto:contact@studioforma.in" className="hover:text-[#0284C7] transition-colors">
                  contact@studioforma.in
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar with Copyright & Back to Top */}
        <div className="mt-12 pt-8 border-t border-slate-200 dark:border-[#30363D] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 dark:text-[#8B949E]">
          <p>
            &copy; {new Date().getFullYear()} Shree Shyam Projects Construction & Interior. Ahmedabad, India.
          </p>

          <button
            onClick={scrollToTop}
            aria-label="Scroll back to top"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-[#30363D] bg-white dark:bg-[#161B22] text-slate-700 dark:text-[#C9D1D9] hover:text-[#0284C7] dark:hover:text-[#0284C7] hover:border-[#0284C7] transition-all cursor-pointer"
          >
            <span>Top</span>
            <ArrowUp className="w-3.5 h-3.5 text-[#0284C7]" />
          </button>
        </div>
      </div>
    </footer>
  );
};
