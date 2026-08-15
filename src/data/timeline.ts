export interface TimelineMilestone {
  period: string;
  role: string;
  company: string;
  companyUrl?: string;
  location: string;
  description: string;
  highlights: string[];
  tags: string[];
}

export const timelineMilestones: TimelineMilestone[] = [
  {
    period: '2024 – Present',
    role: 'Independent Builder & Nomad',
    company: 'unfoundbox / Launchy / Lookaround',
    location: 'Udaipur, India & SE Asia (Bangkok, Da Nang)',
    description: 'Building in the open across local AI, WebGPU media processing, interactive 3D spaces, and product launch video tools.',
    highlights: [
      'Built Lookaround (navigable 3D WebGL / Gaussian splats in browser)',
      'Created Launchy / VibeLaunch for automated video workflows',
      'Authored deep research on WebGPU local inference & India compute infrastructure',
    ],
    tags: ['Local AI', 'WebGPU', 'Nomad', 'Startups'],
  },
  {
    period: '2023 – 2024',
    role: 'Senior Engineer',
    company: 'StreamYard',
    companyUrl: 'https://streamyard.com',
    location: 'Remote',
    description: 'Engineered high-scale browser video streaming, WebRTC/WebCodecs pipelines, and live broadcast infrastructure used by millions.',
    highlights: [
      'Maintained mission-critical browser studio performance and video encoding',
      'Refined live studio features with low-latency client pipelines',
    ],
    tags: ['Video Infra', 'WebRTC', 'Scale'],
  },
  {
    period: '2021 – 2023',
    role: 'Applied AI / Senior Engineer',
    company: 'Hopin',
    companyUrl: 'https://hopin.com',
    location: 'Remote',
    description: 'Joined via Vectorly acqui-hire. Led applied ML initiatives, video intelligence POCs, dataset generation, and smart clip detection algorithms using LLMs.',
    highlights: [
      'Developed smart clip detection algorithms for podcast and live video streams',
      'Built internal ML research pipelines and full-stack video integrations',
    ],
    tags: ['Applied ML', 'Video Processing', 'LLMs'],
  },
  {
    period: '2020 – 2021',
    role: 'Founding Engineer',
    company: 'Vectorly (MIT Startup)',
    companyUrl: 'https://sambhattacharyya.com/vectorly',
    location: 'Remote / Boston & Bangalore',
    description: 'Pioneered AI-driven video upscaling and neural compression in the browser using custom WASM/WebGL shaders.',
    highlights: [
      'Engineered real-time browser neural upscaling engine',
      'Navigated startup pivots to acquisition by Hopin',
    ],
    tags: ['Founding Team', 'Neural Upscaling', 'WebGL', 'Acquisition'],
  },
  {
    period: '2018 – 2020',
    role: 'Founder & Full Stack Lead',
    company: 'Protodit & Early Startups',
    location: 'Bangalore, India',
    description: 'Explored automated statutory auditing software (Protodit), conducted user discovery interviews, and built web dashboards with IndiaStack APIs at fintech startups.',
    highlights: [
      'Conducted dozens of founder/user discovery interviews in fintech',
      'Shipped Ember.js & Node.js dashboards with open banking integrations',
    ],
    tags: ['Founder', 'Fintech', 'IndiaStack'],
  },
  {
    period: '2016 – 2018',
    role: 'Product & Full Stack Developer',
    company: 'Signzy',
    companyUrl: 'https://www.signzy.com',
    location: 'Bangalore, India',
    description: 'Early-stage hire at seed stage. Built digital KYC engines, real-time computer vision extraction, and assisted executive leadership across product accelerators.',
    highlights: [
      'Engineered digital identity and document verification pipelines',
      'Represented company at premier global fintech accelerators',
    ],
    tags: ['Fintech KYC', 'Computer Vision', 'Seed Stage'],
  },
];
