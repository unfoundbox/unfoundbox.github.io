export interface ResearchItem {
  id: string;
  title: string;
  category: string;
  description: string;
  url: string;
  isStandalone: boolean;
  date: string;
  tags: string[];
}

export const researchItems: ResearchItem[] = [
  {
    id: 'webgpu-local-inference',
    title: 'Local Inference on WebGPU',
    category: 'Deep Research & Benchmarks',
    description: 'Benchmarking on-device SLMs, streaming ASR, vision-language models, and memory limits inside browser runtimes.',
    url: '/research/webgpu-local-inference/',
    isStandalone: true,
    date: 'June 2026',
    tags: ['WebGPU', 'ONNX', 'Local AI'],
  },
  {
    id: 'ai-future-landscape',
    title: 'The Future of AI: Map of Disagreement',
    category: 'Landscape Map',
    description: 'A visual taxonomy of core disagreements on takeoff dynamics, physical bottlenecks, compute economics, and jagged intelligence.',
    url: '/research/ai-future-landscape/',
    isStandalone: true,
    date: 'June 2026',
    tags: ['AI Strategy', 'Infrastructure', 'Takeoff'],
  },
  {
    id: 'india-data-center-capacity',
    title: 'India Data Center Capacity & Grid',
    category: 'Market Report',
    description: 'Normalized operational IT load, 1.5GW+ base, 2027 pipeline forecasts, and power procurement bottlenecks for AI clusters in India.',
    url: '/research/india-data-center-capacity/',
    isStandalone: true,
    date: 'June 2026',
    tags: ['Data Centers', 'India', 'Power Grid'],
  },
  {
    id: 'diy-smart-robot-gemma',
    title: 'DIY Smart Robot With Gemma Brain',
    category: 'Visual Booklet',
    description: 'System schematics, microcontroller firmware boundaries, sensor integration, and local reasoning scaffolds for maker rovers.',
    url: '/research/diy-smart-robot-gemma/',
    isStandalone: true,
    date: 'June 2026',
    tags: ['Robotics', 'Gemma', 'Hardware'],
  },
  {
    id: 'saurabh-timeline',
    title: 'Interactive Career & Nomad Timeline',
    category: 'Visual Journey',
    description: 'An interactive historical timeline spanning early Rajasthan coding, BIT Bangalore, fintech startups, Hopin/StreamYard, and nomad journeys.',
    url: '/research/saurabh-timeline/',
    isStandalone: true,
    date: 'Personal Timeline',
    tags: ['Nomad', 'Startups', 'Career'],
  },
];
