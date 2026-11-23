import { Project, Service, Testimonial, StatItem, ProcessStep } from '../types/portfolio';

export const studioInfo = {
  name: 'Vanguard Architecture & Interiors',
  shortName: 'Vanguard Build',
  tagline: 'Architectural Construction & Bespoke Interior Design',
  founded: 2012,
  address: '450 Design District Blvd, Suite 800, New York, NY 10018',
  phone: '+1 (555) 782-9421',
  email: 'inquiries@vanguardbuild.com',
  workingHours: 'Mon - Fri: 8:00 AM - 6:00 PM EST',
  license: 'NYC GC Lic. #8923410 · AIA Member',
};

export const stats: StatItem[] = [
  {
    value: '14+',
    label: 'Years of Excellence',
    description: 'Transforming blueprints into enduring architectural masterpieces',
  },
  {
    value: '190+',
    label: 'Completed Projects',
    description: 'Spanning luxury residences, corporate offices, and hospitality',
  },
  {
    value: '650k',
    label: 'Sq. Ft. Built',
    description: 'Delivered with uncompromising structural precision and finishes',
  },
  {
    value: '99.4%',
    label: 'Client Satisfaction',
    description: 'On-time delivery and transparent budget management',
  },
];

export const projects: Project[] = [
  {
    id: 'lumina-penthouse',
    title: 'The Lumina Glasshouse Penthouse',
    category: 'residential',
    categoryLabel: 'Luxury Residential',
    location: 'Tribeca, New York',
    year: '2025',
    area: '5,800 sq. ft.',
    duration: '11 months',
    client: 'Private Tech Founder',
    description:
      'A two-story bespoke penthouse renovation integrating floor-to-ceiling curtain walls, custom walnut millwork, and seamless indoor-outdoor terrace living.',
    challenge:
      'Lifting 14-foot structural double-glazed panels over a 40-story historic Manhattan facade while reinforcing subflooring for a custom cantilevered staircase.',
    solution:
      'Engineered a lightweight carbon-reinforced steel stringer system and coordinated night crane lifts with the city transport commission, finishing two weeks ahead of schedule.',
    materials: ['Calacatta Marble', 'American Black Walnut', 'Acoustic Brushed Brass', 'Fluted Glass'],
    imageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80',
    ],
    featured: true,
  },
  {
    id: 'aethel-executive-headquarters',
    title: 'Aethel Partners HQ & Financial Suite',
    category: 'commercial',
    categoryLabel: 'Commercial Fit-out',
    location: 'Financial District, Boston',
    year: '2024',
    area: '24,000 sq. ft.',
    duration: '14 months',
    client: 'Aethel Global Capital',
    description:
      'Turnkey commercial architectural design and construction featuring acoustic executive boardrooms, circadian LED illumination, and custom acoustic slat paneling.',
    challenge:
      'Strict acoustic isolation ratings (STC 55+) across high-density boardrooms adjacent to active mechanical air distribution shafts.',
    solution:
      'Installed isolated floating slab floors, dual-gasket architectural acoustic doors, and decoupled wall dampening systems with zero structural vibration leakage.',
    materials: ['Charcoal Anodized Aluminum', 'Smoked European Oak', 'Micro-perforated Acoustic Panels', 'Terrazzo Flooring'],
    imageUrl: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1200&q=80',
    ],
    featured: true,
  },
  {
    id: 'serenity-minimalist-villa',
    title: 'Serenity Monolithic Coastal Villa',
    category: 'residential',
    categoryLabel: 'Ground-Up Construction',
    location: 'Montauk, New York',
    year: '2024',
    area: '7,200 sq. ft.',
    duration: '18 months',
    client: 'Private Collector',
    description:
      'A ground-up contemporary residential project combining board-formed architectural concrete, thermal cedar cladding, and panoramic ocean vistas.',
    challenge:
      'Aggressive coastal salt air exposure and high wind loads requiring specialized non-corrosive anchors and geothermal envelope optimization.',
    solution:
      'Specified 316-grade marine stainless fasteners, triple-seal thermal envelope breaks, and geothermal deep-well radiant heating and cooling loops.',
    materials: ['Board-Formed White Concrete', 'Shou Sugi Ban Charred Cedar', 'Rift-Sawn White Oak', 'Limestone Slabs'],
    imageUrl: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80',
    ],
    featured: true,
  },
  {
    id: 'atelier-botanica-bistro',
    title: 'Atelier Botanica Dining & Lounge',
    category: 'interior',
    categoryLabel: 'Hospitality Interior',
    location: 'SoHo, New York',
    year: '2024',
    area: '3,800 sq. ft.',
    duration: '6 months',
    client: 'Maison Culinary Group',
    description:
      'A sensory dining space blending exposed century-old brickwork, custom curved banquette joinery, and an inverted cascading biophilic ceiling installation.',
    challenge:
      'Preserving landmark preservation status while implementing commercial-grade HVAC, grease exhaust ducts, and modern fire safety risers.',
    solution:
      'Concealed mechanical systems within custom bronze coffered ceiling bulkheads that harmonize with the historic iron columns.',
    materials: ['Antiqued Hand-Forged Brass', 'Italian Sage Bouclé', 'Honed Travertine', 'Reclaimed Pine Beams'],
    imageUrl: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80',
    ],
    featured: false,
  },
  {
    id: 'heritage-brownstone-renovation',
    title: 'Historic Cobble Hill Brownstone Revival',
    category: 'renovation',
    categoryLabel: 'Architectural Renovation',
    location: 'Brooklyn, New York',
    year: '2023',
    area: '4,600 sq. ft.',
    duration: '15 months',
    client: 'The Sterling Family',
    description:
      'Complete structural and interior modernization of an 1890s limestone townhouse with preserved ornate plaster mouldings and a subterranean wine sanctuary.',
    challenge:
      'Severely sagging timber joists, dry rot across bearing walls, and outdated knob-and-tube electrical lines requiring delicate structural underpinning.',
    solution:
      'Micropile foundation underpinning, sistering structural steel flitch plates to existing timber, and hand-restoring 130-year-old plaster ceiling medallions.',
    materials: ['Hand-Carved Plaster Moulding', 'Nero Marquina Marble', 'Chevron White Oak Parquet', 'Raw Steel Accents'],
    imageUrl: 'https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=1200&q=80',
    ],
    featured: false,
  },
  {
    id: 'kanso-minimal-residence',
    title: 'The Kanso Minimalist Japanese Residence',
    category: 'interior',
    categoryLabel: 'Bespoke Interior',
    location: 'Greenwich, Connecticut',
    year: '2025',
    area: '4,100 sq. ft.',
    duration: '9 months',
    client: 'Private Executive',
    description:
      'An interior architecture project rooted in Japandi aesthetics, paper-screen shoji pocket doors, concealed storage lines, and microcement spa bathrooms.',
    challenge:
      'Eliminating all visible moldings, baseboards, and HVAC grilles to achieve an unbroken plane of architectural quietude.',
    solution:
      'Engineered flush shadow-line reveals, magnetic invisible access panels, and hidden linear slot diffusers integrated into the joinery millwork.',
    materials: ['Hinoki Cypress Wood', 'Artisan Microcement', 'Woven Washi Paper', 'Basalt Stone Tiles'],
    imageUrl: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=80',
    ],
    featured: true,
  },
];

