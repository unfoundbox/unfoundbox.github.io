export interface TimelineMilestone {
  period: string;
  role: string;
  company: string;
  companyUrl?: string;
  location: string;
  description: string;
  stats?: { label: string; value: string }[];
  highlights: string[];
  tags: string[];
}

export const timelineMilestones: TimelineMilestone[] = [
  {
    period: '2024 – Present',
    role: 'Independent Builder & Nomad',
    company: 'Katana · MotionVector · unfoundbox',
    location: 'Udaipur · Bangkok · Da Nang',
    description: 'Operating independently at the frontier of local AI, WebGPU super-resolution (Katana), programmatic motion (MotionVector), and 3D web environments (Lookaround).',
    stats: [
      { label: 'Base', value: 'Udaipur & SE Asia' },
      { label: 'Focus', value: 'WebGPU + Video AI' },
      { label: 'Mode', value: 'Building in Public' },
    ],
    highlights: [
      'Pioneering WebGPU video super-resolution and local inference with Katana',
      'Built Lookaround (interactive 3D Gaussian splatting in browser)',
      'Shipped Launchy (automated AI product launch video engine)',
      'Nomading across Bangkok, Da Nang, and Rajasthan while building in the open',
    ],
    tags: ['Katana', 'MotionVector', 'WebGPU', 'Digital Nomad'],
  },
  {
    period: '2023 – 2024',
    role: 'Senior Software Engineer',
    company: 'StreamYard',
    companyUrl: 'https://streamyard.com',
    location: 'Remote',
    description: 'Engineered high-scale browser video streaming, WebRTC/WebCodecs pipelines, and live broadcast infrastructure powering millions of creators globally.',
    stats: [
      { label: 'Scale', value: 'Millions of streams' },
      { label: 'Core', value: 'WebCodecs & WebRTC' },
      { label: 'Domain', value: 'Live Broadcast' },
    ],
    highlights: [
      'Maintained mission-critical browser broadcast studio reliability and video encoding',
      'Engineered low-latency client-side video transforms and audio/video pipelines',
      'Collaborated on post-acquisition video platform architecture',
    ],
    tags: ['Video Infra', 'WebRTC', 'WebCodecs', 'Scale'],
  },
  {
    period: '2021 – 2023',
    role: 'Applied AI & Senior Video Engineer',
    company: 'Hopin (via Vectorly Acquisition)',
    companyUrl: 'https://hopin.com',
    location: 'Remote',
    description: 'Joined via Vectorly acqui-hire. Led applied ML initiatives, video intelligence proof-of-concepts, dataset curation, and smart clip detection using LLMs for video conferences.',
    stats: [
      { label: 'Exit', value: 'Acquired by Hopin' },
      { label: 'Focus', value: 'Applied ML & LLMs' },
      { label: 'Offsites', value: 'Cancun & Global' },
    ],
    highlights: [
      'Created automated smart clip detection algorithms for podcast and live video content',
      'Built ML research benchmarks and integrated client-side SDKs for enterprise events',
      'Traveled with the global Hopin team (Cancun offsite, international remote collaboration)',
    ],
    tags: ['Hopin', 'Applied ML', 'LLMs', 'Video AI'],
  },
  {
    period: '2020 – 2021',
    role: 'Founding Engineer',
    company: 'Vectorly (MIT Startup)',
    companyUrl: 'https://sambhattacharyya.com/vectorly',
    location: 'Remote / Boston & Bangalore',
    description: 'Core early engineer at an MIT-backed video compression startup. Engineered browser-native neural video upscaling in WASM and WebGL shaders, leading to acquisition by Hopin.',
    stats: [
      { label: 'Origin', value: 'MIT Sandbox' },
      { label: 'Tech', value: 'Neural Upscaling' },
      { label: 'Offsite', value: 'Koh Phangan, Thailand' },
    ],
    highlights: [
      'Built real-time client-side neural upscaling and compression shaders',
      'Navigated multiple product iterations from video codecs to acqui-hire by Hopin',
      'First digital nomad team offsite in Koh Phangan, Thailand',
    ],
    tags: ['Founding Team', 'Neural Upscaling', 'WASM/WebGL', 'Acquisition'],
  },
  {
    period: '2018 – 2020',
    role: 'Founder & Full Stack Lead',
    company: 'Protodit & Early Fintech',
    location: 'Bangalore, India',
    description: 'Conducted customer discovery for Protodit (automated statutory audit software). Built web dashboards and Indiastack API integrations across social fintech startups.',
    stats: [
      { label: 'Interviews', value: '50+ Founders & CAs' },
      { label: 'Stack', value: 'Ember.js & Node' },
      { label: 'APIs', value: 'IndiaStack / Banking' },
    ],
    highlights: [
      'Learned the critical lesson of founder-market fit and startup survival dynamics',
      'Built end-to-end web applications integrating financial APIs and social banking',
    ],
    tags: ['Founder', 'Fintech', 'IndiaStack', '0 to 1'],
  },
  {
    period: '2016 – 2018',
    role: 'Product & Full Stack Developer',
    company: 'Signzy',
    companyUrl: 'https://www.signzy.com',
    location: 'Bangalore, India',
    description: 'Joined IIT alumni-founded startup at seed stage right after dropping out of college. Built digital KYC engines, real-time computer vision extraction, and worked directly with CEO/CTO.',
    stats: [
      { label: 'Stage', value: 'Seed to Series A' },
      { label: 'Role', value: 'Full Stack & CV' },
      { label: 'Recognition', value: 'Fintech Accelerators' },
    ],
    highlights: [
      'Engineered digital identity and document verification pipelines from scratch',
      'Represented Signzy at premier fintech accelerators across India',
      'Worked directly with founders across engineering, architecture, and product management',
    ],
    tags: ['Signzy', 'Fintech KYC', 'Computer Vision', 'Seed Stage'],
  },
];

export const nomadPlaces = [
  { name: 'Udaipur, Rajasthan', desc: 'Hometown base & deep work sanctuary', tag: 'Home' },
  { name: 'Bangalore, Karnataka', desc: 'Early startup years: Signzy, Vectorly, Protodit', tag: 'Startups' },
  { name: 'Koh Phangan, Thailand', desc: 'Vectorly team offsite & first SE Asia nomad taste', tag: 'Offsite' },
  { name: 'Cancun, Mexico', desc: 'Hopin global team offsite during hypergrowth', tag: 'Offsite' },
  { name: 'Bangkok, Thailand', desc: '3 months living, coding, and building independently', tag: 'Nomad' },
  { name: 'Da Nang, Vietnam', desc: '1 month beachside building & local AI research', tag: 'Nomad' },
];
