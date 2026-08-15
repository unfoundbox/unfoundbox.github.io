export interface Project {
  name: string;
  tagline: string;
  description: string;
  tags: string[];
  url?: string;
  githubUrl?: string;
  badge?: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    name: 'launchy.video',
    tagline: 'AI Product Launch Videos',
    description: 'Turn a product, repository, or launch brief into a polished, high-converting launch video — fast.',
    tags: ['Video AI', 'HyperFrames', 'Remotion', 'Web'],
    url: 'https://launchy.video',
    badge: 'Live',
    featured: true,
  },
  {
    name: 'lookaround.space',
    tagline: 'Navigable 3D Web Spaces',
    description: 'Explore real-world places in immersive, navigable 3D Gaussian splatting and WebGL right inside the browser.',
    tags: ['WebGL', 'WebGPU', '3D', 'Next.js'],
    url: 'https://lookaround.space',
    badge: 'Live',
    featured: true,
  },
  {
    name: 'webgpu-video-processor',
    tagline: 'Browser-Native GPU Video Pipeline',
    description: 'Hardware-accelerated client-side video processing with WebCodecs, WebGPU shaders, and WebGL2 fallbacks.',
    tags: ['WebGPU', 'WebCodecs', 'TypeScript', 'WASM'],
    url: 'https://github.com/unfoundbox',
    githubUrl: 'https://github.com/unfoundbox',
    badge: 'Open Source',
    featured: true,
  },
  {
    name: 'founderquest',
    tagline: 'Gamified Founder Field Guide',
    description: 'An interactive, gamified roadmap through the founder journey — from idea validation to scale, camp by camp.',
    tags: ['Interactive', 'Web Apps', 'Startups'],
    url: '/founderquest/',
    badge: 'Interactive',
    featured: true,
  },
  {
    name: 'diy-gemma-robot',
    tagline: 'On-Device Multimodal Rover',
    description: 'Split-brain robotics architecture running a local Gemma model on a laptop with deterministic microcontroller firmware.',
    tags: ['Robotics', 'Gemma', 'Local AI', 'Hardware'],
    url: '/posts/diy-smart-robot-gemma/',
    featured: false,
  },
  {
    name: 'bolekaam',
    tagline: 'Voice-First WhatsApp Commerce',
    description: 'Hindi voice assistant on WhatsApp enabling India’s skilled craftsmen to build digital identity and local reputation.',
    tags: ['Voice AI', 'WhatsApp', 'India Tech'],
    url: '/posts/bolekaam/',
    featured: false,
  },
];