export const services: Service[] = [
  {
    id: 'general-contracting',
    title: 'General Contracting & Construction',
    tagline: 'End-to-end structural construction with uncompromising precision',
    description:
      'From complex foundation excavations and structural steel frames to turnkey MEP integration, we manage all phases of general construction with licensed master builders and rigorous quality assurance.',
    iconName: 'HardHat',
    features: [
      'Licensed & bonded general contracting',
      'Site engineering & foundation underpinning',
      'Rigorous subcontractor oversight & safety compliance',
      'LEED-certified green building practices',
    ],
    badge: 'Core Service',
  },
  {
    id: 'interior-architecture',
    title: 'Bespoke Interior Architecture',
    tagline: 'Harmonizing spatial flow, lighting geometry, and fine materials',
    description:
      'We craft tailored interior ecosystems where every shadow reveal, partition alignment, and acoustic property is thoughtfully orchestrated for elevated comfort and visual impact.',
    iconName: 'LayoutGrid',
    features: [
      'Custom spatial planning & layout reconfigurations',
      'Architectural lighting & circadian control design',
      'Integrated shadow reveals & flush detailing',
      'Acoustic modeling & environmental isolation',
    ],
    badge: 'Popular',
  },
  {
    id: 'custom-millwork',
    title: 'Custom Millwork & Cabinetry',
    tagline: 'Master artisan woodwork and precision stone craftsmanship',
    description:
      'Our dedicated fabrication workshop produces museum-grade architectural millwork, bookmatched veneer libraries, custom walk-in dressing suites, and integrated concealed storage.',
    iconName: 'Hammer',
    features: [
      'Dedicated fabrication shop & handcrafting',
      'Exotic wood sourcing & bookmatched veneers',
      'Concealed mechanical & audio integrations',
      'Hand-applied natural oil & lacquer finishes',
    ],
  },
  {
    id: 'commercial-fitouts',
    title: 'Commercial & Retail Fit-Outs',
    tagline: 'High-performance workspaces, boutique retail, and hospitality',
    description:
      'We engineer inspiring commercial environments designed to foster brand prestige, productivity, and customer immersion, built with agile scheduling to minimize operational downtime.',
    iconName: 'Building2',
    features: [
      'Accelerated fast-track construction schedules',
      'Corporate boardroom & conference tech integration',
      'Retail display fabrication & experiential zones',
      'Building department code expediting & compliance',
    ],
  },
  {
    id: 'historic-restoration',
    title: 'Historic Preservation & Remodeling',
    tagline: 'Preserving architectural heritage while modernizing infrastructure',
    description:
      'Expert restoration of brownstones, lofts, and heritage estates. We carefully restore historic plasterwork, masonry facades, and timber frameworks while weaving in modern smart systems.',
    iconName: 'Sparkles',
    features: [
      'Historic Landmarks Preservation Commission approvals',
      'Facade masonry repointing & brownstone restoration',
      'Period-accurate wood moulding and plaster recreation',
      'Concealed high-efficiency HVAC & electrical upgrades',
    ],
  },
  {
    id: 'project-management',
    title: 'Turnkey Project Management',
    tagline: 'Transparent budgeting, digital timelines, and single-point accountability',
    description:
      'Eliminate client stress with a dedicated senior project director who manages municipal permits, procurement pipelines, schedule milestones, and cost accounting.',
    iconName: 'ClipboardCheck',
    features: [
      'Dedicated client portal with weekly video progress',
      'Real-time cost tracking & open-book accounting',
      'Material procurement & global shipping logistics',
      'Final punch-list completion & warranty handover',
    ],
  },
];

export const processSteps: ProcessStep[] = [
  {
    number: '01',
    title: 'Discovery & Spatial Feasibility',
    description:
      'We evaluate your site, review structural blueprints, analyze zoning regulations, and align on budget scope and design aspirations.',
    deliverables: ['Site survey report', 'Zoning & structural audit', 'Preliminary budget matrix'],
  },
  {
    number: '02',
    title: 'Architectural Design & 3D Modeling',
    description:
      'Our architects produce detailed schematic drawings, photo-realistic 3D visualizations, material moodboards, and engineering specifications.',
    deliverables: ['Photorealistic 3D renders', 'CAD construction sets', 'Material & finish sample board'],
  },
  {
    number: '03',
    title: 'Engineering & Master Construction',
    description:
      'Our licensed builders execute demolition, structural reinforcement, MEP rough-ins, and precision fabrication with continuous quality checkpoints.',
    deliverables: ['Permit sign-offs', 'Weekly milestone updates', 'Strict quality control checklists'],
  },
  {
    number: '04',
    title: 'Fine Finishing & Turnkey Handover',
    description:
      'We install bespoke millwork, apply artisan wall finishes, calibrate smart home lighting, conduct deep cleaning, and deliver final documentation.',
    deliverables: ['Air & acoustic test certs', 'Full operations manual', 'Comprehensive 2-year warranty'],
  },
];

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Julian Vance',
    role: 'Managing Partner',
    company: 'Vance Capital Holdings',
    location: 'Boston, MA',
    project: 'Aethel Partners HQ (24,000 sq. ft.)',
    comment:
      'Vanguard delivered our commercial headquarters with phenomenal precision. Their ability to handle high-spec acoustic engineering while keeping our timeline intact was unlike any contractor we have worked with.',
    rating: 5,
    avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
  },
  {
    id: '2',
    name: 'Elena Rostova',
    role: 'Homeowner & Art Collector',
    company: 'Tribeca Residence',
    location: 'New York, NY',
    project: 'Lumina Penthouse (5,800 sq. ft.)',
    comment:
      'Our penthouse required intricate museum-grade lighting and custom walnut paneling to house delicate art pieces. The craftsmanship is flawless down to every millimeter. They treated our home like their own masterpiece.',
    rating: 5,
    avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
  },
  {
    id: '3',
    name: 'Marcus Sterling',
    role: 'Principal Developer',
    company: 'Sterling Coastal Properties',
    location: 'Montauk, NY',
    project: 'Serenity Monolithic Coastal Villa',
    comment:
      'Building in Montauk comes with brutal environmental and zoning constraints. Vanguard handled everything with immense professionalism and architectural mastery. The board-formed concrete work is breathtaking.',
    rating: 5,
    avatarUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
  },
];
